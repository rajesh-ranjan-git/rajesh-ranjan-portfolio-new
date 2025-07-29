import styles from "@/animations/greetings.module.css";
import Sidebar from "@/components/sidebar/sidebar";
import GreetingsImg from "@/components/greetings-img/greetingsImg";

export default function Home() {
  return (
    <>
      <Sidebar />
      <section className="flex flex-wrap justify-center items-center pl-24 w-screen min-h-screen max-h-screen overflow-hidden">
        <div className="bg-red-400 h-full text-4xl leading-12">
          <h1>
            Hi There!{" "}
            <span className={styles.wave} role="img" aria-labelledby="wave">
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
        <GreetingsImg />
      </section>
    </>
  );
}
