import Sidebar from "@/components/sidebar/sidebar";
import About from "@/module/about";
import Greetings from "@/module/greetings";
import PersonalInfo from "@/module/personalInfo";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Greetings />
      <About />
      <PersonalInfo />
    </>
  );
}
