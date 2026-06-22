import Image from "next/image";
import ImageBackground from "@/components/ui/background/image.background";
import FloatingBadge from "@/components/ui/floating/floating,badge";

const AboutImage = () => {
  return (
    <div className="isolate relative flex justify-center justify-self-center items-center bg-[#1a1f4e] p-3 sm:p-4 rounded-[64px] sm:rounded-[84px] w-full md:w-1/2 lg:w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-none">
      <ImageBackground className="top-0 left-0 -rotate-6" />
      <ImageBackground className="top-0 left-0 -rotate-12" />

      <FloatingBadge position="top-right">6+ yrs</FloatingBadge>
      <FloatingBadge position="bottom-left">Full Stack Developer</FloatingBadge>

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

export default AboutImage;
