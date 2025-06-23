import { Divide as Hamburger } from "hamburger-react";
import { useSidebarStore } from "@/store/store";

const SidebarHeader = () => {
  const sidebarToggle = useSidebarStore((state) => state.sidebarToggle);
  const setSidebarToggle = useSidebarStore((state) => state.setSidebarToggle);

  return (
    <div className="flex flex-col gap-2 overflow-hidden">
      <div className="flex items-center py-2">
        <button
          type="button"
          className="hover:bg-blue-500 bg-none border-0 rounded-md outline-none font-bold text-2xl transition-all ease-in-out"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        >
          <Hamburger
            easing="ease-in"
            size={24}
            rounded
            toggled={sidebarToggle}
          />
        </button>
        {sidebarToggle && (
          <div className="p-2 px-4 whitespace-nowrap">
            <h2 className="w-full font-amsterdam-kingdom font-semibold text-2xl tracking-wider">Rajesh Ranjan</h2>
          </div>
        )}
      </div>
      <div>
        <hr className="h-10 text-slate-700" />
      </div>
    </div>
  );
};

export default SidebarHeader;
