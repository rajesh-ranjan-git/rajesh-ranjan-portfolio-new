import { Divide as Hamburger } from "hamburger-react";

const SidebarHeader = ({ sidebarToggle, handleSidebarToggle }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center py-2">
        <button
          type="button"
          className="hover:bg-blue-500 bg-none border-0 rounded-md outline-none font-bold text-2xl transition-all ease-in-out"
          onClick={handleSidebarToggle}
        >
          <Hamburger easing="ease-in" size={24} rounded />
        </button>
        {sidebarToggle && (
          <div className="p-2 px-4 whitespace-nowrap">
            <h2 className="w-full font-bold text-xl">Rajesh Ranjan</h2>
          </div>
        )}
      </div>
      <hr className="text-slate-700" />
    </div>
  );
};

export default SidebarHeader;
