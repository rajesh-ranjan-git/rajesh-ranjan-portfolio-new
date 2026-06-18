import { useAppStore } from "@/store/store";
import MenuButton from "@/components/ui/buttons/menu.button";

const SidebarHeader = () => {
  const sidebarToggle = useAppStore((state) => state.sidebarToggle);

  return (
    <div className="flex flex-col gap-2 overflow-hidden">
      <div className="flex items-center py-2">
        <MenuButton />

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
