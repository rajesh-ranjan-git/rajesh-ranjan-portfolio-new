import { useAppStore } from "@/store/store";
import MenuButton from "@/components/ui/buttons/menu.button";

const SidebarHeader = () => {
  const sidebarToggle = useAppStore((state) => state.sidebarToggle);

  return (
    <div className="flex flex-col gap-2 overflow-hidden shrink-0">
      <div className="flex items-center">
        <MenuButton />

        {sidebarToggle && (
          <div className="relative p-2 px-4 whitespace-nowrap">
            <h2 className="absolute top-1/2 -translate-y-1/2 rotate-[-7deg] font-bold font-allura text-3xl md:text-4xl leading-none underline underline-offset-1">
              Rajesh Ranjan
            </h2>
          </div>
        )}
      </div>
      <hr className="h-1 text-slate-700" />
    </div>
  );
};

export default SidebarHeader;
