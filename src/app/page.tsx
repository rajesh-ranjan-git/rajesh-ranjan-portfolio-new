import greetingsStyles from "@/animations/greetings.module.css";
import buttonStyles from "@/animations/button.module.css";
import Sidebar from "@/components/sidebar/sidebar";
import SocialMedia from "@/components/social-media/socialMedia";
import GreetingsImg from "@/components/greetings-img/greetingsImg";

export default function Home() {
  return (
    <>
      <Sidebar />
      <section className="flex flex-wrap justify-center items-center pl-24 w-screen min-h-screen max-h-screen overflow-hidden">
        <div className="flex flex-col justify-center gap-6 bg-red-300 pt-10">
          <div className="h-full text-4xl leading-12">
            <h1>
              Hi There!{" "}
              <span
                className={greetingsStyles.wave}
                role="img"
                aria-labelledby="wave"
              >
                👋🏻
              </span>
            </h1>

            <h1>
              I'm
              <strong>&nbsp;Rajesh Ranjan</strong>
            </h1>
            <div>
              <p>Full Stack Developer</p>
            </div>
          </div>
          <SocialMedia />
          <div className="flex items-center gap-2">
            <div className="relative bg-white hover:shadow-md rounded-md overflow-hidden font-semibold text-xl active:scale-95 duration-500">
              <span className="absolute flex justify-center items-center m-auto rounded-md w-full h-full overflow-hidden font-semibold text-[#3f82d9] text-xl text-center">
                Contact Me
              </span>
              <button
                className={`bg-[#3f82d9] p-4 border-none w-full h-full text-white cursor-pointer mask-no-repeat ${buttonStyles.btn_mask_1}`}
              >
                Contact Me
              </button>
            </div>

            <div className="relative bg-white hover:shadow-md rounded-md overflow-hidden font-semibold text-xl active:scale-95 duration-500">
              <span className="absolute flex justify-center items-center m-auto rounded-md w-full h-full overflow-hidden font-semibold text-[#000] text-xl text-center">
                See My Resume
              </span>
              <button
                className={`bg-[#000] p-4 border-none w-full h-full text-white cursor-pointer mask-no-repeat ${buttonStyles.btn_mask_2}`}
              >
                See My Resume
              </button>
            </div>
          </div>
        </div>
        <div className="bg-blue-300">
          <GreetingsImg />
        </div>
      </section>
    </>
  );
}
