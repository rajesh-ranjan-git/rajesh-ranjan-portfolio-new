import Link from "next/link";
import { FaPhone, FaShareNodes } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { socialMedia } from "@/config/social.config";
import { getSingleSocialLink } from "@/helpers/owner.helpers";
import SocialMedia from "@/components/social-media/social.media";
import Card from "../ui/card/card";

const ContactSocials = () => {
  const email = getSingleSocialLink(socialMedia.google.id);
  const phone = getSingleSocialLink(socialMedia.phone.id);

  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 w-full h-full">
      <Card
        animateBorder
        className="group flex flex-col justify-center items-center gap-2 md:col-span-2 w-full h-full min-h-48"
      >
        <Card className="px-4 py-4 rounded-full group-hover:scale-110">
          <FaShareNodes size={20} className="-translate-x-0.5" />
        </Card>

        <h4 className="font-bold">Social Profiles</h4>

        <SocialMedia section="contact" />
      </Card>

      <Card
        animateBorder
        className="group flex flex-col justify-center items-center gap-2 w-full h-full min-h-48"
      >
        <Card className="px-4 py-4 rounded-full group-hover:scale-110">
          <MdEmail size={20} />
        </Card>

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
      </Card>

      <Card
        animateBorder
        className="group flex flex-col justify-center items-center gap-2 w-full h-full min-h-48"
      >
        <Card className="px-4 py-4 rounded-full group-hover:scale-110">
          <FaPhone size={20} />
        </Card>

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
      </Card>
    </div>
  );
};

export default ContactSocials;
