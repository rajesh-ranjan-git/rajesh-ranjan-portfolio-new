import { ownerConfig } from "@/config/owner.config";
import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import SectionDescription from "@/components/sections/section.description";
import EducationImage from "@/components/education/education.image";
import EducationText from "@/components/education/education.text";

const Education = ({ title, description }: SectionProps) => {
  return (
    <section id="education">
      {title ? <SectionHeading title={title} /> : null}

      {description ? <SectionDescription description={description} /> : null}

      <div className="justify-center items-center gap-8 grid grid-cols-1 lg:grid-cols-2 w-full">
        {ownerConfig.education.college ? (
          <div className="group before:absolute relative before:inset-0 flex items-center bg-card-bg before:bg-[url('/assets/background/education-bg.jpg')] before:bg-position-[-1rem] hover:bg-card-bg-hover before:bg-no-repeat before:opacity-5 shadow-[0_12px_20px_var(--color-card-shadow)] backdrop-blur-xl mt-36 md:mt-0 md:ml-20 p-6 py-8 md:py-16 pt-36 pr-8 pl-8 md:pl-52 border border-card-border hover:border-card-border-active rounded-2xl before:rounded-2xl hover:rounded-3xl before:bg-size-[200%] before:content-[''] transition-all duration-300 before:pointer-events-none">
            <EducationImage imageSrc="/assets/education/education-1.svg" />

            <EducationText details={ownerConfig.education.college} />
          </div>
        ) : null}

        {ownerConfig.education.highSchool ? (
          <div className="group before:absolute relative before:inset-0 flex items-center bg-card-bg before:bg-[url('/assets/background/education-bg.jpg')] before:bg-position-[-1rem] hover:bg-card-bg-hover before:bg-no-repeat before:opacity-5 shadow-[0_12px_20px_var(--color-card-shadow)] backdrop-blur-xl mt-36 md:mt-0 md:ml-20 p-6 py-8 md:py-16 pt-36 pr-8 pl-8 md:pl-52 border border-card-border hover:border-card-border-active rounded-2xl before:rounded-2xl hover:rounded-3xl before:bg-size-[200%] before:content-[''] transition-all duration-300 before:pointer-events-none">
            <EducationImage imageSrc="/assets/education/education-2.svg" />

            <EducationText details={ownerConfig.education.highSchool} />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Education;
