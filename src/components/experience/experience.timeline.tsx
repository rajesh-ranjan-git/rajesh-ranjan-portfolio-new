import experienceStyles from "@/animations/experience.module.css";
import { ownerConfig } from "@/config/owner.config";
import { getExperienceTimeLine } from "@/helpers/owner.helpers";
import ExperienceCard from "@/components/experience/experience.card";

const ExperienceTimeline = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div
        className={`absolute bg-fixed-secondary w-1 h-full ${experienceStyles.timeline_progress}`}
      >
        <div
          className={`absolute w-1 origin-top ${experienceStyles.timeline_progress_bar}`}
        ></div>
      </div>

      {ownerConfig.professionalExperience.map((experience) => {
        const timeline = getExperienceTimeLine(
          experience.startMonth,
          experience.startYear,
          experience.endMonth,
          experience.endYear,
          true,
        );

        return (
          <div
            key={experience.designation}
            className="relative gap-0 grid grid-cols-[64px_1fr] md:grid-cols-[1fr_100px_1fr] auto-cols-fr py-20 w-full"
          >
            <div className="justify-end items-stretch text-left md:text-right [grid-area:1/2/2/3] md:[grid-area:auto]">
              <h3 className="top-[50vh] sticky font-alkatra">
                {timeline || "2026"}
              </h3>
            </div>
            <div className="flex justify-start md:justify-center [grid-area:1/1/3/2] md:[grid-area:auto]">
              <div
                className={`top-[50vh] sticky bg-alternate-secondary border-4 border-alternate-bg rounded-full w-6 h-6 ${experienceStyles.timeline_circle}`}
              ></div>
            </div>
            <div className={`${experienceStyles.timeline_right}`}>
              <ExperienceCard experience={experience} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceTimeline;
