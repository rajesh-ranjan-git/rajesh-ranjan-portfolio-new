import GreetingsText from "@/components/greetings/greetings.text";
import SocialMedia from "@/components/social-media/social.media";
import GreetingsImage from "@/components/greetings/greetings.image";
import MaskedButton from "@/components/ui/buttons/masked.button";

const GreetingsContent = () => {
  return (
    <>
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

      <GreetingsImage />
    </>
  );
};

export default GreetingsContent;
