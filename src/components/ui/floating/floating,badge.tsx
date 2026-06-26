import aboutStyles from "@/animations/about.module.css";
import {
  FloatingBadgeFloatType,
  FloatingBadgePositionType,
} from "@/types/types/common.types";
import { FloatingBadgeProps } from "@/types/props/common.props.types";

const FloatingBadge = ({
  position,
  type,
  duration = 3,
  textColor,
  bgColor,
  className,
  children,
}: FloatingBadgeProps) => {
  const getBadgePosition = (position?: FloatingBadgePositionType) => {
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

  const getBadgeFloatingType = (type?: FloatingBadgeFloatType) => {
    switch (type) {
      case "float-x":
        return aboutStyles.float_x;

      case "float-x-reverse":
        return aboutStyles.float_x_reverse;

      case "float-y":
        return aboutStyles.float_y;

      case "float-y-reverse":
        return aboutStyles.float_y_reverse;

      case "float-diagonal":
        return aboutStyles.float_diagonal;

      case "float-diagonal-reverse":
        return aboutStyles.float_diagonal_reverse;

      default:
        return aboutStyles.float_x;
    }
  };

  return (
    <div
      style={
        {
          "--float-duration": `${duration}s`,
        } as React.CSSProperties
      }
      className={`absolute px-4 sm:px-6 py-3 sm:py-4 rounded-[28px] sm:rounded-[36px] font-arima font-bold text-lg sm:text-xl lg:text-2xl border border-accent-blue whitespace-nowrap shadow-lg duration-500 ${textColor ? textColor : "text-badge-text"} ${bgColor ? bgColor : "bg-badge-bg"} ${getBadgePosition(position)} ${getBadgeFloatingType(type)} ${className}`}
    >
      {children || "Badge"}
    </div>
  );
};

export default FloatingBadge;
