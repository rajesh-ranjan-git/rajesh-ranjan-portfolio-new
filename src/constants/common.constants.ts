export const MOBILE_MAX_SCREEN_WIDTH = 767;

export const TABLET_MAX_SCREEN_WIDTH = 1023;

export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const DAYS_SHORT = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const CARD_TRANSLATE_CLASSES = {
  up: "hover:-translate-y-2",
  bottom: "hover:translate-y-2",
  left: "hover:-translate-x-2",
  right: "hover:translate-x-2",
} as const;

export const CARD_SCALE_CLASSES = {
  up: "hover:scale-y-105",
  bottom: "hover:scale-y-95",
  left: "hover:scale-x-95",
  right: "hover:scale-x-105",
  all: "hover:scale-105",
} as const;
