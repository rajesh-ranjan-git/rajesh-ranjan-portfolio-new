import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import ExperienceTimeline from "@/components/experience/experience.timeline";
import experienceStyles from "@/animations/experience.module.css";

const Experience = ({ title, description }: SectionProps) => {
  return (
    <section id="experience" className={experienceStyles.section_experience}>
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <ExperienceTimeline />
    </section>
  );
};

export default Experience;
