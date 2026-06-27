import Image from "next/image";
import { ownerConfig } from "@/config/owner.config";
import { technologiesConfig } from "@/config/technologies.config";
import { SkillsToggleProps } from "@/types/props/sections.props.types";

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
        <div
          className="flex justify-center items-center bg-white shadow-2xl p-2 rounded-2xl w-20 h-20 overflow-hidden shrink-0"
          key={technologiesConfig[item].name}
        >
          <Image
            src={technologiesConfig[item].src ?? ""}
            alt={technologiesConfig[item].name ?? "tech-img"}
            width="100"
            height="100"
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
};

export default ToolsContainer;
