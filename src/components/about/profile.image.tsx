import aboutStyles from "@/animations/about.module.css";
import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="isolate relative flex justify-center justify-self-center items-center bg-[#1a1f4e] p-3 sm:p-4 rounded-[64px] sm:rounded-[84px] w-full md:w-1/2 lg:w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-none">
      <div className="top-0 left-0 -z-1 absolute inset-0 bg-white/20 rounded-[84px] -rotate-6"></div>
      <div className="top-0 left-0 -z-1 absolute inset-0 bg-white/30 rounded-[84px] -rotate-12"></div>

      <div
        className={`top-12 sm:top-16 lg:top-20 -right-4 sm:-right-8 lg:-right-12 absolute bg-white text-[#1a1f4e] px-4 sm:px-6 py-3 sm:py-4 rounded-[28px] sm:rounded-[36px] font-arima font-bold text-lg sm:text-xl lg:text-2xl whitespace-nowrap duration-500 ${aboutStyles.float}`}
      >
        6+ yrs
      </div>
      <div
        className={`bottom-12 sm:bottom-16 lg:bottom-20 -left-4 sm:-left-8 lg:-left-12 absolute bg-white text-[#1a1f4e] px-4 sm:px-6 py-3 sm:py-4 rounded-[28px] sm:rounded-[36px] font-arima font-bold text-base sm:text-lg lg:text-xl whitespace-nowrap duration-500 ${aboutStyles.float_reverse}`}
      >
        Full Stack Developer
      </div>

      <Image
        src="/assets/personal-img/profile_photo_3d_cartoon.png"
        alt="Rajesh Ranjan profile illustration"
        width={1024}
        height={1536}
        className="rounded-br-[50%] w-full h-auto"
      />
    </div>
  );
};

export default ProfileImage;
