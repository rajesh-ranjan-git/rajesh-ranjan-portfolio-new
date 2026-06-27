import EducationImage from "@/components/education/education.image";
import Image from "next/image";

const Education = () => {
  return (
    <section
      id="education"
      className="z-10 px-4 sm:px-10 lg:px-20 xl:px-28 py-16 w-full min-h-screen"
    >
      <h1 className="after:block md:after:bottom-12 after:bottom-8 after:absolute relative after:bg-primary pb-8 md:pb-12 after:rounded-lg after:w-20 after:h-1.5 font-arima">
        Academic details...
      </h1>

      <div className="items-center gap-12 md:gap-32 grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="group before:absolute relative before:inset-0 flex justify-end items-center bg-white before:bg-[url('/assets/background/education-bg.jpg')] before:bg-position-[-1rem] before:bg-no-repeat before:opacity-10 shadow-lg ml-20 py-16 pr-8 pl-72 rounded-2xl before:rounded-2xl w-full min-w-100 h-full min-h-100 before:bg-size-[200%] text-black before:content-[''] before:pointer-events-none">
          <EducationImage imageSrc="/assets/education/education-1.svg" />

          <div className="z-20 flex flex-col gap-2">
            <p className="font-semibold text-lg">
              B. TECH in COMPUTER SCIENCE & ENGINEERING
            </p>
            <div className="bg-linear-to-br from-sidebar-bg via-sidebar-bg p-1 px-3 rounded-full w-max font-semibold text-white text-xs bg-accent-blue to-accent-purple">
              2014&nbsp;-&nbsp;2018
            </div>
            <p className="pt-6 text-slate-600 text-sm">
              JP Institute of Engineering & Technology
            </p>
            <p className="pt-6 text-slate-600 text-sm">
              <span>Percentage:</span>
              <span>72.8%</span>
            </p>
          </div>
        </div>

        <div className="group before:absolute relative before:inset-0 flex justify-end items-center bg-white before:bg-[url('/assets/background/education-bg.jpg')] before:bg-position-[-1rem] before:bg-no-repeat before:opacity-10 shadow-lg ml-20 py-16 pr-8 pl-72 rounded-2xl before:rounded-2xl w-full min-w-100 h-full min-h-100 before:bg-size-[200%] text-black before:content-[''] before:pointer-events-none">
          <EducationImage imageSrc="/assets/education/education-2.svg" />

          <div className="z-20 flex flex-col gap-2">
            <p className="font-semibold text-lg">
              B. TECH in COMPUTER SCIENCE & ENGINEERING
            </p>
            <div className="bg-linear-to-br from-sidebar-bg via-sidebar-bg shadow-lg p-1 px-3 rounded-full w-max font-semibold text-white text-xs bg-accent-blue to-accent-blue">
              2014&nbsp;-&nbsp;2018
            </div>
            <p className="pt-6 text-slate-600 text-sm">
              JP Institute of Engineering & Technology
            </p>
            <p className="pt-6 text-slate-600 text-sm">
              <span>Percentage:</span>
              <span>72.8%</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
