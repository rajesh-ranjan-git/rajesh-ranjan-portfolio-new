import Link from "next/link";
import portfolioStyles from "@/animations/portfolio.module.css";
import { PortfolioFiltersItemProps } from "@/types/props/sections.props.types";

const PortfolioFiltersItem = ({ item }: PortfolioFiltersItemProps) => {
  return (
    <li>
      <Link
        href="/"
        className={`inline-block before:-bottom-px px-4 before:left-0 before:absolute relative before:rounded-lg before:w-0 hover:before:w-full before:h-0.75 font-semibold uppercase transition-all before:transition-all duration-300 before:duration-300 before:bg-accent-pink ${portfolioStyles.link_mask}`}
      >
        {item}
      </Link>
    </li>
  );
};

export default PortfolioFiltersItem;
