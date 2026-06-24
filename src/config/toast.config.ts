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
    cn: "",
    text: "text-emerald-600",
    icon: FiCheckCircle,
    iconColor: "text-emerald-500",
    progress: "bg-emerald-500",
  },
  error: {
    cn: "",
    text: "text-rose-600",
    icon: FiAlertCircle,
    iconColor: "text-rose-500",
    progress: "bg-rose-500",
  },
  warning: {
    cn: "",
    text: "text-orange-600",
    icon: TbAlertTriangle,
    iconColor: "text-orange-500",
    progress: "bg-orange-500",
  },
  info: {
    cn: "",
    text: "text-accent-blue",
    icon: FaInfoCircle,
    iconColor: "text-accent-blue",
    progress: "bg-accent-blue",
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
