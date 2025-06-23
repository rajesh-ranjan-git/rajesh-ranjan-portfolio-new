import GreetingsImg from "@/components/greetings-img/greetings-img";
import TypeText from "@/components/type-text/typeText";
import SocialMedia from "@/container/social-media/socialMedia";

const MainSection = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 pl-0 md:pl-48 w-full h-screen">
      <div className="flex flex-col justify-center gap-4 lg:gap-8 p-4 md:text-left text-center item-center">
        <h1 className="font-bahu text-4xl tracking-wide">
          Hi There !{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1 className="font-bahu text-5xl">
          I'm
          <strong className="font-chollistio font-extrabold text-5xl whitespace-nowrap">
            {" "}
            Rajesh Ranjan !
          </strong>
        </h1>

        <div className="relative mt-5 font-merriweather font-semibold text-4xl whitespace-nowrap">
          <TypeText />
        </div>

        <SocialMedia />

        <div className="flex justify-center md:justify-start items-center gap-4 lg:gap-2 xl:gap-4 text-white text-lg">
          <button
            type="button"
            className="bg-blue-500 px-6 lg:px-3 xl:px-6 py-4 lg:py-2 xl:py-4 border-1 border-transparent rounded-xl font-semibold text-nowrap cursor-pointer"
          >
            Contact Me
          </button>
          <button
            type="button"
            className="bg-blue-500 px-6 lg:px-3 xl:px-6 py-4 lg:py-2 xl:py-4 border-1 border-transparent rounded-xl font-semibold text-nowrap cursor-pointer"
          >
            See My Resume
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center w-full">
        <GreetingsImg />
      </div>
    </section>
  );
};

export default MainSection;
