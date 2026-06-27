import { LocationType, AboutTextRowType } from "@/types/types/sections.types";

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
