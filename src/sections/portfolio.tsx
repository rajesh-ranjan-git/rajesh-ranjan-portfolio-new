import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import Card from "@/components/ui/card/card";

const Portfolio = ({ title, description }: SectionProps) => {
  return (
    <section id="portfolio">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <Card>
        <h3 className="mb-2 font-semibold text-primary text-lg">Portfolio</h3>

        <p className="text-secondary text-sm leading-7">
          This place is reserved for portfolio section.
        </p>
      </Card>
    </section>
  );
};

export default Portfolio;
