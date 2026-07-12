import Image from "next/image";
import { ownerConfig } from "@/config/owner.config";
import { technologiesConfig } from "@/config/technologies.config";
import { SkillsToggleProps } from "@/types/props/sections.props.types";
import Card from "@/components/ui/card/card";

const ToolsContainer = ({ activeSkillButton }: Partial<SkillsToggleProps>) => {
  const techItems = ownerConfig.tools;

  return (
    <div
      className={`flex flex-wrap justify-center items-center gap-4 transition-all duration-300 ease-in-out ${
        activeSkillButton === "tools"
          ? "opacity-100 scale-100 relative"
          : "opacity-0 scale-95 absolute inset-0 pointer-events-none"
      }`}
    >
      {techItems.map((item) => (
        <Card
          translate="up"
          className="bg-white/80 hover:bg-white/80 px-2 py-2 w-20 h-20 overflow-hidden select-none shrink-0"
          key={technologiesConfig[item].name}
        >
          <Image
            src={technologiesConfig[item].src ?? ""}
            alt={technologiesConfig[item].name ?? "tech-img"}
            width="100"
            height="100"
            className="w-full h-full object-contain pointer-events-none"
          />
        </Card>
      ))}
    </div>
  );
};

export default ToolsContainer;
