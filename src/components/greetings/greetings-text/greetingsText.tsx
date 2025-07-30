import greetingsStyles from "@/animations/greetings.module.css";
import Typewriter from "@/components/typewriter/typewriter";

const GreetingsText = () => {
  return (
    <div className="flex flex-col justify-center pt-20 h-full text-white text-3xl md:text-4xl lg:text-5xl leading-16 lg:leading-20">
      <h1>
        Hi There!{" "}
        <span
          className={`inline-block ${greetingsStyles.wave}`}
          role="img"
          aria-labelledby="wave"
        >
          👋🏻
        </span>
      </h1>

      <h1 className="text-nowrap">
        I'm
        <span className="text-shadow-[2px_2px_black] ml-4 font-bold text-[#699ee1] uppercase">
          Rajesh Ranjan
        </span>
      </h1>
      <Typewriter
        words={[
          "Full Stack Developer",
          "Software Developer",
          "Software Engineer",
          "Freelancer",
          "Open Source Contributor",
        ]}
        typingSpeed={120}
        deletingSpeed={60}
        delayBetweenWords={1000}
        className="text-shadow-[1px_1px_black] font-semibold text-[#699ee1]"
      />
    </div>
  );
};

export default GreetingsText;
