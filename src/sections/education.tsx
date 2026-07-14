import { ownerConfig } from "@/config/owner.config";
import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import EducationCard from "@/components/education/education.card";

const Education = ({ title, description }: SectionProps) => {
  return (
    <section id="education">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <div className="justify-center items-center gap-8 grid grid-cols-1 lg:grid-cols-2 w-full">
        {ownerConfig.education &&
          Object.values(ownerConfig.education).map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
      </div>
    </section>
  );
};

export default Education;
