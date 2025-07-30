import Image from "next/image";
import bannerImage from "@/assets/personal-img/profile_photo_3d_cartoon.png";

export default function GreetingsImg() {
  return (
    <div className="flex flex-grow justify-center items-center w-full lg:w-[40%] h-full">
      <Image
        src={bannerImage}
        alt="profileImg"
        width={1024}
        height={1536}
        quality={100}
        className="z-10 rounded-2xl w-full h-auto object-cover"
      />
    </div>
  );
}
