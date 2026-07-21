import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { MODE, LOG_LEVEL, LOG_TARGET } from "@/constants/env.constants";
import { ansiConfig } from "@/config/banner.config";
import { getDateToShow, getDateToStore } from "@/utils/date.utils";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mode = MODE.toLowerCase();
const LOG_DIR = path.resolve(
  process.env.LOG_DIR ?? path.join(__dirname, "../../logs"),
);
const LOGGING_LEVEL = (LOG_LEVEL ?? "info").toLowerCase();

const resolveTargets = () => {
  const explicit = (LOG_TARGET ?? "").toLowerCase();

  if (explicit === "file") return { file: true, db: false };
  if (explicit === "db") return { file: false, db: true };
  if (explicit === "both") return { file: true, db: true };

  if (mode === "production") return { file: true, db: true };
  if (mode === "test") return { file: false, db: false };
  return { file: true, db: false };
};

const TARGETS = resolveTargets();

const LEVELS = { error: 0, warn: 1, info: 2, debug: 3 };

const shouldLog = (level) => {
  return (LEVELS[level] ?? 99) <= (LEVELS[LOGGING_LEVEL] ?? 2);
};

if (TARGETS.file) {
  fs.mkdirSync(LOG_DIR, { recursive: true });
}

const logFilePath = (level) => {
  const date = new Date().toISOString().split("T")[0];
  return path.join(LOG_DIR, `${date}-${level}.log`);
};

const writeToFile = (level, entry) => {
  if (!TARGETS.file) return;
  try {
    const line = JSON.stringify(entry) + "\n";
    fs.appendFileSync(logFilePath(level), line, "utf8");
    fs.appendFileSync(path.join(LOG_DIR, "combined.log"), line, "utf8");
  } catch (ioErr) {
    process.stderr.write(`[logger] File write failed: ${ioErr.message}\n`);
  }
};

let _dbAdapter = null;

export const setDbAdapter = (fn) => {
  if (typeof fn !== "function")
    throw new TypeError("DB adapter must be a function!");
  _dbAdapter = fn;
};

const writeToDB = async (entry) => {
  if (!TARGETS.db) return;
  if (!_dbAdapter) {
    process.stderr.write(
      "[Logger Service] DB target enabled but no adapter registered. " +
        "Call setDbAdapter(fn) to register one.\n",
    );
    return;
  }
  try {
    await _dbAdapter(entry);
  } catch (dbErr) {
    process.stderr.write(`[logger] DB write failed: ${dbErr.message}\n`);
  }
};

const buildEntry = (level, args, context = {}) => {
  const message = args
    .map((a) => (typeof a === "object" ? JSON.stringify(a) : String(a)))
    .join(" ");

  return {
    timestamp: getDateToStore(new Date()),
    level,
    mode,
    message,
    code: context.code ?? "LOG",
    statusCode: context.statusCode ?? undefined,
    details: context.details ?? undefined,
    path: context.path ?? undefined,
    requestId: context.requestId ?? undefined,
    isOperational: context.isOperational ?? undefined,
    stack:
      mode === "development" || context.isOperational === false
        ? (context.stack ?? undefined)
        : undefined,
    originalStack: context.originalStack ?? undefined,
    meta: context.meta ?? undefined,
  };
};

const runSinks = async (level, args, context = {}) => {
  if (mode === "test" || !shouldLog(level)) return;
  const entry = buildEntry(level, args, context);
  writeToFile(level, entry);
  await writeToDB(entry);
};

const isServer = typeof window === "undefined";

const css = {
  info: "color:#38bdf8;font-weight:bold;",
  log: "color:#22c55e;font-weight:bold;",
  debug: "color:#d8b4fe;font-weight:bold;",
  warn: "color:#f59e0b;font-weight:bold;",
  error: "color:#ef4444;font-weight:bold;",
};

const serverPrint = (
  method: "info" | "log" | "warn" | "error" | "debug",
  color: string,
  label: string,
  args: unknown[],
) => {
  console[method](`${color}${label}`, ...args);
};

