import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";

const Portfolio = ({ title }: SectionProps) => {
  return (
    <section id="portfolio">
      {title ? <SectionHeading heading={title} /> : null}

      <div className="items-center gap-12 md:gap-24 grid grid-cols-1 lg:grid-cols-[minmax(18rem,20rem)_minmax(0,1fr)] w-full">
        Portfolio section contents coming soon...
      </div>
    </section>
  );
};

export default Portfolio;
