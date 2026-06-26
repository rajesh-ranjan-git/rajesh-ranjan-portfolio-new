import { ownerConfig } from "@/config/owner.config";
import MaskedButton from "@/components/ui/buttons/masked.button";
import ResumeButton from "@/components/ui/buttons/resume.button";

const GreetingsButtons = () => {
  return (
    <div className="flex justify-center lg:justify-start items-center gap-2 md:gap-6 w-full">
      <MaskedButton
        btnTextSize="md"
        variant="mask-1"
        color="#3f82d9"
        className="p-3 md:px-6 md:text-lg"
      >
        Contact Me
      </MaskedButton>

      {ownerConfig.resumeLink ? <ResumeButton /> : null}
    </div>
  );
};

export default GreetingsButtons;
