import FloatingMenu from "@/components/ui/floating/floating.menu";
import Greetings from "@/sections/greetings";
import About from "@/sections/about";

export default function Home() {
  return (
    <main className="relative pl-0 md:pl-20 min-h-screen overflow-x-hidden">
      <FloatingMenu />

      <Greetings />
      <About />
    </main>
  );
}
