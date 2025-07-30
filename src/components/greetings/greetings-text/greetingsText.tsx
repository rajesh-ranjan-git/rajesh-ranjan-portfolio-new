import greetingsStyles from "@/animations/greetings.module.css";
import Typewriter from "@/components/typewriter/typewriter";

const GreetingsText = () => {
  return (
    <div className="flex flex-col justify-center h-full text-2xl md:text-3xl leading-16">
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

      <h1 className="text-3xl md:text-4xl">
        I'm
        <span className="ml-2 font-semibold">Rajesh Ranjan</span>
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
        className="font-semibold"
      />
    </div>
  );
};

export default GreetingsText;
