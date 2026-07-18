"use client";

import { useState } from "react";
import { categories, portfolio } from "@/config/owner.config";
import { PortfolioItem } from "@/types/types/sections.types";
import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import PortfolioFilters from "@/components/portfolio/portfolio.filters";
import PortfolioCard from "@/components/portfolio/portfolio.card";

const Portfolio = ({ title, description }: SectionProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const handleFilter = (item: string) => {
    setActiveFilter(item);
  };

  const sortedPortfolio = portfolio.sort((a, b) => b.id - a.id);

  const filteredCards: PortfolioItem[] =
    activeFilter === "all"
      ? sortedPortfolio
      : sortedPortfolio.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <PortfolioFilters
        filters={[...categories]}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      />

      <div className="justify-between items-center gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {filteredCards.map((item, index) => (
          <PortfolioCard key={`${item.title}-${index}`} portfolioItem={item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
