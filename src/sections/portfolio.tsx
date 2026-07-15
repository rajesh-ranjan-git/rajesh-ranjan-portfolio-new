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

      <Card className="px-0 py-0 w-max" animateBorder>
        <div className="rounded-2xl group-hover:rounded-3xl overflow-hidden transition-all duration-300">
          <Image
            src="/assets/certificates/mern-gfg-certificate.jpg"
            alt="Project 1"
            width={400}
            height={400}
            className="hover:scale-300 origin-top-left transition-all duration-500"
          />
        </div>
        <div className="flex justify-between items-center bg-fixed-dark px-4 py-2 rounded-b-2xl group-hover:rounded-b-3xl w-full">
          <Link
            href="/"
            className={`uppercase font-bold ${portfolioStyles.link_mask}`}
          >
            Project
          </Link>
          <Link
            href="/"
            className={`font-semibold ${portfolioStyles.link_mask}`}
          >
            View more
          </Link>
        </div>
      </Card>
    </section>
  );
};

export default Portfolio;
