import greetingsStyles from "@/animations/greetings.module.css";
import GreetingsBgParticles from "@/components/greetings/greetings-bg-particles/greetings.bg.particles";

const GreetingsBg = () => {
  return (
    <>
      <div
        className={`w-[300vh] h-96 absolute left-0 ${greetingsStyles.rectangle} ${greetingsStyles.rectangle_1}`}
      ></div>
      <div
        className={`w-[250vh] h-96 absolute left-0 ${greetingsStyles.rectangle} ${greetingsStyles.rectangle_2}`}
      ></div>
      <div
        className={`border-16 border-white opacity-20 absolute lg:w-160 lg:h-160 md:w-120 md:h-120 w-80 h-80 block lg:left-[-20%] lg:bottom-[-30%] left-[-5%] bottom-[-10%] ${greetingsStyles.rectangle_transparent}`}
      ></div>
      <div
        className={`border-16 border-white opacity-20 absolute block lg:w-180 lg:h-180 md:w-140 md:h-140 w-100 h-100 right-[-10%] top-[5%] ${greetingsStyles.rectangle_transparent}`}
      ></div>
      <div
        className={`border-4 border-white opacity-20 absolute block rounded-full w-20 h-20 left-[5%] top-[50%] ${greetingsStyles.circle}`}
      ></div>
      <div
        className={`border-4 border-white opacity-20 absolute block rounded-full w-32 h-32 left-[83%] top-[20%] ${greetingsStyles.circle}`}
      ></div>
      <div
        className={`border-4 border-white opacity-20 absolute block rounded-full w-40 h-40 right-[25%] top-[80%] ${greetingsStyles.circle}`}
      ></div>
      <div className={`absolute right-0 ${greetingsStyles.triangle_1}`}>
        <svg
          width="75"
          height="75"
          viewBox="0 0 100 100"
          className="opacity-20"
        >
          <polygon
            points="50,5 95,95 5,95"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </div>
      <div
        className={`absolute top-[30%] left-[20%] ${greetingsStyles.triangle_2}`}
      >
        <svg
          width="50"
          height="50"
          viewBox="0 0 100 100"
          className="opacity-20"
        >
          <polygon
            points="50,5 95,95 5,95"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </div>
      <div
        className={`absolute top-[80%] left-[15%] ${greetingsStyles.triangle_3}`}
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 100 100"
          className="opacity-20"
        >
          <polygon
            points="50,5 95,95 5,95"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </div>
      <div
        className={`absolute top-[60%] right-[15%] ${greetingsStyles.triangle_4}`}
      >
        <svg
          width="45"
          height="45"
          viewBox="0 0 100 100"
          className="opacity-20"
        >
          <polygon
            points="50,5 95,95 5,95"
            fill="none"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </div>

      <GreetingsBgParticles />
    </>
  );
};

export default GreetingsBg;
