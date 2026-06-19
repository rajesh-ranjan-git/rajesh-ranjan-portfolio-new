import greetingsStyles from "@/animations/greetings.module.css";
import GreetingsText from "@/components/greetings/greetings-text/greetings.text";
import SocialMedia from "@/components/social-media/social.media";
import GreetingsImg from "@/components/greetings/greetings-img/greetings.img";
import GreetingsBg from "@/components/greetings/greetings-bg/greetings.bg";
import MenuButton from "@/components/ui/buttons/menu.button";
import MaskedButton from "@/components/ui/buttons/masked.button";

const Greetings = () => {
  return (
    <section
      className={`before:block before:absolute relative before:inset-0 flex flex-wrap justify-around items-center before:opacity-100 pr-2 md:pr-10 pl-6 w-screen min-h-screen max-h-screen overflow-hidden ${greetingsStyles.greetings}`}
    >
      <div className="md:hidden top-4 right-4 z-100 absolute flex items-center py-2">
        <MenuButton />
      </div>

      <GreetingsBg />
      <div className="flex flex-col justify-center gap-6 pt-16 lg:pt-0 w-full lg:w-[60%] h-full lg:text-left text-center grow">
        <GreetingsText />
        <SocialMedia />
        <div className="flex justify-center lg:justify-start items-center gap-2 md:gap-6 w-full">
          <MaskedButton
            btnText="Contact Me"
            btnTextSize="md"
            variant="mask-1"
            color="#3f82d9"
            className="md:text-lg"
          />
          <MaskedButton
            btnText="See My Resume"
            btnTextSize="md"
            variant="mask-2"
            color="#040b14"
            className="md:text-lg"
          />
        </div>
      </div>
      <GreetingsImg />
    </section>
  );
};

export default Greetings;
