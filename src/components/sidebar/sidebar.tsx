"use client";

import { useRef } from "react";
import { FaHouse } from "react-icons/fa6";
import { useAppStore } from "@/store/store";
import { menuItems } from "@/config/sidebar.config";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import SidebarFooter from "@/components/sidebar/sidebar.footer";
import SidebarHeader from "@/components/sidebar/sidebar.header";

const Sidebar = () => {
  const sidebarToggle = useAppStore((state) => state.sidebarToggle);
  const setSidebarToggle = useAppStore((state) => state.setSidebarToggle);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleListItemAction = () => {
    if (sidebarToggle) setSidebarToggle(false);
  };

  useOutsideClick({
    ref: sidebarRef,
    when: sidebarToggle,
    callback: () => setSidebarToggle(false),
    eventType: "mousedown",
  });

  return (
    <aside
      className={`fixed flex flex-col justify-between bg-[#040B14] p-2 md:p-4 pb-2 rounded-r-md h-screen text-white overflow-hidden transition-all ease-in-out duration-700 z-20 ${
        sidebarToggle
          ? "w-64 translate-x-0"
          : "w-64 -translate-x-full md:w-20 md:translate-x-0"
      }`}
      ref={sidebarRef}
    >
      <SidebarHeader />

      <nav className="flex w-full h-full">
        <ul className="flex flex-col gap-2 2xl:gap-5 w-full">
          {menuItems && menuItems.length > 0 ? (
            menuItems.map((item, index) => {
              const Icon = item?.icon;

              return (
                <li
                  className="flex justify-start items-center gap-4 p-2 px-3 rounded-md w-full h-10 overflow-hidden text-xl transition-all ease-in-out hover:bg-accent-blue cursor-pointer"
                  onClick={handleListItemAction}
                  key={index}
                >
                  <div className="flex justify-center items-center w-6 min-w-6">
                    <Icon />
                  </div>

                  {sidebarToggle && (
                    <div className="px-3 w-full text-lg whitespace-nowrap">
                      <h2 className="w-full text-left">{item?.label}</h2>
                    </div>
                  )}
                </li>
              );
            })
          ) : (
            <li className="flex items-center gap-4 p-3 rounded-md w-full text-xl transition-all ease-in-out hover:bg-accent-blue cursor-pointer">
              <div>
                <FaHouse />
              </div>

              {sidebarToggle && (
                <div className="px-3 w-full text-lg whitespace-nowrap">
                  <h2 className="w-full text-left">Home</h2>
                </div>
              )}
            </li>
          )}
        </ul>
      </nav>

      <SidebarFooter />
    </aside>
  );
};

export default Sidebar;
