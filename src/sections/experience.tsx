import { ownerConfig } from "@/config/owner.config";
import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import ExperienceCard from "@/components/experience/experience.card";

const Experience = ({ title, description }: SectionProps) => {
  return (
    <section id="experience">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      {ownerConfig.professionalExperience.map((experience) => (
        <ExperienceCard key={experience.designation} experience={experience} />
      ))}
    </section>
  );
};

export default Experience;
