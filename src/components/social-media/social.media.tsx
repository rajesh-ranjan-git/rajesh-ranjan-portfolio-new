import { socialMedia } from "@/config/social.config";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="z-10 flex flex-wrap justify-center lg:justify-start items-center gap-2 w-full text-white">
      {socialMedia.map((social) => {
        if (!social.url) return;

        const Icon = social.icon;

        return (
          <Link
            key={social.id}
            href={social.url}
            className={`flex justify-center items-center p-1 rounded-full w-10 h-10 transition-all duration-300 ${social.color ? social.color : "text-social-text"} ${social.bgColor ? social.bgColor : "bg-social-bg"} hover:bg-social-hover`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={24} />
          </Link>
        );
      })}
    </div>
  );
};

export default SocialMedia;
