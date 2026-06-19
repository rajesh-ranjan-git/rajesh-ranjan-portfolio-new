import Greetings from "@/sections/greetings";
import About from "@/sections/about";

export default function Home() {
  return (
    <main className="pl-0 md:pl-20 min-h-screen overflow-x-hidden">
      <Greetings />
      <About />
    </main>
  );
}
