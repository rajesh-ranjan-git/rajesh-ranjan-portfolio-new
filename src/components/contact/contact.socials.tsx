import Link from "next/link";
import { FaPhone, FaShareNodes } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { socialMedia } from "@/config/social.config";
import { getSingleSocialLink } from "@/helpers/owner.helpers";
import SocialMedia from "@/components/social-media/social.media";

const ContactSocials = () => {
  const email = getSingleSocialLink(socialMedia.google.id);
  const phone = getSingleSocialLink(socialMedia.phone.id);

  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 w-full h-full">
      <div className="group text-fixed-dark flex flex-col justify-center items-center gap-2 md:col-span-2 bg-fixed-light shadow-lg p-6 rounded-xl w-full h-full min-h-48">
        <div className="flex justify-center items-center group-hover:bg-social-hover bg-fixed-secondary shadow-lg p-2 rounded-full w-12 h-12 text-social-text transition-all duration-300">
          <FaShareNodes size={20} className="-translate-x-0.5" />
        </div>

        <h4 className="font-bold">Social Profiles</h4>

        <SocialMedia section="contact" />
      </div>

      <div className="group text-fixed-dark flex flex-col justify-center items-center gap-2 bg-fixed-light shadow-lg p-6 rounded-xl min-h-48">
        <div className="flex justify-center items-center group-hover:bg-social-hover bg-fixed-secondary shadow-lg p-2 rounded-full w-12 h-12 text-social-text transition-all duration-300">
          <MdEmail size={20} />
        </div>

        <h5 className="font-bold">Email Me</h5>

        {email ? (
          <Link
            href={email?.url}
            className="transition-colors duration-300 hover:text-accent-blue"
          >
            {email?.userName}
          </Link>
        ) : (
          <p>Your email goes here...</p>
        )}
      </div>

      <div className="group text-fixed-dark flex flex-col justify-center items-center gap-2 bg-fixed-light shadow-lg p-6 rounded-xl min-h-48">
        <div className="flex justify-center items-center group-hover:bg-social-hover bg-fixed-secondary shadow-lg p-2 rounded-full w-12 h-12 text-social-text transition-all duration-300">
          <FaPhone size={20} />
        </div>

        <h5 className="font-bold">Call Me</h5>

        {phone ? (
          <Link
            href={phone?.url}
            className="transition-colors duration-300 hover:text-accent-blue"
          >
            {phone?.userName}
          </Link>
        ) : (
          <p>Your phone goes here...</p>
        )}
      </div>
    </div>
  );
};

export default ContactSocials;
