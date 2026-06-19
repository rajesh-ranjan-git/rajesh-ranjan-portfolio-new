import Image from "next/image";

export default function GreetingsImg() {
  return (
    <div className="flex justify-center items-center w-full lg:w-[40%] h-full grow">
      <Image
        src="/assets/personal-img/profile_photo_3d_cartoon.png"
        alt="profile-img-3d-cartoon"
        title="3D Cartoon Profile Image"
        width={1024}
        height={1536}
        loading="eager"
        className="z-10 rounded-br-[50%] w-full h-auto object-cover"
      />
    </div>
  );
}
