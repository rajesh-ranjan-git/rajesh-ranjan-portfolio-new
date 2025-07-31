import AboutText from "@/components/about/about-text/aboutText";

const About = () => {
  return (
    <section
      className={`before:block before:top-0 before:right-0 before:bottom-0 before:left-0 before:absolute relative before:inset-0 flex flex-wrap justify-around items-center before:opacity-100 pr-2 md:pr-10 pl-20 md:pl-28 w-screen min-h-screen max-h-screen overflow-hidden`}
    >
      <AboutText />
    </section>
  );
};

export default About;
