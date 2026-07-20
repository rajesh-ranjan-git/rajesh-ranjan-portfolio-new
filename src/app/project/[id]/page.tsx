import type { Metadata } from "next";
import { portfolio } from "@/config/owner.config";
import { PortfolioDetailsPageProps } from "@/types/props/sections.props.types";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import PortfolioDetails from "@/sections/portfolio.details";

export async function generateMetadata({
  params,
}: PortfolioDetailsPageProps): Promise<Metadata> {
  const { id } = await params;

  const project = portfolio.find((item) => item.id === Number(id));

  return {
    title: project?.title ?? "Project Title",
    description: project?.description ?? "Project Description",
  };
}

const PortfolioDetailsPage = async ({ params }: PortfolioDetailsPageProps) => {
  const { id } = await params;

  const project = portfolio.find((item) => item.id === Number(id));

  return (
    <main className="relative pt-10 md:pt-0 pl-0 md:pl-16 min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/#portfolio" },
          { label: project?.title ?? "Project Title" },
        ]}
      />

      <PortfolioDetails project={project} />
    </main>
  );
};

export default PortfolioDetailsPage;
