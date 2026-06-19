import Greetings from "@/sections/greetings";
import About from "@/sections/about";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Greetings />
      <About />
    </main>
  );
}
