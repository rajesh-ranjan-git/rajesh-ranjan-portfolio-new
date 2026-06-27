import { ownerConfig } from "@/config/owner.config";
import { SectionProps } from "@/types/props/sections.props.types";
import SectionHeading from "@/components/sections/section.heading";
import EducationImage from "@/components/education/education.image";
import EducationText from "@/components/education/education.text";

const Education = ({ title }: SectionProps) => {
  return (
    <section id="education">
      {title ? <SectionHeading heading={title} /> : null}

      <div className="justify-center items-center gap-8 grid grid-cols-1 lg:grid-cols-2 w-full">
        {ownerConfig.education.college ? (
          <div className="group text-fixed-dark before:absolute relative before:inset-0 flex items-center before:bg-[url('/assets/background/education-bg.jpg')] before:bg-position-[-1rem] before:bg-no-repeat bg-fixed-light before:opacity-10 shadow-lg mt-36 md:mt-0 md:ml-20 py-8 md:py-16 pt-36 pr-8 pl-8 md:pl-52 rounded-2xl before:rounded-2xl before:bg-size-[200%] before:content-[''] before:pointer-events-none lg:64">
            <EducationImage imageSrc="/assets/education/education-1.svg" />

            <EducationText details={ownerConfig.education.college} />
          </div>
        ) : null}

        {ownerConfig.education.highSchool ? (
          <div className="group text-fixed-dark before:absolute relative before:inset-0 flex items-center before:bg-[url('/assets/background/education-bg.jpg')] before:bg-position-[-1rem] before:bg-no-repeat bg-fixed-light before:opacity-10 shadow-lg mt-36 md:mt-0 md:ml-20 py-8 md:py-16 pt-36 pr-8 pl-8 md:pl-52 rounded-2xl before:rounded-2xl before:bg-size-[200%] before:content-[''] before:pointer-events-none lg:64">
            <EducationImage imageSrc="/assets/education/education-2.svg" />

            <EducationText details={ownerConfig.education.highSchool} />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Education;
