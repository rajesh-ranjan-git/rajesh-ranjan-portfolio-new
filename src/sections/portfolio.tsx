import Image from "next/image";
import Link from "next/link";
import portfolioStyles from "@/animations/portfolio.module.css";
import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import Card from "@/components/ui/card/card";

const Portfolio = ({ title, description }: SectionProps) => {
  return (
    <section id="portfolio">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <Card className="px-0 py-0 w-max">
        <div className="rounded-b-xl overflow-hidden transition-all duration-300">
          <Image
            src="/assets/certificates/mern-gfg-certificate.jpg"
            alt="Project 1"
            width={400}
            height={400}
            className="hover:scale-300 origin-top-left transition-all duration-500"
          />
        </div>
        <div className="flex justify-between items-center bg-fixed-dark px-4 py-2 w-full">
          <Link
            href="/"
            className={`inline-block before:-bottom-px before:left-0 before:absolute relative before:rounded-lg before:w-0 hover:before:w-full before:h-0.75 font-bold uppercase transition-all before:transition-all duration-300 before:duration-300 before:bg-accent-pink ${portfolioStyles.link_mask}`}
          >
            Project
          </Link>
        </div>
      </Card>
    </section>
  );
};

export default Portfolio;
