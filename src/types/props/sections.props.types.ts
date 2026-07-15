import { Dispatch, SetStateAction } from "react";
import {
  AboutTextRowType,
  LocationType,
  DegreeType,
  GradingSystemType,
  ExperienceDetailsType,
  ExperienceType,
  EducationTextDetailsType,
} from "@/types/types/sections.types";

export interface SectionProps {
  title: string;
  description?: string;
}

export interface AboutTextProps {
  title: string | null;
  description: string | null;
  details: AboutTextRowType[];
}

export interface EducationCardProps {
  education: EducationTextDetailsType;
}

export interface EducationImageProps {
  imageSrc: string;
}

export interface EducationTextProps {
  details: EducationTextDetailsType;
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

export interface ExperienceCardWrapperProps {
  isReversed: boolean;
  experience: ExperienceType;
}

export interface ExperienceCardProps {
  experience: ExperienceType;
}

export interface PortfolioFiltersProps {
  filters: string[];
  activeFilter: string;
  handleFilter: (item: string) => void;
}

export interface PortfolioFiltersItemProps {
  item: string;
  isActive: boolean;
  handleFilter: (item: string) => void;
}
