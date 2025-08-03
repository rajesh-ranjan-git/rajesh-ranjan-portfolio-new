import greetingsStyles from "@/animations/greetings.module.css";
import { ButtonMask1, ButtonMask2 } from "@/components/buttons/buttonMask";
import GreetingsText from "@/components/greetings/greetings-text/greetingsText";
import SocialMedia from "@/components/social-media/socialMedia";
import GreetingsImg from "@/components/greetings/greetings-img/greetingsImg";
import GreetingsBg from "@/components/greetings/greetings-bg/greetingsBg";

const Greetings = () => {
  return (
    <section
      className={`before:block before:top-0 before:right-0 before:bottom-0 before:left-0 before:absolute relative before:inset-0 flex flex-wrap justify-around items-center before:opacity-100 pr-2 md:pr-10 pl-20 md:pl-28 w-screen min-h-screen max-h-screen overflow-hidden ${greetingsStyles.greetings}`}
    >
      <GreetingsBg />
      <div className="flex flex-col flex-grow justify-center gap-6 pl-0 md:pl-10 w-full lg:w-[60%] h-full">
        <GreetingsText />
        <SocialMedia />
        <div className="flex items-center gap-2 md:gap-6 w-full">
          <ButtonMask1 btnText={"Contact Me"} className="text-sm md:text-lg" />
          <ButtonMask2
            btnText={"See My Resume"}
            className="text-sm md:text-lg"
          />
        </div>
      </div>
      <GreetingsImg />
    </section>
  );
};

export default Greetings;
