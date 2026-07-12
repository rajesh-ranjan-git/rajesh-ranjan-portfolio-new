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
    cn: "bg-emerald-50 border-emerald-200",
    text: "text-success",
    icon: FiCheckCircle,
    iconColor: "text-success",
    progress: "bg-success",
  },
  error: {
    cn: "bg-rose-50 border-rose-200",
    text: "text-error",
    icon: FiAlertCircle,
    iconColor: "text-error",
    progress: "bg-error",
  },
  warning: {
    cn: "bg-orange-50 border-orange-200",
    text: "text-orange-600",
    icon: TbAlertTriangle,
    iconColor: "text-orange-500",
    progress: "bg-orange-500",
  },
  info: {
    cn: "border-accent-blue/50",
    text: "text-accent-blue",
    icon: FaInfoCircle,
    iconColor: "text-accent-blue",
    progress: "bg-accent-blue",
  },
};

export const positionStylesConfig = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
};
