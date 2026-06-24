import Greetings from "@/sections/greetings";
import About from "@/sections/about";
import FloatingMenu from "@/components/ui/floating/floating.menu";
import ScrollButton from "@/components/ui/buttons/scroll.button";

export default function Home() {
  return (
    <main className="relative pl-0 md:pl-16 min-h-screen overflow-x-hidden">
      <FloatingMenu />

      <Greetings />
      <About />

      <ScrollButton />
    </main>
  );
}
