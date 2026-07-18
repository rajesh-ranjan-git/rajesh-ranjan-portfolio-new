import { CarouselSlide } from "@/types/types/carousel.types";

export interface CarouselProps {
  slides: readonly CarouselSlide[];
  slideHeightClassName?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  rounded?: boolean;
  className?: string;
}
