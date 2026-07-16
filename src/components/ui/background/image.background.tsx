import { ImageBackgroundProps } from "@/types/props/common.props.types";

const ImageBackground = ({ className }: ImageBackgroundProps) => {
  return (
    <div
      className={`-z-1 absolute inset-0 rounded-[84px] bg-card-bg hover:bg-card-bg-hover border border-card-border hover:border-card-border-hover shadow-[0_12px_20px_var(--color-card-shadow)] ${className}`}
    />
  );
};

export default ImageBackground;
