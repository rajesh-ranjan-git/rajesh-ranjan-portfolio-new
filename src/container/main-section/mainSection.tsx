import GreetingsImg from "@/components/greetings-img/greetings-img";
import TypeText from "@/components/type-text/typeText";
import SocialMedia from "@/container/social-media/socialMedia";

const MainSection = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 pr-0 md:pr-40 pl-0 md:pl-40 w-full h-screen">
      <div className="flex flex-col justify-center gap-4 lg:gap-8 p-4 lg:text-left text-center item-center">
        <h1 className="font-chollistio text-4xl tracking-wide">
          Hi There !{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1 className="mt-4 font-bahu text-4xl xl:text-5xl">
          I'm
          <strong className="font-chollistio text-4xl xl:text-5xl whitespace-nowrap">
            {" "}
            Rajesh Ranjan !
          </strong>
        </h1>

        <div className="relative mt-5 font-merriweather font-semibold text-3xl xl:text-4xl whitespace-nowrap">
          <TypeText />
        </div>

        <SocialMedia />

        <div className="flex justify-center lg:justify-start items-center gap-4 lg:gap-2 xl:gap-4 text-white text-lg">
          <button
            type="button"
            className="bg-blue-500 px-6 py-4 border-1 border-transparent rounded-xl font-semibold text-nowrap cursor-pointer"
          >
            Contact Me
          </button>
          <button
            type="button"
            className="bg-blue-500 px-6 py-4 border-1 border-transparent rounded-xl font-semibold text-nowrap cursor-pointer"
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
