import { CarouselSlide } from "@/types/types/carousel.types";

export interface CarouselProps {
  slides: readonly CarouselSlide[];
  slidesPerViewOverride?: number;
  slideHeightClassName?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  rounded?: boolean;
  scale?: "top" | "bottom" | "right" | "left" | "all";
  className?: string;
}
