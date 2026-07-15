import PortfolioFiltersItem from "@/components/portfolio/portfolio.filters.item";

const portfolioFilterItems = [
  "all",
  "next js",
  "react js",
  "vanilla js",
  "frontend (html, css)",
];

const PortfolioFilters = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <ul className="flex flex-wrap justify-center items-center gap-4 bg-fixed-dark mx-auto mb-16 px-4 py-2 border border-card-border hover:border-card-border-hover rounded-xl w-max text-center transition-all duration-500">
        {portfolioFilterItems.map((item, index) => (
          <PortfolioFiltersItem key={`${item}-${index}`} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default PortfolioFilters;
