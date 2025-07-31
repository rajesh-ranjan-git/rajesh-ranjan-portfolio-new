import About from "@/module/about";
import Greetings from "@/module/greetings";
import PersonalInfo from "@/module/personalInfo";
import SnapScrollManager from "@/components/snap-scroll-manager/snapScrollManager";

export default function Home() {
  return (
    <main className="h-screen overflow-x-hidden">
      {/* Scroll Manager for smooth scrolling */}
      <SnapScrollManager />

      {/* Sections */}
      <Greetings />
      <About />
      <PersonalInfo />
    </main>
  );
}
