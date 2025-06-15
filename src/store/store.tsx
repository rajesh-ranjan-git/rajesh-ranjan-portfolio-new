import { create } from "zustand";
import { SidebarState } from "@/types/types";

export const useSidebarStore = create<SidebarState>((set) => ({
  sidebarToggle: false,
  setSidebarToggle: (value) => set({ sidebarToggle: value }),
}));
