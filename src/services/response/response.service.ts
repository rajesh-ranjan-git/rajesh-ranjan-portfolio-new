import { NextResponse } from "next/server";
import { httpStatusConfig } from "@/config/http.config.js";
import { BASE_URL, MODE } from "@/constants/env.constants.js";
import { sanitizeMongoData } from "@/utils/db.utils.js";
import { getDateToStore } from "@/utils/date.utils.js";
import AppError from "@/services/error/error.service.js";

class ResponseService {
  successResponseHandler(
    request,
    response,
    {
      status = httpStatusConfig.success.message,
      statusCode = httpStatusConfig.success.statusCode,
      message = null,
      data = null,
    } = {},
  ) {
    return NextResponse.json(response, {
      success: true,
      status,
      statusCode,
      message,
      data: sanitizeMongoData(data),
      timestamp: getDateToStore(new Date()),
      metadata:
        MODE === "development"
          ? {
              requestId: request.headers["x-request-id"],
              path: request.originalUrl || request.url,
              method: request.method,
            }
          : null,
    });
  }

  errorResponseHandler(error, request, response, next) {
    let errorResponse;

    const errMessage = error?.message ?? "";

    const logMetadata = {
      path: error?.metadata?.path || request.originalUrl || req.url,
      requestId: error?.requestId || request.headers["x-request-id"],
      isOperational:
        errMessage.startsWith("Unexpected token") ||
        errMessage.startsWith("Expected")
          ? true
          : error?.isOperational || false,
      method: request.method,
    };

    if (error instanceof AppError) {
      errorResponse = {
        success: false,
        status: error.name,
        code: error.code,
        statusCode: error.statusCode,
        message: error.message,
        details: error.details,
        timestamp: error.timestamp,
        metadata:
          MODE === "development"
            ? {
                path:
                  error?.metadata?.path || request.originalUrl || request.url,
                requestId: error?.requestId || request.headers["x-request-id"],
                isOperational: error?.isOperational || false,
                method: request.method,
              }
            : null,
      };

      logger.logAppError(error, {
        ...errorResponse,
        metadata: logMetadata,
      });

      return NextResponse.json(response, errorResponse);
    }

    errorResponse = {
      success: false,
      status: error.name || httpStatusConfig.internalServerError.statusCode,
      code: error.code || "UNEXPECTED ERROR",
      statusCode:
        error.statusCode || httpStatusConfig.internalServerError.statusCode,
      message:
        errMessage.startsWith("Unexpected token") ||
        errMessage.startsWith("Expected")
          ? "Please provide a valid input!"
          : errMessage || "An unexpected error has occurred!",
      details: null,
      timestamp: getDateToStore(new Date()),
      metadata: MODE === "development" ? logMetadata : null,
    };

    logger.error({ error, extra: response });

    return NextResponse.json(response, errorResponse);
  }
}

export const responseService = new ResponseService();
