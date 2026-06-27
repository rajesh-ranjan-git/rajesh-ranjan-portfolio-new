import { getAboutDetails } from "@/helpers/owner.helpers";
import AboutImage from "@/components/about/about.image";
import AboutText from "@/components/about/about.text";

const About = () => {
  const aboutDetails = getAboutDetails();

  return (
    <section id="about">
      <h1 className="after:block lg:after:bottom-12 after:bottom-8 after:absolute relative after:bg-primary pb-8 lg:pb-12 after:rounded-lg after:w-20 after:h-1.5 font-arima">
        About me...
      </h1>

      <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-[minmax(18rem,20rem)_minmax(0,1fr)] lg:pl-12 w-full">
        <AboutImage />

        <AboutText
          title={aboutDetails.title}
          description={aboutDetails.description}
          details={aboutDetails.details}
        />
      </div>
    </section>
  );
};

export default About;
