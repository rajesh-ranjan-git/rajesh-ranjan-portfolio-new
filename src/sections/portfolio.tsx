"use client";

import { useEffect, useState } from "react";
import { ownerConfig } from "@/config/owner.config";
import { PortfolioItem } from "@/types/types/sections.types";
import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import PortfolioFilters from "@/components/portfolio/portfolio.filters";
import PortfolioCard from "@/components/portfolio/portfolio.card";

const Portfolio = ({ title, description }: SectionProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [filteredCards, setFilteredCards] = useState<PortfolioItem[]>([
    ...ownerConfig.portfolio,
  ]);

  const filterSet = new Set(
    ownerConfig.portfolio.map((item) => item.primaryTech),
  );

  const handleFilter = (item: string) => {
    setActiveFilter(item);
  };

  useEffect(() => {
    setFilteredCards(
      activeFilter === "all"
        ? [...ownerConfig.portfolio]
        : ownerConfig.portfolio.filter(
            (item) => item.primaryTech === activeFilter,
          ),
    );
  }, [activeFilter]);

  return (
    <section id="portfolio">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <PortfolioFilters
        filters={[...filterSet]}
        activeFilter={activeFilter}
        handleFilter={handleFilter}
      />

      <div className="justify-between items-center gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {filteredCards.map((item, index) => (
          <PortfolioCard key={`${item.title}-${index}`} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
