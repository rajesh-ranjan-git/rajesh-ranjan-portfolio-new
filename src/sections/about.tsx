import aboutStyles from "@/animations/about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className="flex justify-around items-center min-h-screen">
      <div className="isolate relative flex justify-center items-center bg-[#1a1f4e] p-4 rounded-[84px]">
        <div className="top-0 left-0 -z-1 absolute inset-0 bg-white/20 rounded-[84px] -rotate-6"></div>
        <div className="top-0 left-0 -z-1 absolute inset-0 bg-white/30 rounded-[84px] -rotate-12"></div>

        <div
          className={`top-20 -right-12 absolute bg-white px-6 py-4 rounded-[36px] font-arima font-bold text-2xl duration-500 ${aboutStyles.float}`}
        >
          7+ yrs
        </div>
        <div
          className={`bottom-20 -left-12 absolute bg-white px-6 py-4 rounded-[36px] font-arima font-bold text-2xl duration-500 ${aboutStyles.float_reverse}`}
        >
          Full Stack Developer
        </div>

        <Image
          src="/assets/personal-img/profile_photo_3d_cartoon.png"
          alt="Image"
          width="300"
          height="300"
          className="rounded-br-[160px]"
        />
      </div>
      <div> About Rajesh Ranjan</div>
    </div>
  );
};

export default About;
