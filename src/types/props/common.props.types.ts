import { ReactNode } from "react";

export interface ReactNodeProps {
  children: ReactNode;
}

export interface BannerProps {
  nodeVersion: string;
}

export interface ButtonProps {
  btnText: string;
  btnTextSize?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
  variant?: "mask-1" | "mask-2";
  color: string;
  className?: string;
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
