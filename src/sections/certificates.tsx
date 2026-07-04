import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import Carousel, { CarouselSlide } from "@/components/ui/carousel/Carousel";

const slides: CarouselSlide[] = [
  {
    id: 1,
    imageUrl: "/assets/certificates/mern-gfg-certificate.jpg",
    alt: "Mountain river",
    content: "Mountain river",
    description: "Mountain river",
  },
  {
    id: 2,
    imageUrl: "/assets/certificates/react-gfg-certificate.jpg",
    alt: "Canyon",
    content: "Canyon",
    description: "Canyon",
  },
  {
    id: 3,
    imageUrl: "/assets/certificates/mern-gfg-certificate.jpg",
    alt: "Forest lake",
    content: "Forest lake",
    description: "Forest lake",
  },
  {
    id: 4,
    imageUrl: "/assets/certificates/react-gfg-certificate.jpg",
    alt: "Coastline",
    content: "Coastline",
    description: "Coastline",
  },
  {
    id: 5,
    imageUrl: "/assets/certificates/mern-gfg-certificate.jpg",
    alt: "Valley",
    content: "Valley",
    description: "Valley",
  },
  {
    id: 6,
    imageUrl: "/assets/certificates/react-gfg-certificate.jpg",
    alt: "Desert",
    content: "Desert",
    description: "Desert",
  },
];

const Certificates = ({ title, description }: SectionProps) => {
  return (
    <section id="certificates">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <div className="w-full">
        <Carousel
          slides={slides}
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
