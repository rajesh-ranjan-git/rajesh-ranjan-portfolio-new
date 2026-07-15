import experienceStyles from "@/animations/experience.module.css";
import { getExperienceTimeLine } from "@/helpers/owner.helpers";
import { ExperienceCardWrapperProps } from "@/types/props/sections.props.types";
import ExperienceCard from "@/components/experience/experience.card";

const ExperienceCardWrapper = ({
  isReversed,
  experience,
}: ExperienceCardWrapperProps) => {
  const timeline = getExperienceTimeLine(
    experience.startMonth,
    experience.startYear,
    experience.endMonth,
    experience.endYear,
    experience.isCurrent,
  );

  return (
    <div className="relative gap-0 grid grid-cols-[40px_1fr] md:grid-cols-[1fr_72px_1fr] auto-cols-fr py-12 w-full">
      <div
        className={`justify-end items-stretch text-left [grid-area:1/2/2/3] md:[grid-area:auto] ${isReversed ? "md:order-3 md:text-left" : "md:order-1 md:text-right"}`}
      >
        <h4 className="top-[50vh] sticky mb-4 md:mb-0 font-alkatra">
          {timeline || "2026"}
        </h4>
      </div>
      <div className="flex justify-start md:justify-center md:order-2 [grid-area:1/1/3/2] md:[grid-area:auto]">
        <div
          className={`top-[50vh] sticky bg-alternate-secondary border-4 border-alternate-bg rounded-full w-6 h-6 hover:scale-105 transition-all duration-300 ${experienceStyles.timeline_circle}`}
        ></div>
      </div>
      <div
        className={`${experienceStyles.timeline_right} ${isReversed ? "md:order-1" : "md:order-3"}`}
      >
        <ExperienceCard experience={experience} />
      </div>
    </div>
  );
};

export default ExperienceCardWrapper;
