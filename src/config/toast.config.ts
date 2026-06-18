import { ToastPositionType } from "@/types/types/toast.types";
import { FaInfoCircle } from "react-icons/fa";
import { FiAlertCircle, FiCheckCircle } from "react-icons/fi";
import { TbAlertTriangle } from "react-icons/tb";

export const toastVariantsConfig = {
  success: "success",
  error: "error",
  warning: "warning",
  info: "info",
} as const;

export const toastPositionsConfig = {
  topLeft: "top-left",
  topRight: "top-right",
  topCenter: "top-center",
  bottomLeft: "bottom-left",
  bottomRight: "bottom-right",
  bottomCenter: "bottom-center",
} as const;

export const toastProgressPositionsConfig = {
  top: "top",
  bottom: "bottom",
} as const;

export const toastProgressDirectionConfig = {
  leftToRight: "left-to-right",
  rightToLeft: "right-to-left",
} as const;

export const variantConfig = {
  success: {
    cn: "bg-green-50 border border-green-200",
    text: "text-green-700",
    icon: FiCheckCircle,
    iconColor: "text-green-600",
    progress: "bg-green-500",
  },
  error: {
    cn: "bg-red-50 border border-red-200",
    text: "text-red-700",
    icon: FiAlertCircle,
    iconColor: "text-red-600",
    progress: "bg-red-500",
  },
  warning: {
    cn: "bg-amber-50 border border-amber-200",
    text: "text-amber-700",
    icon: TbAlertTriangle,
    iconColor: "text-amber-600",
    progress: "bg-amber-500",
  },
  info: {
    cn: "bg-blue-50 border border-blue-200",
    text: "text-blue-700",
    icon: FaInfoCircle,
    iconColor: "text-blue-600",
    progress: "bg-blue-500",
  },
};

export const positionStylesConfig: Record<ToastPositionType, string> = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
};
