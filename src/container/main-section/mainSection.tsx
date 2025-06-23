import GreetingsImg from "@/components/greetings-img/greetings-img";
import TypeText from "@/components/type-text/typeText";
import SocialMedia from "@/container/social-media/socialMedia";

const MainSection = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 pl-0 md:pl-48 w-full h-screen">
      {/* <div className="flex flex-col justify-center gap-4 lg:gap-8 p-4 md:text-left text-center item-center">
        <h1 className="montserrat-font-regular text-4xl">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1 className="font-bahu text-5xl">
          I'm
          <strong className="font-extrabold text-6xl whitespace-nowrap">
            {" "}
            Rajesh Ranjan !
          </strong>
        </h1>

        <div className="relative h-10 font-semibold whitespace-nowrap">
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
      </div> */}

      <div className="text-5xl">
        <h1 className="pt-2 font-augustina">I'm Rajesh Ranjan !</h1>
        <h1 className="pt-2 font-amsterdam-kingdom">I'm Rajesh Ranjan !</h1>
        <h1 className="font-bahu">I'm Rajesh Ranjan !</h1>
        <h1 className="font-barsime">I'm Rajesh Ranjan !</h1>
        <h1 className="font-biggest-cat-ever">I'm Rajesh Ranjan !</h1>
        <h1 className="font-bright-aura">I'm Rajesh Ranjan !</h1>
        <h1 className="pt-2 font-chollistio">I'm Rajesh Ranjan !</h1>
        <h1 className="pt-2 font-friendly-stranger">I'm Rajesh Ranjan !</h1>
        <h1 className="font-huron">I'm Rajesh Ranjan !</h1>
        <h1 className="font-huron-texture">I'm Rajesh Ranjan !</h1>
        <h1 className="font-inter">I'm Rajesh Ranjan !</h1>
        <h1 className="font-jellycow">I'm Rajesh Ranjan !</h1>
        <h1 className="font-late-spring">I'm Rajesh Ranjan !</h1>
        <h1 className="font-merriweather">I'm Rajesh Ranjan !</h1>
        <h1 className="font-montserrat">I'm Rajesh Ranjan !</h1>
        <h1 className="font-mova">I'm Rajesh Ranjan !</h1>
        <h1 className="font-old-rocket">I'm Rajesh Ranjan !</h1>
        <h1 className="font-open-sans">I'm Rajesh Ranjan !</h1>
        <h1 className="font-playfair-display">I'm Rajesh Ranjan !</h1>
        <h1 className="font-poppins">I'm Rajesh Ranjan !</h1>
        <h1 className="font-portiere">I'm Rajesh Ranjan !</h1>
        <h1 className="font-rampung">I'm Rajesh Ranjan !</h1>
        <h1 className="font-realbun">I'm Rajesh Ranjan !</h1>
        <h1 className="font-roasted-chicken">I'm Rajesh Ranjan !</h1>
        <h1 className="font-savage-garden">I'm Rajesh Ranjan !</h1>
        <h1 className="font-savage-garden-decorative">I'm Rajesh Ranjan !</h1>
      </div>

      <div className="text-5xl">
        <h1 className="font-sermo">I'm Rajesh Ranjan !</h1>
        <h1 className="font-south-east">I'm Rajesh Ranjan !</h1>
        <h1 className="font-sweet-joys">I'm Rajesh Ranjan !</h1>
        <h1 className="font-sweet-joys-dot">I'm Rajesh Ranjan !</h1>
        <h1 className="font-sweet-joys-half-line">I'm Rajesh Ranjan !</h1>
        <h1 className="font-sweet-joys-inline">I'm Rajesh Ranjan !</h1>
        <h1 className="font-sweet-joys-line">I'm Rajesh Ranjan !</h1>
        <h1 className="font-sweet-joys-outline">I'm Rajesh Ranjan !</h1>
        <h1 className="font-sweet-joys-shadow text-4xl">I'm Rajesh Ranjan !</h1>
        <h1 className="font-thanksgiving-joy">I'm Rajesh Ranjan !</h1>
        <h1 className="font-thanksgiving-joy-decorative">I'm Rajesh Ranjan !</h1>
        <h1 className="font-thanksgiving-joy-dot">I'm Rajesh Ranjan !</h1>
        <h1 className="font-thanksgiving-joy-hat">I'm Rajesh Ranjan !</h1>
        <h1 className="font-thanksgiving-joy-leaf">I'm Rajesh Ranjan !</h1>
        <h1 className="font-thanksgiving-joy-pumpkin">I'm Rajesh Ranjan !</h1>
        <h1 className="font-thanksgiving-joy-turkey">I'm Rajesh Ranjan !</h1>
        <h1 className="font-thanksgiving-joy-turkey-head">I'm Rajesh Ranjan !</h1>
        <h1 className="font-thanksgiving-joy-turkey-tail">I'm Rajesh Ranjan !</h1>
        <h1 className="font-workout">I'm Rajesh Ranjan !</h1>
      </div>

      {/* <div className="flex justify-center items-center md:col-start-2 md:row-span-2 lg:row-span-1 w-full lg:col-auto">
        <GreetingsImg />
      </div> */}
    </section>
  );
};

export default MainSection;
