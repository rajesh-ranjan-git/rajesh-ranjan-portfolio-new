import experienceStyles from "@/animations/experience.module.css";

const ExperienceProgress = () => {
  return (
    <div
      className={`absolute bg-fixed-secondary w-1 h-full ${experienceStyles.timeline_progress}`}
    >
      <div
        className={`absolute w-1 origin-top ${experienceStyles.timeline_progress_bar}`}
      ></div>
    </div>
  );
};

export default ExperienceProgress;
