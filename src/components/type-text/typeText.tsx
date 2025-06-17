"use client";

import Typewriter from "typewriter-effect";

const TypeText = () => {
  return (
    <Typewriter
      options={{
        strings: [
          // "Full Stack Developer",
          // "Software Engineer",
          // "Web Developer",
          "Full Stack Web Developer",
          // "Frontend Engineer",
          // "Backend Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypeText;
