import Sidebar from "@/components/sidebar/sidebar";
import About from "@/module/about";
import Greetings from "@/module/greetings";
import PersonalInfo from "@/module/personalInfo";

export default function Home() {
  return (
    <main className="h-screen overflow-x-hidden overflow-y-scroll snap-mandatory snap-y">
      <Sidebar />
      <Greetings />
      <About />
      <PersonalInfo />
    </main>
  );
}
