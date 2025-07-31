import Image from "next/image";
import greetingsStyles from "@/animations/greetings.module.css";
import obj_triangle from "@/assets/background/obj-triangle.png";
import GreetingsBgParticles from "@/components/greetings/greetings-bg-particles/greetingsBgParticles";

const GreetingsBg = () => {
  return (
    <>
      <div
        className={`w-[300vh] h-96 absolute left-0 ${greetingsStyles.rectangle} ${greetingsStyles.rectangle_1}`}
      ></div>
      <div
        className={`w-[250vh] h-96 absolute left-0 ${greetingsStyles.rectangle} ${greetingsStyles.rectangle_2}`}
      ></div>
      <div
        className={`border-16 border-white opacity-20 absolute lg:w-[40rem] lg:h-[40rem] md:w-[30rem] md:h-[30rem] w-[20rem] h-[20rem] block lg:left-[-20%] lg:bottom-[-30%] left-[-5%] bottom-[-10%] ${greetingsStyles.rectangle_transparent}`}
      ></div>
      <div
        className={`border-16 border-white opacity-20 absolute block lg:w-[45rem] lg:h-[45rem] md:w-[35rem] md:h-[35rem] w-[25rem] h-[25rem] right-[-10%] top-[5%] ${greetingsStyles.rectangle_transparent}`}
      ></div>
      <div
        className={`border-4 border-white opacity-20 absolute block rounded-full w-20 h-20 left-[5%] top-[50%] ${greetingsStyles.circle}`}
      ></div>
      <div
        className={`border-4 border-white opacity-20 absolute block rounded-full w-32 h-32 left-[83%] top-[20%] ${greetingsStyles.circle}`}
      ></div>
      <div
        className={`border-4 border-white opacity-20 absolute block rounded-full w-40 h-40 right-[25%] top-[80%] ${greetingsStyles.circle}`}
      ></div>
      <div className={`absolute right-0 ${greetingsStyles.triangle_1}`}>
        <Image
          src={obj_triangle}
          alt=""
          width={50}
          height={50}
          className="opacity-20"
        />
      </div>
      <div
        className={`absolute top-[30%] left-[20%] ${greetingsStyles.triangle_2}`}
      >
        <Image
          src={obj_triangle}
          alt=""
          width={75}
          height={75}
          className="opacity-20"
        />
      </div>
      <div
        className={`absolute top-[80%] left-[15%] ${greetingsStyles.triangle_3}`}
      >
        <Image
          src={obj_triangle}
          alt=""
          width={45}
          height={45}
          className="opacity-20"
        />
      </div>
      <div
        className={`absolute top-[60%] right-[15%] ${greetingsStyles.triangle_4}`}
      >
        <Image
          src={obj_triangle}
          alt=""
          width={45}
          height={45}
          className="opacity-20"
        />
      </div>

      <GreetingsBgParticles />
    </>
  );
};

export default GreetingsBg;
