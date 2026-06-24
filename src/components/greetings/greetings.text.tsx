import greetingsStyles from "@/animations/greetings.module.css";
import Typewriter from "@/components/typewriter/typewriter";

const GreetingsText = () => {
  return (
    <div className="flex flex-col justify-center pt-4 h-full text-white text-2xl md:text-4xl lg:text-5xl leading-12 lg:leading-20">
      <h1 className="font-semibold">
        Hi There!&nbsp;
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
        <span className="text-shadow-[2px_2px_black] font-alkatra ml-4 font-bold text-accent-blue uppercase">
          Rajesh Ranjan
        </span>
      </h1>

      <Typewriter
        words={[
          "Full Stack Developer",
          "Software Developer",
          "Software Engineer",
        ]}
        typingSpeed={120}
        deletingSpeed={60}
        delayBetweenWords={1000}
        className="text-shadow-[1px_1px_black] font-semibold text-accent-purple text-xl md:text-3xl lg:text-4xl"
      />
    </div>
  );
};

export default GreetingsText;
