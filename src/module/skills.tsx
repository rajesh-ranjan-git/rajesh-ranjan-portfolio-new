"use client";

import { useState } from "react";

const Skills = () => {
  const [activeBtn, setActiveBtn] = useState("skills");

  return (
    <section
      className={`flex flex-wrap pr-2 md:pr-10 pl-20 md:pl-28 w-screen min-h-screen max-h-screen overflow-hidden`}
    >
      <div className="flex flex-col flex-wrap flex-grow justify-center items-center">
        <h2 className="text-4xl text-right">
          What My Programming Skills include?
        </h2>
        <p className="text-lg">
          I develop simple, intuitive and responsive applications that helps
          users get things done with less effort and time.
        </p>
        <div className="flex justify-center items-center gap-2 p-1 border-1 rounded-4xl">
          <button
            className={`${
              activeBtn === "skills"
                ? "bg-black text-white"
                : "bg-white text-black"
            } p-2 px-6 rounded-4xl font-semibold transition-all ease-in-out`}
            onClick={() => setActiveBtn("skills")}
          >
            Skills
          </button>
          <button
            className={`${
              activeBtn === "tools"
                ? "bg-black text-white"
                : "bg-white text-black"
            } p-2 px-6 rounded-4xl font-semibold transition-all ease-in-out`}
            onClick={() => setActiveBtn("tools")}
          >
            Tools
          </button>
        </div>
      </div>
      <div className="flex flex-wrap flex-grow justify-center items-center">
        <ul>
          <li>HTML</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
