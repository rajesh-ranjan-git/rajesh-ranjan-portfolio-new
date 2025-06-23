import Sidebar from "@/container/sidebar/sidebar";
import MainSection from "@/container/main-section/mainSection";

const Main = () => {
  return (
    <main className="flex items-center w-screen">
    {/* <main className="flex items-center w-screen h-screen overflow-hidden"> */}
      <Sidebar />
      <MainSection />
    </main>
  );
};

export default Main;
