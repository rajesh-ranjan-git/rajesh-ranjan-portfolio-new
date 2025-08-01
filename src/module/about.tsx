import AboutText from "@/components/about/about-text/aboutText";

const About = () => {
  return (
    <section
      className={`flex flex-wrap p-2 pt-10 md:p-10 pl-20 md:pl-28 w-screen min-h-screen max-h-screen overflow-hidden`}
    >
      <AboutText />
    </section>
  );
};

export default About;
