import { ownerConfig } from "@/config/owner.config";
import ExperienceProgress from "@/components/experience/experience.progress";
import ExperienceCardWrapper from "@/components/experience/experience.card.wrapper";

const ExperienceTimeline = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <ExperienceProgress />

      {ownerConfig.professionalExperience.map((experience, index) => {
        const isReversed = index % 2 === 1;

        return (
          <ExperienceCardWrapper
            key={experience.designation}
            isReversed={isReversed}
            experience={experience}
          />
        );
      })}
    </div>
  );
};

export default ExperienceTimeline;
