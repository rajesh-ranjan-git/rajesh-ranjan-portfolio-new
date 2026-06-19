import ProfileImage from "@/components/about/profile.image";
import ProfileDetails from "@/components/about/profile.details";

const About = () => {
  return (
    <section className="items-center gap-12 md:gap-24 grid grid-cols-1 md:grid-cols-[minmax(18rem,20rem)_minmax(0,1fr)] px-6 sm:px-10 lg:px-20 xl:px-28 py-20 w-full min-h-screen">
      <ProfileImage />
      <ProfileDetails
        title="Full Stack Developer | Business Today Technology"
        description="Experienced Full Stack Developer with expertise in React, Next.js, Node.js, TypeScript, and cloud-based application development."
        details={[
          {
            label: "Organization",
            value: "India Today Group",
          },
          {
            label: "Experience",
            value: "7+ Years",
          },
          {
            label: "Location",
            value: "Noida, Uttar Pradesh, India",
          },
          {
            label: "Email",
            value: "rajeshranjan8271@gmail.com",
          },
          {
            label: "Phone",
            value: "+91-9999340771",
          },
          {
            label: "Degree",
            value: "B.Tech (Computer Science & Engineering)",
          },
        ]}
      />
    </section>
  );
};

export default About;
