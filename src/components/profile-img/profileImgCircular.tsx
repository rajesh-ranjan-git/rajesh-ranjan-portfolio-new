"use client";

import Image from "next/image";
import ReactParallaxTilt from "react-parallax-tilt";
import bannerImage from "@/assets/personal-img/personal-img.png";

const ProfileImgCircular = () => {
  return (
    <ReactParallaxTilt scale={1.04} className="p-2">
      <div className="before:top-1/2 after:top-1/2 before:left-1/2 after:left-1/2 before:z-[-1] after:z-[-1] before:absolute after:absolute relative flex flex-col justify-center items-center before:bg-[conic-gradient(from_var(--angle),#FF6B6B,#FFD93D,#6BCB77,#4D96FF,#843BFF,#FF6EC7,#FF6B6B)] after:bg-[conic-gradient(from_var(--angle),#FF6B6B,#FFD93D,#6BCB77,#4D96FF,#843BFF,#FF6EC7,#FF6B6B)] before:blur-[1.5rem] p-0.5 rounded-full before:rounded-full after:rounded-full before:w-full after:w-full before:h-full after:h-full before:content-[''] after:content-[''] before:translate-x-[-50%] before:translate-y-[-50%] after:translate-x-[-50%] after:translate-y-[-50%] before:[animation:rotate-angle_3s_linear_infinite] after:[animation:rotate-angle_3s_linear_infinite]">
        <div className="hidden lg:flex justify-center items-center bg-white p-1 rounded-full w-64 md:w-72 lg:w-96 h-64 md:h-72 lg:h-96 overflow-hidden">
          <Image
            src={bannerImage}
            alt="Profile"
            width={500}
            height={500}
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>
    </ReactParallaxTilt>
  );
};

export default ProfileImgCircular;
