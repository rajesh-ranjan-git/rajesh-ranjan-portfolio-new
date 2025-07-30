import Image from "next/image";
import bannerImage from "@/assets/personal-img/profile_photo_3d_cartoon.png";

export default function GreetingsImg() {
  return (
    <div className="flex justify-center items-center w-60 sm:w-80 md:w-96">
      <Image
        src={bannerImage}
        alt="profileImg"
        width={300}
        height={300}
        className="rounded-2xl w-full h-full object-cover"
      />
    </div>
  );
}
