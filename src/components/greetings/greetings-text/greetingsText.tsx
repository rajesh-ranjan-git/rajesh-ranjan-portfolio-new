import greetingsStyles from "@/animations/greetings.module.css";

const GreetingsText = () => {
  return (
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
  );
};

export default GreetingsText;
