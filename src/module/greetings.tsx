import Image from "next/image";
import bannerImage from "@/assets/personal-img/profile_photo_3d_cartoon.png";
import GreetingsImg from "@/components/greetings/greetings-img/greetingsImg";
import GreetingsMain from "@/containers/greetings/greetingsMain";

const Greetings = () => {
  return (
    <section className="flex flex-wrap justify-center items-center pl-24 w-screen min-h-screen max-h-screen overflow-hidden">
      <GreetingsMain />
      {/* <GreetingsImg /> */}
      <div className="flex justify-center items-center bg-red-400">
        <Image
          src={bannerImage}
          alt="profileImg"
          width={200}
          height={200}
          className="rounded-2xl w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Greetings;
