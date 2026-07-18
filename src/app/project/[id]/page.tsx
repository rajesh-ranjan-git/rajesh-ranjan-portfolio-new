import { certificates, portfolio } from "@/config/owner.config";
import { ProjectDetailsPageProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import Carousel from "@/components/ui/carousel/carousel";

const ProjectDetailsPage = async ({ params }: ProjectDetailsPageProps) => {
  const { id } = await params;

  const project = portfolio.find((item) => item.id === Number(id));

  return (
    <main className="relative pl-0 md:pl-16 min-h-screen">
      <section>
        {project?.title ? (
          <SectionHeading title={`${project?.title} Details`} />
        ) : null}

        <div className="w-full">
          <Carousel
            slides={certificates}
            slidesPerViewOverride={1}
            autoPlay
            autoPlayInterval={3000}
            showArrows={false}
            slideHeightClassName="h-72 sm:h-80 md:h-124"
          />
        </div>
      </section>
    </main>
  );
};

export default ProjectDetailsPage;
