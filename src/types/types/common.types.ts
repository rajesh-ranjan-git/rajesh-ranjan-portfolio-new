import { IconType } from "react-icons";
import { storageConfig, themeConfig } from "@/config/common.config";

export type ThemeType = keyof typeof themeConfig;

export type StorageType = keyof typeof storageConfig;

export type StoredDataType<T> = {
  data: T;
  expiresAt?: number;
};

export type FloatingBadgePositionType =
  | "top-left"
  | "top-right"
  | "top-center"
  | "middle-left"
  | "middle-right"
  | "middle-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export type FloatingBadgeFloatType =
  | "float-x"
  | "float-x-reverse"
  | "float-y"
  | "float-y-reverse"
  | "float-diagonal"
  | "float-diagonal-reverse";

export type AboutTextRowType = {
  id: string;
  label: string;
  value: string;
};
