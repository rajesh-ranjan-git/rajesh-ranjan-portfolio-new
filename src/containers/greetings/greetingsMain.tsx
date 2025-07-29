import { ButtonMask1, ButtonMask2 } from "@/components/buttons/buttonMask";
import GreetingsText from "@/components/greetings/greetings-text/greetingsText";
import SocialMedia from "@/components/social-media/socialMedia";

const GreetingsMain = () => {
  return (
    <div className="flex flex-col justify-center gap-6 pt-10">
      <GreetingsText />
      <SocialMedia />
      <div className="flex items-center gap-6">
        <ButtonMask1 btnText={"Contact Me"} />
        <ButtonMask2 btnText={"See My Resume"} />
      </div>
    </div>
  );
};

export default GreetingsMain;
