import { StaticImagesConfigType } from "@/types/types/common.types";

export const appConfig = {
  name: "Portfolio",
  description:
    "Welcome to Rajesh Ranjan's portfolio! This project showcases Rajesh Ranjan's work, skills, and experience as a Full Stack Developer, designer, or any other creative role. You’ll find a collection of Rajesh Ranjan's best projects, along with a brief overview of who he is and what he does.",
};

export const themeConfig = {
  dark: "dark",
  light: "light",
} as const;

export const storageConfig = {
  local: "local",
  session: "session",
} as const;

export const staticImagesConfig: StaticImagesConfigType = {
  notFoundError: {
    src: "/assets/error/404-error.webp",
    alt: "not-found",
    width: 400,
    height: 400,
    loading: "eager",
  },
  unexpectedError: {
    src: "/assets/error/something-went-wrong-error.webp",
    alt: "unexpected-error",
    width: 400,
    height: 400,
    loading: "eager",
  },
};

export const timelineConfig = {
  oneHour: 1000 * 60 * 60,
  twoHours: 1000 * 60 * 60 * 2,
  threeHours: 1000 * 60 * 60 * 3,
  sixHours: 1000 * 60 * 60 * 6,
  halfDay: 1000 * 60 * 60 * 12,
  oneDay: 1000 * 60 * 60 * 24,
  twoDays: 1000 * 60 * 60 * 24 * 2,
  threeDays: 1000 * 60 * 60 * 24 * 3,
  oneWeek: 1000 * 60 * 60 * 24 * 7,
  twoWeeks: 1000 * 60 * 60 * 24 * 7 * 2,
  threeWeeks: 1000 * 60 * 60 * 24 * 7 * 3,
  oneMonth: 1000 * 60 * 60 * 24 * 30,
  twoMonths: 1000 * 60 * 60 * 24 * 30 * 2,
  threeMonths: 1000 * 60 * 60 * 24 * 30 * 3,
  sixMonths: 1000 * 60 * 60 * 24 * 30 * 6,
  oneYear: 1000 * 60 * 60 * 24 * 30 * 12,
  twoYears: 1000 * 60 * 60 * 24 * 30 * 12 * 2,
  fourYears: 1000 * 60 * 60 * 24 * 30 * 12 * 3,
};
