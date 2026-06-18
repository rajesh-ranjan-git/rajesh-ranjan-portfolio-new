"use client";

import Image from "next/image";
import { IoIosWarning } from "react-icons/io";
import { staticImagesConfig } from "@/config/common.config";
import GoBack from "@/components/ui/buttons/go.back";

const NotFound = () => {
  return (
    <div className="flex flex-col bg-slate-50 w-full h-dvh overflow-hidden text-slate-900">
      <main className="relative flex flex-1 overflow-hidden">
        <div className="relative flex flex-col flex-1 justify-center items-center gap-4 bg-amber-50 p-2 pb-20 md:pb-6 overflow-hidden">
          <div className="relative flex justify-center w-full overflow-hidden">
            <Image
              src={staticImagesConfig.notFoundError.src}
              alt={staticImagesConfig.notFoundError.alt}
              width={staticImagesConfig.notFoundError.width}
              height={staticImagesConfig.notFoundError.height}
              loading={staticImagesConfig.notFoundError.loading}
              className="object-contain select-none"
            />
          </div>

          <div className="flex justify-center items-center gap-2 mx-auto">
            <IoIosWarning className="text-amber-600 text-2xl md:text-5xl" />
            <h3 className="font-poppins text-amber-700 text-lg md:text-3xl">
              The requested page does not exist!
            </h3>
          </div>

          <GoBack />
        </div>
      </main>
    </div>
  );
};

export default NotFound;
