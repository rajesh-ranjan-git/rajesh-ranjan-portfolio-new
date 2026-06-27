import { SkillsToggleProps } from "@/types/props/sections.props.types";

const SkillsToggle = ({
  activeSkillButton,
  setActiveSkillButton,
}: SkillsToggleProps) => {
  return (
    <div className="relative flex items-center shadow-lg p-1 border border-accent-blue/60 rounded-full w-max font-semibold">
      <span
        className={`absolute left-1.5 top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full bg-alternate-bg transition-transform duration-300 ease-in-out ${
          activeSkillButton === "tools" ? "translate-x-full" : "translate-x-0"
        }`}
      />

      <button
        onClick={() => setActiveSkillButton("skills")}
        className={`relative px-8 py-2 rounded-full transition-colors ${activeSkillButton === "skills" ? "text-alternate-primary" : "text-primary"}`}
      >
        Skills
      </button>
      <button
        onClick={() => setActiveSkillButton("tools")}
        className={`relative px-8 py-2 rounded-full transition-colors ${activeSkillButton === "tools" ? "text-alternate-primary" : "text-primary"}`}
      >
        Tools
      </button>
    </div>
  );
};

export default SkillsToggle;
