import AboutText from "@/components/about/about-text/aboutText";
import ProfileImgCircular from "@/components/profile-img/profileImgCircular";

const About = () => {
  return (
    <section className="place-items-center grid grid-cols-1 lg:grid-cols-[1fr_2fr] pr-10 pl-32 w-screen min-h-screen max-h-screen overflow-hidden">
      <ProfileImgCircular />
      <AboutText />
    </section>
  );
};

export default About;
