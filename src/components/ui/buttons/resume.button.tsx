"use client";

import { ownerConfig } from "@/config/owner.config";
import MaskedButton from "@/components/ui/buttons/masked.button";

const ResumeButton = () => {
  return (
    <MaskedButton
      btnTextSize="md"
      variant="mask-2"
      color="#040b14"
      className="p-3 md:px-6 md:text-lg"
      onClick={() => {
        window.open(ownerConfig.resumeLink, "_blank", "noopener,noreferrer");
      }}
    >
      See My Resume
    </MaskedButton>
  );
};

export default ResumeButton;
