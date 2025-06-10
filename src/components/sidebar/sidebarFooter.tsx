import Image from "next/image";
import Link from "next/link";
import profileImg from "@/assets/personal-img/personal-img-circular.png";
import { SidebarFooterProps } from "@/types/propTypes";

const SidebarFooter = ({ sidebarToggle }: SidebarFooterProps) => {
  return (
    <div className="flex flex-col w-full h-20 overflow-hidden">
      <hr className="text-slate-700" />
      <div className="flex justify-between items-center gap-2 px-1 w-full h-full">
        <Image src={profileImg} width={36} height={36} alt="profile-img" />

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
