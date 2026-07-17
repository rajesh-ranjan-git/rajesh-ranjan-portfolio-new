import { certificates } from "@/config/owner.config";
import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import Carousel from "@/components/ui/carousel/carousel";

const Certificates = ({ title, description }: SectionProps) => {
  return (
    <section id="certificates">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <div className="w-full">
        <Carousel
          slides={certificates}
          autoPlay
          autoPlayInterval={3000}
          showArrows={false}
          slideHeightClassName="h-72 sm:h-80 md:h-96 lg:h-104"
        />
      </div>
    </section>
  );
};

export default Certificates;
