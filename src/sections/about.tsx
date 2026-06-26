import { getAboutDetails } from "@/helpers/owner.helpers";
import AboutImage from "@/components/about/about.image";
import AboutText from "@/components/about/about.text";

const About = () => {
  const aboutDetails = getAboutDetails();

  return (
    <section
      id="about"
      className="z-10 items-center gap-12 md:gap-24 grid grid-cols-1 lg:grid-cols-[minmax(18rem,20rem)_minmax(0,1fr)] px-6 sm:px-10 lg:px-20 xl:px-28 py-20 w-full min-h-screen"
    >
      <AboutImage />

      <AboutText
        title={aboutDetails.title}
        description={aboutDetails.description}
        details={aboutDetails.details}
      />
    </section>
  );
};

export default About;
