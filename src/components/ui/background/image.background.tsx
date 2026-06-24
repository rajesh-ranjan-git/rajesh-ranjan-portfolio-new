import { ImageBackgroundProps } from "@/types/props/common.props.types";

const ImageBackground = ({ className }: ImageBackgroundProps) => {
  return (
    <div
      className={`-z-1 absolute inset-0 rounded-[84px] bg-image-frame-layer-bg border border-image-frame-layer-border shadow-[0_8px_32px_rgba(13,15,43,0.08),0_2px_8px_rgba(13,15,43,0.04)] ${className}`}
    />
  );
};

export default ImageBackground;
