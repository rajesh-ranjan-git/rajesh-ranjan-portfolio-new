"use client";

import Image from "next/image";
import ReactParallaxTilt from "react-parallax-tilt";
import bannerImage from "@/assets/personal-img/personal-img.png";

const MainSection = () => {
  return (
    <section className="flex justify-around items-center pl-20 w-full h-screen">
      <div className="flex justify-center items-center w-full">
        <ReactParallaxTilt scale={1.05}>
          <div className="group relative rounded-full w-[400px] h-[400px] overflow-hidden">
            {/* Equivalent to ::before */}
            <div className="-top-[10px] right-[140px] bottom-[-10px] left-[140px] absolute group-hover:inset-[-10px_0px] bg-gradient-to-br from-[#00ccff] to-[#d400d4] transition-all animate-spin-slow duration-500" />

            {/* Equivalent to ::after */}
            <div className="z-[1] absolute inset-1 group-hover:inset-[-10px_0px] bg-white rounded-full transition-all animate-spin-slow duration-500" />

            {/* Content */}
            <div className="z-[3] absolute inset-2.5 flex flex-col justify-center items-center border-2 border-slate-700 rounded-full overflow-hidden">
              <Image
                src={bannerImage}
                alt="Profile"
                width={300}
                height={300}
                className="top-0 z-[3] absolute w-full h-full object-cover transition-opacity duration-500 pointer-events-none"
              />
            </div>
          </div>
        </ReactParallaxTilt>
      </div>
      <div className="flex justify-center items-center w-full">
        <ReactParallaxTilt scale={1.04}>
          <div>
            <Image
              src={bannerImage}
              width={300}
              height={300}
              alt="banner-img"
              className="rounded-2xl min-w-96"
            />
          </div>
        </ReactParallaxTilt>
      </div>
    </section>
  );
};

export default MainSection;
