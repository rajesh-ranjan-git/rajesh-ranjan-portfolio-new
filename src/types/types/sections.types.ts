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
