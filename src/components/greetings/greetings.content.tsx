import GreetingsText from "@/components/greetings/greetings.text";
import SocialMedia from "@/components/social-media/social.media";
import GreetingsImage from "@/components/greetings/greetings.image";
import GreetingsButtons from "@/components/greetings/greetings.buttons";

const GreetingsContent = () => {
  return (
    <>
      <div className="z-10 flex flex-col justify-center gap-6 pt-16 lg:pt-0 w-full lg:w-[60%] h-full lg:text-left text-center grow">
        <GreetingsText />

        <SocialMedia />

        <GreetingsButtons />
      </div>

      <GreetingsImage />
    </>
  );
};

export default GreetingsContent;
