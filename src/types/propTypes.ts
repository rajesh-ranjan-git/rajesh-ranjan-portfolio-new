export interface ButtonProps {
  btnText: string;
  btnTextSize?: string;
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
