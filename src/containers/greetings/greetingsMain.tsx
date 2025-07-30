import { ButtonMask1, ButtonMask2 } from "@/components/buttons/buttonMask";
import GreetingsText from "@/components/greetings/greetings-text/greetingsText";
import SocialMedia from "@/components/social-media/socialMedia";

const GreetingsMain = () => {
  return (
    <div className="flex flex-col flex-grow justify-center gap-6 pl-0 md:pl-10 w-full lg:w-[60%] h-full">
      <GreetingsText />
      <SocialMedia />
      <div className="flex items-center gap-2 md:gap-6 w-full">
        <ButtonMask1 btnText={"Contact Me"} className="text-sm md:text-lg" />
        <ButtonMask2 btnText={"See My Resume"} className="text-sm md:text-lg" />
      </div>
    </div>
  );
};

export default GreetingsMain;
