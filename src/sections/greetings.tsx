import greetingsStyles from "@/animations/greetings.module.css";
import GreetingsBackground from "@/components/greetings/greetings.background";
import GreetingsContent from "@/components/greetings/greetings.content";

const Greetings = () => {
  return (
    <section
      id="home"
      className={`before:block before:absolute relative before:inset-0 flex flex-wrap justify-around items-center before:opacity-100 pr-2 md:pr-10 pl-6 w-screen min-h-screen max-h-screen overflow-hidden ${greetingsStyles.greetings}`}
    >
      <GreetingsBackground />

      <GreetingsContent />
    </section>
  );
};

export default Greetings;
