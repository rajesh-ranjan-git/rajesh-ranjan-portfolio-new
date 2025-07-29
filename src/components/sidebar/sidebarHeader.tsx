import { useSidebarStore } from "@/store/store";
import Hamburger from "@/components/sidebar/hamburger";

const SidebarHeader = () => {
  const sidebarToggle = useSidebarStore((state) => state.sidebarToggle);
  const setSidebarToggle = useSidebarStore((state) => state.setSidebarToggle);

  return (
    <div className="flex flex-col gap-2 overflow-hidden">
      <div className="flex items-center py-2">
        <button
          type="button"
          className="hover:bg-blue-500 bg-none p-2 border-0 rounded-md outline-none font-bold text-2xl transition-all ease-in-out cursor-pointer"
          onClick={() => setSidebarToggle(!sidebarToggle)}
        >
          <div className="p-1 w-8 h-8">
            <Hamburger />
          </div>
        </button>
        {sidebarToggle && (
          <div className="p-2 px-4 whitespace-nowrap">
            <h2 className="w-full font-bold text-xl">Rajesh Ranjan</h2>
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
