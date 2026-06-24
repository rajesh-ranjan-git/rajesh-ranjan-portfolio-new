import { ReactNode } from "react";
import {
  AboutTextRowType,
  FloatingBadgePositionType,
  FloatingBadgeFloatType,
} from "@/types/types/common.types";

export interface ReactNodeProps {
  children: ReactNode;
}

export interface BannerProps {
  nodeVersion: string;
}

export interface ButtonProps {
  btnTextSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  variant?: "mask-1" | "mask-2";
  color: string;
  children: string | ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface TypewriterProps {
  words: string[];
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

export interface BackdropOverlayProps {
  when: boolean;
  callback: () => void;
}

export interface FloatingBadgeProps {
  position?: FloatingBadgePositionType;
  type?: FloatingBadgeFloatType;
  duration?: number;
  textColor?: string;
  bgColor?: string;
  className?: string;
  children?: string | ReactNode;
}

export interface ImageBackgroundProps {
  className?: string;
}

export interface AboutTextProps {
  title: string;
  description: string;
  details: AboutTextRowType[];
}
