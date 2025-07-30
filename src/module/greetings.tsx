import GreetingsMain from "@/containers/greetings/greetingsMain";
import GreetingsImg from "@/components/greetings/greetings-img/greetingsImg";

const Greetings = () => {
  return (
    <section className="flex flex-wrap justify-around items-center pr-10 pl-30 w-screen min-h-screen max-h-screen overflow-hidden">
      <GreetingsMain />
      <GreetingsImg />
    </section>
  );
};

export default Greetings;
