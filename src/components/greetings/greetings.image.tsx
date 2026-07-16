import Image from "next/image";
import { ownerConfig } from "@/config/owner.config";

const GreetingsImage = () => {
  return (
    <div className="z-10 flex justify-center items-center w-full lg:w-[40%] h-full grow">
      {ownerConfig.images.greetingsImage ? (
        <Image
          src={ownerConfig.images.greetingsImage}
          alt="profile-img-3d-cartoon"
          title="3D Cartoon Profile Image"
          width={1024}
          height={1536}
          loading="eager"
          className="rounded-br-[50%] w-full h-auto object-cover"
        />
      ) : (
        <div className="flex justify-center items-center bg-card-bg hover:bg-card-bg-hover border border-card-border hover:border-card-border-hover rounded-3xl w-full h-40">
          Your Greetings Image goes here..
        </div>
      )}
    </div>
  );
};

export default GreetingsImage;
