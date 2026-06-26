import Image from "next/image";
import { socialMedia } from "@/config/social.config";
import ImageBackground from "@/components/ui/background/image.background";
import FloatingBadge from "@/components/ui/floating/floating.badge";
import Link from "next/link";

const AboutImage = () => {
  return (
    <div className="isolate relative flex justify-center justify-self-center items-center order-2 md:order-1 bg-image-frame-bg shadow-[0_8px_32px_rgba(13,15,43,0.08),0_2px_8px_rgba(13,15,43,0.04)] backdrop-blur-xl p-3 sm:p-4 border border-image-frame-border rounded-[64px] sm:rounded-[84px] w-full md:w-1/2 lg:w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-none">
      <ImageBackground className="top-0 left-0 -rotate-6" />
      <ImageBackground className="top-0 left-0 -rotate-12" />

      <FloatingBadge
        position="top-right"
        type="float-diagonal-reverse"
        duration={10}
        className="px-4"
      >
        <div className="flex justify-between items-center gap-1 w-full h-full">
          <span className="font-alkatra text-4xl text-accent-blue shrink-0">
            6<span className="text-2xl align-super">+</span>
          </span>
          <span className="flex flex-col justify-center items-start text-sm">
            <span>yrs of</span>
            <span>experience</span>
          </span>
        </div>
      </FloatingBadge>
      <FloatingBadge
        position="bottom-left"
        type="float-y"
        duration={3}
        className="pr-4"
      >
        <Link
          href={socialMedia.github.url}
          className="group flex justify-between items-center gap-1 w-full h-full"
        >
          <div className="bg-linear-to-r border border-image-frame-border rounded-full w-12 h-12 overflow-hidden from-accent-purple to-accent-blue shrink-0">
            <Image
              src="/assets/personal-img/profile_photo_3d_cartoon.png"
              alt="Rajesh Ranjan profile illustration"
              width={100}
              height={100}
              loading="eager"
              className="rounded-full w-full h-auto"
            />
          </div>
          <span className="flex flex-col justify-center items-start text-sm">
            <span className="text-lg">Rajesh Ranjan</span>
            <span className="text-badge-text-secondary text-xs transition-all ease-in-out group-hover:text-accent-blue">
              @{socialMedia.github.userName}
            </span>
          </span>
        </Link>
      </FloatingBadge>

      <Image
        src="/assets/personal-img/profile_photo_3d_cartoon.png"
        alt="Rajesh Ranjan profile illustration"
        width={1024}
        height={1536}
        loading="eager"
        className="rounded-br-[50%] w-full h-auto"
      />
    </div>
  );
};

export default AboutImage;
