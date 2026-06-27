import { LocationType, AboutTextRowType } from "@/types/types/sections.types";
import { Dispatch, SetStateAction } from "react";

export interface SectionProps {
  title: string;
}

export interface AboutTextProps {
  title: string | null;
  description: string | null;
  details: AboutTextRowType[];
}

export interface EducationImageProps {
  imageSrc: string;
}

export interface EducationTextProps {
  details: {
    name?: string;
    location?: LocationType;
    degree?: string;
    stream?: string;
    gradingSystem?: "percent" | "cgpa";
    score?: number;
    startYear?: number;
    endYear?: number;
  };
}

export interface SkillsToggleProps {
  activeSkillButton: "skills" | "tools";
  setActiveSkillButton: Dispatch<SetStateAction<"skills" | "tools">>;
}

export interface RainSkillsProps {
  icons: string[];
  count?: number;
  className?: string;
}
