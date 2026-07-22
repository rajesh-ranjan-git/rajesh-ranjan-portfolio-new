export interface ScrambleTextProps {
  initialText?: string;
  finalText: string;
  trigger?: "mount" | "hover" | "manual";
  scrambleSpeed?: number;
  duration?: number;
  delay?: number;
  characters?: string;
  className?: string;
  onComplete?: () => void;
}
