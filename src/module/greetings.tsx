import greetingsStyles from "@/animations/greetings.module.css";
import GreetingsMain from "@/containers/greetings/greetingsMain";
import GreetingsImg from "@/components/greetings/greetings-img/greetingsImg";

const Greetings = () => {
  return (
    <section
      className={`before:block before:top-0 before:right-0 before:bottom-0 before:left-0 before:absolute relative before:inset-0 flex flex-wrap justify-around items-center before:opacity-100 pr-10 pl-28 md:pl-32 w-screen min-h-screen max-h-screen overflow-hidden greetings ${greetingsStyles.greetings}`}
    >
      <div
        className={`w-[250vh] h-1/3 absolute left-0 opacity-0 ${greetingsStyles.rectangle} ${greetingsStyles.rectangle_1}`}
      ></div>
      <div
        className={`w-[250vh] h-1/3 absolute left-0 opacity-0 ${greetingsStyles.rectangle} ${greetingsStyles.rectangle_2}`}
      ></div>
      <div
        className={`border-16 border-white opacity-20 absolute lg:w-[40rem] lg:h-[40rem] md:w-[30rem] md:h-[30rem] w-[20rem] h-[20rem] block lg:left-[-20%] lg:bottom-[-30%] left-[-5%] bottom-[-10%] ${greetingsStyles.rectangle_transparent}`}
      ></div>
      <div
        className={`border-16 border-white opacity-20 absolute block lg:w-[45rem] lg:h-[45rem] md:w-[35rem] md:h-[35rem] w-[25rem] h-[25rem] right-[-10%] top-[5%] ${greetingsStyles.rectangle_transparent}`}
      ></div>
      <GreetingsMain />
      <GreetingsImg />
    </section>
  );
};

export default Greetings;