const browserPrint = (
  method: "info" | "log" | "warn" | "error" | "debug",
  style: string,
  label: string,
  args: unknown[],
) => {
  console[method](`%c${label}`, style, ...args);
};

const logger = {
  info: (...args: unknown[]) => {
    if (isServer) {
      serverPrint(
        "info",
        ansiConfig.blue,
        `⏰ [${getDateToShow(new Date())}] 📢 [ INFO ]`,
        args,
      );

      runSinks("info", args, { code: "INFO" });
    } else {
      browserPrint(
        "info",
        css.info,
        `⏰ [${getDateToShow(new Date())}] 📢 [ INFO ]`,
        args,
      );
    }
  },

  success: (...args: unknown[]) => {
    if (isServer) {
      serverPrint(
        "log",
        ansiConfig.green,
        `⏰ [${getDateToShow(new Date())}] ✅ [ SUCCESS ]`,
        args,
      );

      runSinks("info", args, { code: "SUCCESS" });
    } else {
      browserPrint(
        "log",
        css.log,
        `⏰ [${getDateToShow(new Date())}] ✅ [ SUCCESS ]`,
        args,
      );
    }
  },

  log: (...args: unknown[]) => {
    if (isServer) {
      serverPrint(
        "log",
        ansiConfig.green,
        `⏰ [${getDateToShow(new Date())}] 📝 [ LOG ]`,
        args,
      );

      runSinks("log", args, { code: "LOG" });
    } else {
      browserPrint(
        "log",
        css.log,
        `⏰ [${getDateToShow(new Date())}] 📝 [ LOG ]`,
        args,
      );
    }
  },

  debug: (...args: unknown[]) => {
    if (isServer) {
      serverPrint(
        "debug",
        ansiConfig.magenta,
        `⏰ [${getDateToShow(new Date())}] 🐞 [ DEBUG ]`,
        args,
      );

      runSinks("debug", args, { code: "DEBUG" });
    } else {
      browserPrint(
        "log",
        css.debug,
        `⏰ [${getDateToShow(new Date())}] 🐞 [ DEBUG ]`,
        args,
      );
    }
  },

  warn: (...args: unknown[]) => {
    if (isServer) {
      const incomingError = args[0].appError;
      const incomingErrorMetadata = args[0].metadata;

      if (incomingError && incomingErrorMetadata) {
        const argsToPrint = [
          incomingError.metadata.method || incomingErrorMetadata.metadata.method
            ? `[ ${incomingError.metadata.method || incomingErrorMetadata.metadata.method} ]`
            : null,
          incomingError.statusCode || incomingErrorMetadata.statusCode
            ? `( ${incomingError.statusCode || incomingErrorMetadata.statusCode} )`
            : null,
          incomingError.name ||
          incomingError.status ||
          incomingErrorMetadata.status
            ? `[ ${incomingError.name || incomingError.status || incomingErrorMetadata.status} ]`
            : null,
          incomingError.code || incomingErrorMetadata.appError.code
            ? `[ ${incomingError.code || incomingErrorMetadata.appError.code} ]`
            : null,
          incomingError.message ?? "An unknown warning has occurred!",
          Object.keys(incomingError?.details).length > 0 ||
          Object.keys(incomingErrorMetadata?.details).length > 0
            ? `\nError Details: ${JSON.stringify(
                Object.keys(incomingError?.details).length > 0
                  ? incomingError?.details
                  : incomingErrorMetadata?.details,
                null,
                2,
              )}`
            : null,
          Object.keys(incomingError.metadata).length > 0 ||
          Object.keys(incomingErrorMetadata.metadata).length > 0
            ? `\nError Metadata: ${JSON.stringify(
                {
                  path:
                    incomingError.metadata.path ||
                    incomingErrorMetadata.metadata.path,
                  requestId:
                    incomingError.metadata.requestId ||
                    incomingErrorMetadata.metadata.requestId,
                  isOperational:
                    incomingError.metadata.isOperational ||
                    incomingErrorMetadata.metadata.isOperational,
                },
                null,
                2,
              )}`
            : null,
        ];

        serverPrint(
          "warn",
          ansiConfig.yellow,
          `⏰ [${getDateToShow(new Date())}] 🚨 [ WARNING ]`,
          argsToPrint.filter((v) => v != null),
        );

        runSinks(
          "warn",
          [incomingError.message ?? "An unknown warning has occurred!"],
          {
            ...incomingErrorMetadata,
            ...incomingErrorMetadata.metadata,
          },
        );

        return;
      }

      serverPrint(
        "warn",
        ansiConfig.yellow,
        `⏰ [${getDateToShow(new Date())}] 🚨 [ WARNING ]`,
        args,
      );

      runSinks("warn", args, { code: "WARNING" });
    } else {
      browserPrint(
        "warn",
        css.warn,
        `⏰ [${getDateToShow(new Date())}] 🚨 [ WARNING ]`,
        args,
      );
    }
  },

  error: (...args: unknown[]) => {
    if (isServer) {
      const incomingError = args[0].appError;
      const incomingErrorMetadata = args[0].metadata;

      if (incomingError && incomingErrorMetadata) {
        const argsToPrint = [
          incomingError.metadata.method || incomingErrorMetadata.metadata.method
            ? `[ ${incomingError.metadata.method || incomingErrorMetadata.metadata.method} ]`
            : null,
          incomingError.statusCode || incomingErrorMetadata.statusCode
            ? `( ${incomingError.statusCode || incomingErrorMetadata.statusCode} )`
            : null,
          incomingError.name ||
          incomingError.status ||
          incomingErrorMetadata.status
            ? `[ ${incomingError.name || incomingError.status || incomingErrorMetadata.status} ]`
            : null,
          incomingError.code || incomingErrorMetadata.appError.code
            ? `[ ${incomingError.code || incomingErrorMetadata.appError.code} ]`
            : null,
          incomingError.message ?? "An unknown error has occurred!",
          Object.keys(incomingError.details).length > 0 ||
          Object.keys(incomingErrorMetadata.details).length > 0
            ? `\nError Details: ${JSON.stringify(
                Object.keys(incomingError.details).length > 0
                  ? incomingError.details
                  : incomingErrorMetadata.details,
                null,
                2,
              )}`
            : null,
          Object.keys(incomingError.metadata).length > 0 ||
          Object.keys(incomingErrorMetadata.metadata).length > 0
            ? `\nError Metadata: ${JSON.stringify(
                {
                  path:
                    incomingError.metadata.path ||
                    incomingErrorMetadata.metadata.path,
                  requestId:
                    incomingError.metadata.requestId ||
                    incomingErrorMetadata.metadata.requestId,
                  isOperational:
                    incomingError.metadata.isOperational ||
                    incomingErrorMetadata.metadata.isOperational,
                },
                null,
                2,
              )}`
            : null,
        ];

        serverPrint(
          "error",
          ansiConfig.red,
          `⏰ [${getDateToShow(new Date())}] ❌ [ ERROR ]`,
          argsToPrint.filter((v) => v != null),
        );

        runSinks(
          "error",
          [incomingError.message ?? "An unknown error has occurred!"],
          {
            ...incomingErrorMetadata,
            ...incomingErrorMetadata.metadata,
            stack: incomingError.stack,
          },
        );

        return;
      }

      serverPrint(
        "error",
        ansiConfig.red,
        `⏰ [${getDateToShow(new Date())}] ❌ [ ERROR ]`,
        args,
      );

      runSinks("error", args, { code: "ERROR" });
    } else {
      browserPrint(
        "error",
        css.error,
        `⏰ [${getDateToShow(new Date())}] ❌ [ ERROR ]`,
        args,
      );
    }
  },

  logAppError(appError, metadata) {
    const level =
      (appError.statusCode || metadata.statusCode) >= 500 ? "error" : "warn";

    this[level]({ appError, metadata });
  },

  config: Object.freeze({ mode, TARGETS, LOG_DIR, LOGGING_LEVEL }),
};

if (!globalThis.logger) {
  globalThis.logger = logger;
}

export default logger;

// NOTE: Use logger directly as it is available with global variable
