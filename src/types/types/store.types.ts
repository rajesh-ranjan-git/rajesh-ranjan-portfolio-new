import { Dispatch, SetStateAction } from "react";
import { ThemeType } from "@/types/types/common.types";

export type AppStateType = {
  activeTheme: ThemeType;
  setActiveTheme: Dispatch<SetStateAction<ThemeType>>;
  sidebarToggle: boolean;
  setSidebarToggle: (value: boolean) => void;
};
