import { portfolio } from "@/config/owner.config";
import { ProjectDetailsPageProps } from "@/types/props/sections.props.types";
import { CarouselSlide } from "@/types/types/carousel.types";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import SectionHeading from "@/components/sections/section.heading";
import Carousel from "@/components/ui/carousel/carousel";

const ProjectDetailsPage = async ({ params }: ProjectDetailsPageProps) => {
  const { id } = await params;

  const project = portfolio.find((item) => item.id === Number(id));

  const slides: CarouselSlide[] =
    project?.images?.map((imageSrc) => ({
      imageSrc,
      alt: project.title,
    })) ?? [];

  return (
    <main className="relative pt-10 md:pt-0 pl-0 md:pl-16 min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Portfolio", href: "/#portfolio" },
          { label: project?.title ?? "Project Title" },
        ]}
      />

      <section>
        {project?.title ? (
          <SectionHeading title={`${project.title} Details`} />
        ) : null}

        {slides.length ? (
          <div className="w-full">
            <Carousel
              slides={slides}
              slidesPerViewOverride={1}
              autoPlay
              autoPlayInterval={3000}
              showArrows={false}
              slideHeightClassName="h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[30rem]"
            />
          </div>
        ) : null}
      </section>
    </main>
  );
};

export default ProjectDetailsPage;
