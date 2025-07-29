import { useSidebarStore } from "@/store/store";

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
          <div className="relative w-8 h-8">
            <span
              className="top-0 left-0 absolute bg-white rounded-md w-full h-1.25 transition-all duration-300 ease-in-out"
              style={
                sidebarToggle
                  ? {
                      top: "50%",
                      transform: "translate(0, -50%) rotate(45deg)",
                    }
                  : {
                      top: "0%",
                      transform: "none",
                    }
              }
            ></span>
            <span
              className={`top-[50%] left-0 absolute bg-white rounded-md w-[80%] h-1.25 transition-all translate-y-[-50%] duration-300 ease-in-out ${
                sidebarToggle && "w-0 opacity-0"
              }`}
            ></span>
            <span
              className="top-[100%] left-0 absolute bg-white rounded-md w-full h-1.25 transition-all translate-y-[-100%] duration-300 ease-in-out"
              style={
                sidebarToggle
                  ? {
                      top: "50%",
                      transform: "translate(0, 50%) rotate(-45deg)",
                    }
                  : {
                      top: "100%",
                      transform: "none",
                    }
              }
            ></span>
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
