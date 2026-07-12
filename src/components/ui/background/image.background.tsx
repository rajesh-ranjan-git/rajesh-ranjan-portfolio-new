import { ImageBackgroundProps } from "@/types/props/common.props.types";

const ImageBackground = ({ className }: ImageBackgroundProps) => {
  return (
    <div
      className={`-z-1 absolute inset-0 rounded-[84px] bg-image-frame-bg border border-image-frame-border shadow-[0_12px_20px_var(--color-card-shadow)] ${className}`}
    />
  );
};

export default ImageBackground;
