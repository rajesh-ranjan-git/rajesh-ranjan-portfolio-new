export type LocationType = {
  city: string;
  state: string;
  country: string;
};

export type AboutTextRowType = {
  id: string;
  label: string;
  value: string;
};

export type RainItem = {
  id: number;
  src: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  rotation: number;
  opacity: number;
};

export type EducationTextDetailsType = {
  name?: string;
  location?: LocationType;
  degree?: string;
  stream?: string;
  gradingSystem?: GradingSystemType;
  score?: number;
  startYear?: number;
  endYear?: number;
};

export type DegreeType = "Bachelor of Technology" | "Senior Secondary (XII)";

export type GradingSystemType = "percent" | "cgpa" | "gpa";

export type ExperienceType = {
  designation: string;
  startMonth: string;
  startYear: number;
  endMonth?: string;
  endYear?: number;
  company: string;
  companyImage?: string;
  details?: ExperienceDetailsType[];
};

export type ExperienceDetailsType = { title: string; description?: string };
