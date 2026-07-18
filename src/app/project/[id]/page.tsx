import { certificates } from "@/config/owner.config";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import Carousel from "@/components/ui/carousel/carousel";

const ProjectDetailsPage = () => {
  const title = "Project Details Page";
  const description = "project details will be visible here.";

  return (
    <section>
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <div className="w-full">
        <Carousel
          slides={certificates}
          autoPlay
          autoPlayInterval={3000}
          showArrows={false}
          slideHeightClassName="h-72 sm:h-80 md:h-96 lg:h-104"
        />
      </div>
    </section>
  );
};

export default ProjectDetailsPage;
