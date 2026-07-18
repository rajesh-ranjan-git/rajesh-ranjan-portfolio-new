import Image from "next/image";
import { basicDetails } from "@/config/owner.config";
import { technologiesConfig } from "@/config/technologies.config";
import { SkillsToggleProps } from "@/types/props/sections.props.types";
import Card from "@/components/ui/card/card";
import Tooltip from "@/components/ui/tooltip/tooltip";
import { toTitleCase } from "@/utils/common.utils";

const SkillsContainer = ({ activeSkillButton }: Partial<SkillsToggleProps>) => {
  const techItems = basicDetails.skills;

  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-4 transition-all duration-300 ease-in-out ${
        activeSkillButton === "skills"
          ? "opacity-100 scale-100 relative"
          : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
      }`}
    >
      {techItems.map((item) => {
        const skill =
          technologiesConfig[item as keyof typeof technologiesConfig];

        return (
          <Tooltip
            key={skill.name}
            content={toTitleCase(skill.name)}
            position="top"
            delay={0}
          >
            <Card
              translate="bottom"
              className="bg-white/80 hover:bg-white/80 px-2 py-2 w-20 h-20 overflow-hidden select-none shrink-0"
              key={skill.name}
            >
              <Image
                src={skill.src ?? ""}
                alt={skill.name ?? "tech-img"}
                width="100"
                height="100"
                className="w-full h-full object-contain pointer-events-none"
              />
            </Card>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default SkillsContainer;
