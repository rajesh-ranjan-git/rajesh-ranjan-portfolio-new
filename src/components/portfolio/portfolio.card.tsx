import Image from "next/image";
import Link from "next/link";
import portfolioStyles from "@/animations/portfolio.module.css";
import Card from "@/components/ui/card/card";

const PortfolioCard = () => {
  return (
    <Card className="bg-fixed-dark px-0 py-0 w-full">
      <div className="group/image relative bg-fixed-dark rounded-b-xl hover:rounded-b-none overflow-hidden transition-all duration-500">
        <Image
          src="/assets/certificates/mern-gfg-certificate.jpg"
          alt="Project 1"
          width={400}
          height={400}
          className="w-full h-full object-cover object-top group-hover/image:scale-300 origin-top-left transition-all duration-1200 pointer-events-none"
        />
        <div className="text-fixed-light absolute bg-fixed-dark/90 opacity-0 group-hover/image:opacity-100 p-6 w-full h-full transition-all group-hover/image:-translate-y-full duration-1200">
          <h5 className="font-normal scale-20 group-hover/image:scale-100 origin-left transition-all duration-1200">
            Description of project
          </h5>
        </div>
      </div>
      <div className="flex justify-between items-center bg-fixed-dark px-4 py-2 w-full">
        <Link
          href="/"
          className={`inline-block before:-bottom-px before:left-0 before:absolute relative before:rounded-lg before:w-0 hover:before:w-full before:h-0.75 font-semibold uppercase transition-all before:transition-all duration-300 before:duration-300 before:bg-accent-pink ${portfolioStyles.link_mask}`}
        >
          Project
        </Link>
        <Link
          href="/"
          className={`inline-block before:-bottom-px before:left-0 before:absolute relative before:rounded-lg before:w-0 hover:before:w-full before:h-0.75 transition-all before:transition-all duration-300 before:duration-300 before:bg-accent-pink ${portfolioStyles.link_mask}`}
        >
          View more
        </Link>
      </div>
    </Card>
  );
};

export default PortfolioCard;
