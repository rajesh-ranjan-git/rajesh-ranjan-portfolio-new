import greetingsStyles from "@/animations/greetings.module.css";
import GreetingsMain from "@/containers/greetings/greetingsMain";
import GreetingsImg from "@/components/greetings/greetings-img/greetingsImg";

const Greetings = () => {
  return (
    <section
      className={`before:block before:top-0 before:right-0 before:bottom-0 before:left-0 before:absolute relative before:inset-0 flex flex-wrap justify-around items-center before:opacity-100 pr-10 pl-32 w-screen min-h-screen max-h-screen overflow-hidden greetings ${greetingsStyles.greetings}`}
    >
      <div
        className={`w-[250vh] h-1/3 absolute left-0 opacity-0 ${greetingsStyles.rectangle} ${greetingsStyles.rectangle_1}`}
      ></div>
      <div
        className={`w-[250vh] h-1/3 absolute left-0 opacity-0 ${greetingsStyles.rectangle} ${greetingsStyles.rectangle_2}`}
      ></div>
      <GreetingsMain />
      <GreetingsImg />
    </section>
  );
};

export default Greetings;
