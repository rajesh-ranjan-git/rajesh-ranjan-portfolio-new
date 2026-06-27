import EducationImage from "@/components/education/education.image";
import Image from "next/image";

const Education = () => {
  return (
    <section id="education">
      <h1 className="after:block lg:after:bottom-12 after:bottom-8 after:absolute relative after:bg-primary pb-8 lg:pb-12 after:rounded-lg after:w-20 after:h-1.5 font-arima">
        Academic details...
      </h1>

      <div className="justify-center items-center gap-8 grid grid-cols-1 lg:grid-cols-2 w-full">
        <div className="group before:absolute relative before:inset-0 flex justify-end items-center bg-white before:bg-[url('/assets/background/education-bg.jpg')] before:bg-position-[-1rem] before:bg-no-repeat before:opacity-10 shadow-lg mt-36 md:mt-0 md:ml-20 py-8 md:py-16 pt-36 pr-8 pl-8 md:pl-64 rounded-2xl before:rounded-2xl before:bg-size-[200%] text-black before:content-[''] before:pointer-events-none">
          <EducationImage imageSrc="/assets/education/education-1.svg" />

          <div className="z-10 flex flex-col gap-2">
            <p className="font-semibold text-lg">
              B. TECH in COMPUTER SCIENCE & ENGINEERING
            </p>
            <div className="bg-linear-to-br from-sidebar-bg via-sidebar-bg p-1 px-3 rounded-full w-max font-semibold text-white text-xs bg-accent-blue to-accent-purple">
              2014&nbsp;-&nbsp;2018
            </div>
            <p className="pt-2 md:pt-6 text-slate-600 text-sm">
              JP Institute of Engineering & Technology
            </p>
            <p className="pt-2 md:pt-6 text-slate-600 text-sm">
              <span>Percentage:</span>
              <span>72.8%</span>
            </p>
          </div>
        </div>

        <div className="group before:absolute relative before:inset-0 flex justify-end items-center bg-white before:bg-[url('/assets/background/education-bg.jpg')] before:bg-position-[-1rem] before:bg-no-repeat before:opacity-10 shadow-lg mt-36 md:mt-0 md:ml-20 py-8 md:py-16 pt-36 pr-8 pl-8 md:pl-64 rounded-2xl before:rounded-2xl before:bg-size-[200%] text-black before:content-[''] before:pointer-events-none">
          <EducationImage imageSrc="/assets/education/education-2.svg" />

          <div className="z-10 flex flex-col gap-2">
            <p className="font-semibold text-lg">
              B. TECH in COMPUTER SCIENCE & ENGINEERING
            </p>
            <div className="bg-linear-to-br from-sidebar-bg via-sidebar-bg shadow-lg p-1 px-3 rounded-full w-max font-semibold text-white text-xs bg-accent-blue to-accent-blue">
              2014&nbsp;-&nbsp;2018
            </div>
            <p className="pt-2 md:pt-6 text-slate-600 text-sm">
              JP Institute of Engineering & Technology
            </p>
            <p className="pt-2 md:pt-6 text-slate-600 text-sm">
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
