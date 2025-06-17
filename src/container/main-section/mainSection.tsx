import GreetingsImg from "@/components/greetings-img/greetings-img";
import ProfileImgSquare from "@/components/profile-img/profileImgSquare";
import TypeText from "@/components/type-text/typeText";
import SocialMedia from "@/container/social-media/socialMedia";

const MainSection = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="gap-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-0 md:pl-24 w-full h-screen">
      <div className="flex flex-col justify-center gap-4 lg:gap-8 p-4 text-2xl md:text-3xl md:text-left text-center item-center">
        <h1>
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1>
          I'm
          <strong className="whitespace-nowrap"> Rajesh Ranjan !</strong>
        </h1>

        <div className="relative h-10 font-semibold lg:text-2xl xl:text-3xl whitespace-nowrap">
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

      <div className="hidden md:flex justify-center items-center md:col-start-1 md:row-start-2 w-full lg:row-auto lg:col-auto">
        <ProfileImgSquare />
      </div>

      <div className="flex justify-center items-center md:col-start-2 md:row-span-2 lg:row-span-1 w-full lg:col-auto">
        <GreetingsImg />
      </div>
    </section>
  );
};

export default MainSection;
