"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
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
      <SidebarHeader sidebarToggle={sidebarToggle} handleSidebarToggle={handleSidebarToggle} />
      
      <div className="flex pt-4 w-full h-full">
        <nav className="w-full">
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
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
          </ul>
        </nav>
      </div>

      <SidebarFooter sidebarToggle={sidebarToggle} />
    </aside>
  );
};

export default Sidebar;
