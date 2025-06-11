"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { menuItems } from "@/config/menuItems";
import SidebarFooter from "@/components/sidebar/sidebarFooter";
import SidebarHeader from "@/components/sidebar/sidebarHeader";

const Sidebar = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <aside
      className={`fixed flex flex-col justify-between bg-slate-900 p-4 pb-2 rounded-r-md  h-screen text-white transition-all ease-in-out duration-700 ${
        sidebarToggle ? "w-64" : "w-20"
      }`}
    >
      <SidebarHeader
        sidebarToggle={sidebarToggle}
        handleSidebarToggle={handleSidebarToggle}
      />

      <nav className="flex w-full h-full">
        <ul className="flex flex-col gap-5 w-full">
          {menuItems && menuItems.length > 0 ? (
            menuItems.map((item, index) => (
              <li
                className="flex justify-start items-center gap-4 hover:bg-blue-500 p-2 px-3 rounded-md w-full h-10 text-xl transition-all ease-in-out cursor-pointer"
                key={index}
              >
                <div className="flex justify-center items-center w-6 min-w-6">
                  {item?.icon}
                </div>

                {sidebarToggle && (
                  <div className="px-3 w-full text-lg whitespace-nowrap">
                    <h2 className="w-full text-left">{item?.label}</h2>
                  </div>
                )}
              </li>
            ))
          ) : (
            <li className="flex items-center gap-4 hover:bg-blue-500 p-3 rounded-md w-full text-xl transition-all ease-in-out cursor-pointer">
              <div>
                <FontAwesomeIcon icon={faHouse} />
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

      <SidebarFooter sidebarToggle={sidebarToggle} />
    </aside>
  );
};

export default Sidebar;
