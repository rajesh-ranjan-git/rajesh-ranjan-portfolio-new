import aboutStyles from "@/animations/about.module.css";
import { FloatingBadgeProps } from "@/types/props/common.props.types";

const FloatingBadge = ({
  position,
  textColor,
  bgColor,
  className,
  children,
}: FloatingBadgeProps) => {
  const getBadgePosition = (position?: string) => {
    switch (position) {
      case "top-left":
        return "top-12 sm:top-16 lg:top-20 -left-4 sm:-left-8 lg:-left-12";

      case "top-right":
        return "top-12 sm:top-16 lg:top-20 -right-4 sm:-right-8 lg:-right-12";

      case "top-center":
        return "top-0 left-1/2 -translate-x-1/2";

      case "middle-left":
        return "top-1/2 -translate-y-1/2 -left-4 sm:-left-8 lg:-left-12";

      case "middle-right":
        return "top-1/2 -translate-y-1/2 -right-4 sm:-right-8 lg:-right-12";

      case "middle-center":
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";

      case "bottom-left":
        return "bottom-12 sm:bottom-16 lg:bottom-20 -left-4 sm:-left-8 lg:-left-12";

      case "bottom-right":
        return "bottom-12 sm:bottom-16 lg:bottom-20 -right-4 sm:-right-8 lg:-right-12";

      case "bottom-center":
        return "bottom-0 left-1/2 -translate-x-1/2";

      default:
        return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
    }
  };

  return (
    <div
      className={`absolute px-4 sm:px-6 py-3 sm:py-4 rounded-[28px] sm:rounded-[36px] font-arima font-bold text-lg sm:text-xl lg:text-2xl whitespace-nowrap duration-500 ${aboutStyles.float} ${textColor ? textColor : "text-[#1a1f4e]"} ${bgColor ? bgColor : "bg-white"} ${getBadgePosition(position)} ${className}`}
    >
      {children || "Badge"}
    </div>
  );
};

export default FloatingBadge;
