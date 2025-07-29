import GreetingsImg from "@/components/greetings/greetings-img/greetingsImg";
import GreetingsMain from "@/containers/greetings/greetingsMain";

const Greetings = () => {
  return (
    <section className="flex flex-wrap justify-center items-center pl-24 w-screen min-h-screen max-h-screen overflow-hidden">
      <GreetingsMain />
      <GreetingsImg />
    </section>
  );
};

export default Greetings;
