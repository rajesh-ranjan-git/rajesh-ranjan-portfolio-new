import { getAboutDetails } from "@/helpers/owner.helpers";
import { SectionProps } from "@/types/props/sections.props.types";
import AboutImage from "@/components/about/about.image";
import AboutText from "@/components/about/about.text";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";

const About = ({ title, description }: SectionProps) => {
  const aboutDetails = getAboutDetails();

  return (
    <section id="about">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <div className="items-center gap-12 md:gap-28 grid grid-cols-1 lg:grid-cols-[minmax(18rem,20rem)_minmax(0,1fr)] lg:pl-12 w-full">
        <AboutImage />

        <AboutText
          title={aboutDetails.title}
          description={aboutDetails.description}
          details={aboutDetails.details}
        />
      </div>
    </section>
  );
};

export default About;
