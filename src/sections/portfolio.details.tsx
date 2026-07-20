import { CarouselSlide } from "@/types/types/carousel.types";
import { PortfolioDetailsProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import PortfolioInformation from "@/components/portfolio/portfolio.information";
import Carousel from "@/components/ui/carousel/carousel";

const PortfolioDetails = ({ project }: PortfolioDetailsProps) => {
  const slides: CarouselSlide[] =
    project?.images?.map((imageSrc) => ({
      imageSrc,
      alt: project.title,
    })) ?? [];

  return (
    <section>
      {project?.title ? (
        <SectionHeading title={`${project.title} Details`} />
      ) : null}

      <div className="relative">
        {slides.length ? (
          <div className="w-full">
            <Carousel
              slides={slides}
              slidesPerViewOverride={1}
              autoPlay
              autoPlayInterval={3000}
              showArrows={false}
              dotsPosition="bottom-left"
              slideHeightClassName="h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem]"
            />
          </div>
        ) : null}

        <PortfolioInformation project={project} />
      </div>
    </section>
  );
};

export default PortfolioDetails;
