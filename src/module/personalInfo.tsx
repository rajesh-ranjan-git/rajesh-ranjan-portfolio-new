import PersonalInfoText from "@/components/personal-info/about-text/personalInfoText";
import ProfileImgCircular from "@/components/profile-img/profileImgCircular";

const PersonalInfo = () => {
  return (
    <section
      className={`flex flex-wrap justify-around items-center pr-2 md:pr-10 pl-20 md:pl-28 w-screen min-h-screen max-h-screen overflow-hidden`}
    >
      <ProfileImgCircular />
      <PersonalInfoText />
    </section>
  );
};

export default PersonalInfo;
