import { ButtonMask1, ButtonMask2 } from "@/components/button/button";
import GreetingsImg from "@/components/greetings-img/greetings-img";
import ProfileImgSquare from "@/components/profile-img/profileImgSquare";
import TypeText from "@/components/type-text/typeText";
import SocialMedia from "@/container/social-media/socialMedia";

const MainSection = () => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="flex md:flex-row flex-col justify-around items-center md:p-20 w-full h-screen overflow-hidden">
      <div className="flex flex-col justify-center gap-4 lg:gap-8 p-4 md:min-w-[360px] text-2xl md:text-3xl lg:text-4xl item-center">
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
        <div className="relative h-10 font-semibold whitespace-nowrap">
          <div className="top-0 left-0 absolute">
            <TypeText />
          </div>
        </div>

        <SocialMedia />
      </div>
      <div className="flex justify-start items-start">
        <GreetingsImg />
      </div>
    </section>
  );
};

export default MainSection;
