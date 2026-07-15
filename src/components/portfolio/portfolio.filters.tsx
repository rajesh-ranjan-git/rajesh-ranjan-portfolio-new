import Link from "next/link";
import portfolioStyles from "@/animations/portfolio.module.css";

const PortfolioFilters = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <ul className="text-fixed-light flex flex-wrap justify-center items-center gap-4 hover:bg-card-bg-hover bg-fixed-dark mx-auto mb-16 px-4 py-2 border border-card-border hover:caret-card-border-hover rounded-xl w-max text-center transition-all duration-500">
        <li>
          <Link
            href="/"
            className={`inline-block before:-bottom-px px-4 before:left-0 before:absolute relative before:rounded-lg before:w-0 hover:before:w-full before:h-0.75 font-semibold uppercase transition-all before:transition-all duration-300 before:duration-300 before:bg-accent-pink ${portfolioStyles.link_mask}`}
          >
            All
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`inline-block before:-bottom-px px-4 before:left-0 before:absolute relative before:rounded-lg before:w-0 hover:before:w-full before:h-0.75 font-semibold uppercase transition-all before:transition-all duration-300 before:duration-300 before:bg-accent-pink ${portfolioStyles.link_mask}`}
          >
            React JS
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`inline-block before:-bottom-px px-4 before:left-0 before:absolute relative before:rounded-lg before:w-0 hover:before:w-full before:h-0.75 font-semibold uppercase transition-all before:transition-all duration-300 before:duration-300 before:bg-accent-pink ${portfolioStyles.link_mask}`}
          >
            Next JS
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`inline-block before:-bottom-px px-4 before:left-0 before:absolute relative before:rounded-lg before:w-0 hover:before:w-full before:h-0.75 font-semibold uppercase transition-all before:transition-all duration-300 before:duration-300 before:bg-accent-pink ${portfolioStyles.link_mask}`}
          >
            Vanilla JS
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className={`inline-block before:-bottom-px px-4 before:left-0 before:absolute relative before:rounded-lg before:w-0 hover:before:w-full before:h-0.75 font-semibold uppercase transition-all before:transition-all duration-300 before:duration-300 before:bg-accent-pink ${portfolioStyles.link_mask}`}
          >
            Frontend (HTML, CSS)
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PortfolioFilters;
