"use client";

import Image from "next/image";
import { themeConfig } from "@/config/common.config";
import { useAppStore } from "@/store/store";

const EducationImage = ({ imageSrc }: { imageSrc: string }) => {
  const activeTheme = useAppStore((state) => state.activeTheme);

  return (
    <div className="top-1/2 -left-20 z-20 absolute flex justify-start items-center w-84 h-84 group-hover:scale-102 transition-all -translate-y-1/2 duration-300 shrink-0">
      <Image
        src={imageSrc}
        alt="Education Background"
        width={500}
        height={500}
        className={`bg-linear-to-br from-sidebar-bg via-sidebar-bg border-2 transition-all duration-300 rounded-4xl w-full h-full to-accent-blue shadow-lg ${activeTheme === themeConfig.dark ? "border-white" : "border-bg"}`}
      />
    </div>
  );
};

export default EducationImage;
