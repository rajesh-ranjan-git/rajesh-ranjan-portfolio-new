import GreetingsImg from "@/components/greetings-img/greetings-img";
import ProfileImgSquare from "@/components/profile-img/profileImgSquare";
import TypeText from "@/components/type-text/typeText";
import SocialMedia from "@/container/social-media/socialMedia";

const MainSection = () => {
  return (
    <section className="flex md:flex-row flex-col justify-around items-center md:p-20 w-full h-screen overflow-x-hidden">
      <div className="flex flex-col justify-center gap-8 p-4 md:min-w-[360px] lg:min-w-[390px] text-3xl lg:text-4xl item-center">
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
        <div className="font-semibold whitespace-nowrap">
          <TypeText />
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
