import { ResponseMetadataType } from "@/types/types/api.types";

export type SuccessResponseOptionsType<T = unknown> = {
  status?: string;
  statusCode?: number;
  message?: string | null;
  data?: T | null;
};

export type ErrorLogMetadataType = ResponseMetadataType & {
  isOperational: boolean;
};

export type ResponseData = {
  constructor?: { name?: string };
  toObject?: () => Record<string, unknown>;
  toString?: () => string;
  [key: string]: unknown;
};
