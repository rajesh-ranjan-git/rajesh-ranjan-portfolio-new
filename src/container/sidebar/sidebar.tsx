"use client";

import { useEffect, useRef } from "react";
import { useSidebarStore } from "@/store/store";
import SidebarHeader from "@/components/sidebar/sidebarHeader";
import SidebarMenu from "@/components/sidebar/sidebarMenu";
import SidebarFooter from "@/components/sidebar/sidebarFooter";

const Sidebar = () => {
  const sidebarToggle = useSidebarStore((state) => state.sidebarToggle);
  const setSidebarToggle = useSidebarStore((state) => state.setSidebarToggle);

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setSidebarToggle(false);
      }
    };

    // Only add listener when sidebar is open
    if (sidebarToggle) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [sidebarToggle]);

  return (
    <aside
      className={`fixed hidden md:flex flex-col justify-between bg-slate-900 p-4 pb-2 rounded-r-md  h-screen text-white overflow-hidden transition-all ease-in-out duration-700 z-[10] ${
        sidebarToggle ? "w-64" : "w-20"
      }`}
      ref={sidebarRef}
    >
      <SidebarHeader />

      <nav className="flex w-full h-full">
        <SidebarMenu />
      </nav>

      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;
