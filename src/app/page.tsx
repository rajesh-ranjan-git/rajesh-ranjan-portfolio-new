import Greetings from "@/sections/greetings";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Experience from "@/sections/experience";
import Education from "@/sections/education";
import Portfolio from "@/sections/portfolio";
import Certificates from "@/sections/certificates";
import Contact from "@/sections/contact";
import FloatingMenu from "@/components/ui/floating/floating.menu";
import ScrollButton from "@/components/ui/buttons/scroll.button";

export default function Home() {
  return (
    <main className="relative pl-0 md:pl-16 min-h-screen overflow-x-hidden">
      <FloatingMenu />

      <Greetings />
      <About title="About me..." />
      <Skills title="What My Programming Skills Includes?" />
      <Experience title="Professional journey..." />
      <Education title="Academic details..." />
      <Portfolio title="Recent works..." />
      <Certificates title="Verified training accomplishments..." />
      <Contact title="Beam me a message..." />

      <ScrollButton />
    </main>
  );
}
