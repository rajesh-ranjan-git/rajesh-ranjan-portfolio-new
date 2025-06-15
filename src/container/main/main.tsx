import Sidebar from "@/components/sidebar/sidebar";
import MainSection from "@/container/main-section/mainSection";

const Main = () => {
  return (
    <main className="flex items-center w-full h-screen">
      <Sidebar />
      <MainSection />
    </main>
  );
};

export default Main;
