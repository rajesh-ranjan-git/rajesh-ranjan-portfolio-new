import Image from "next/image";
import Link from "next/link";
import { ownerConfig } from "@/config/owner.config";
import { getFullName, getSingleSocialLink } from "@/helpers/owner.helpers";
import ImageBackground from "@/components/ui/background/image.background";
import FloatingBadge from "@/components/ui/floating/floating.badge";

const AboutImage = () => {
  const social = getSingleSocialLink(ownerConfig.socialBadge);

  return (
    <div className="isolate relative flex justify-center justify-self-center items-center order-2 lg:order-1 bg-image-frame-bg shadow-[0_8px_32px_rgba(13,15,43,0.08),0_2px_8px_rgba(13,15,43,0.04)] backdrop-blur-xl p-3 sm:p-4 border border-image-frame-border rounded-[64px] sm:rounded-[84px] w-full md:w-1/2 lg:w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-none min-h-108">
      <ImageBackground className="top-0 left-0 -rotate-6" />
      <ImageBackground className="top-0 left-0 -rotate-12" />

      {ownerConfig.experience.years && ownerConfig.experience.years > 0 ? (
        <FloatingBadge
          position="top-right"
          type="float-diagonal-reverse"
          duration={10}
          className="px-4"
        >
          <div className="flex justify-between items-center gap-1 w-full h-full">
            <span className="font-alkatra text-4xl text-accent-blue shrink-0">
              {ownerConfig.experience.years}
              <span className="text-2xl align-super">+</span>
            </span>
            <span className="flex flex-col justify-center items-start text-sm">
              <span>yrs of</span>
              <span>experience</span>
            </span>
          </div>
        </FloatingBadge>
      ) : ownerConfig.experience.months && ownerConfig.experience.months > 0 ? (
        <FloatingBadge
          position="top-right"
          type="float-diagonal-reverse"
          duration={10}
          className="px-4"
        >
          <div className="flex justify-between items-center gap-1 w-full h-full">
            <span className="font-alkatra text-4xl text-accent-blue shrink-0">
              {ownerConfig.experience.months}
              <span className="text-2xl align-super">+</span>
            </span>
            <span className="flex flex-col justify-center items-start text-sm">
              <span>months of</span>
              <span>experience</span>
            </span>
          </div>
        </FloatingBadge>
      ) : null}

      {social ? (
        <Link
          href={social.url ?? ""}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <FloatingBadge
            position="bottom-left"
            type="float-y"
            duration={3}
            className="flex justify-between items-center gap-1 pr-4"
          >
            <div className="bg-linear-to-r border border-image-frame-border rounded-full w-12 h-12 overflow-hidden from-accent-purple to-accent-blue shrink-0">
              {ownerConfig.images.profileImage ? (
                <Image
                  src={ownerConfig.images.profileImage}
                  alt="Rajesh Ranjan profile illustration"
                  width={100}
                  height={100}
                  loading="eager"
                  className="rounded-full w-full h-auto"
                />
              ) : (
                <div className="flex justify-center items-center bg-image-frame-bg border border-image-frame-border rounded-3xl w-full h-full translate-y-0.5">
                  {ownerConfig.initials ? ownerConfig.initials : "JD"}
                </div>
              )}
            </div>
            <span className="flex flex-col justify-center items-start text-sm">
              <span className="text-lg">{getFullName()}</span>
              <span className="text-badge-text-secondary text-xs transition-all ease-in-out group-hover:text-accent-blue">
                @{social.userName}
              </span>
            </span>
          </FloatingBadge>
        </Link>
      ) : null}

      {ownerConfig.images.aboutImage ? (
        <Image
          src="/assets/personal-img/profile_photo_3d_cartoon.png"
          alt="Rajesh Ranjan profile illustration"
          width={1024}
          height={1536}
          loading="eager"
          className="rounded-br-[50%] w-full h-auto"
        />
      ) : (
        <div>Your About Image goes here..</div>
      )}
    </div>
  );
};

export default AboutImage;
