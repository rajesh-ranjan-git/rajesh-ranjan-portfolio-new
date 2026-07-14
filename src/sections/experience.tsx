import { ownerConfig } from "@/config/owner.config";
import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import ExperienceCard from "@/components/experience/experience.card";
import ExperienceTimeline from "@/components/experience/experience.timeline";
import experienceStyles from "@/animations/experience.module.css";

const Experience = ({ title, description }: SectionProps) => {
  return (
    <section id="experience" className={experienceStyles.section_experience}>
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <ExperienceTimeline />

      {/* {ownerConfig.professionalExperience.map((experience) => (
        <ExperienceCard key={experience.designation} experience={experience} />
      ))} */}
    </section>
  );
};

export default Experience;
