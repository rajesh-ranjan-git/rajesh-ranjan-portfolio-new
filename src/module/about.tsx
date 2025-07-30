import AboutText from "@/components/about/about-text/aboutText";
import ProfileImgCircular from "@/components/profile-img/profileImgCircular";

const About = () => {
  return (
    <section className="flex justify-around items-center pr-10 pl-32 w-screen min-h-screen max-h-screen overflow-hidden">
      <ProfileImgCircular />
      <AboutText />
    </section>
  );
};

export default About;
