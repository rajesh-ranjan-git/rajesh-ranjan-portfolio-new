import PersonalInfoText from "@/components/personal-info/about-text/personalInfoText";
import ProfileImgCircular from "@/components/profile-img/profileImgCircular";

const PersonalInfo = () => {
  return (
    <section className="place-items-center grid grid-cols-1 lg:grid-cols-[2fr_1fr] pr-10 pl-32 w-screen min-h-screen max-h-screen overflow-hidden">
      <PersonalInfoText />
      <ProfileImgCircular />
    </section>
  );
};

export default PersonalInfo;
