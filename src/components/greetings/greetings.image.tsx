import Image from "next/image";

const GreetingsImage = () => {
  return (
    <div className="z-10 flex justify-center items-center w-full lg:w-[40%] h-full grow">
      <Image
        src="/assets/personal-img/profile_photo_3d_cartoon.png"
        alt="profile-img-3d-cartoon"
        title="3D Cartoon Profile Image"
        width={1024}
        height={1536}
        loading="eager"
        className="rounded-br-[50%] w-full h-auto object-cover"
      />
    </div>
  );
};

export default GreetingsImage;
