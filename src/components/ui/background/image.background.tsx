import { ImageBackgroundProps } from "@/types/props/common.props.types";

const ImageBackground = ({ className }: ImageBackgroundProps) => {
  return (
    <div
      className={`-z-1 absolute inset-0 bg-white/20 rounded-[84px] ${className}`}
    />
  );
};

export default ImageBackground;
