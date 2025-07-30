import Sidebar from "@/components/sidebar/sidebar";
import About from "@/module/about";
import Greetings from "@/module/greetings";

export default function Home() {
  return (
    <>
      <Sidebar />
      <Greetings />
      <About />
    </>
  );
}
