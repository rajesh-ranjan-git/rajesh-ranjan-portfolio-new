import Image from "next/image";
import Link from "next/link";
import { useSidebarStore } from "@/store/store";
import profileImg from "@/assets/personal-img/personal-img-circular.png";

const SidebarFooter = () => {
  const sidebarToggle = useSidebarStore((state) => state.sidebarToggle);
  const setSidebarToggle = useSidebarStore((state) => state.setSidebarToggle);

  const handleImageClick = () => {
    if (!sidebarToggle) {
      setSidebarToggle(!sidebarToggle);
    }
  };

  return (
    <div className="flex flex-col w-full h-20 overflow-hidden">
      <hr className="text-slate-700" />
      <div className="flex justify-between items-center gap-2 px-1 w-full h-full">
        <Image
          src={profileImg}
          width={40}
          height={40}
          alt="profile-img"
          className="hover:bg-[conic-gradient(from_var(--angle),#FF6B6B,#FFD93D,#6BCB77,#4D96FF,#843BFF,#FF6EC7,#FF6B6B)] border-2 rounded-full hover:scale-105 transition-all ease-in-out cursor-pointer"
          onClick={handleImageClick}
        />

        {sidebarToggle && (
          <div className="flex flex-col gap-0 w-full">
            <h2 className="w-full font-bold text-md whitespace-nowrap">
              Rajesh Ranjan
            </h2>
            <Link
              href="mailto:rajeshranjan8271@gmail.com"
              target="_blank"
              className="font-semibold text-slate-400 hover:text-white text-xs transition-all ease-in-out"
            >
              rajeshranjan8271@gmail.com
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarFooter;
