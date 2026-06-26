"use client";

import Link from "next/link";
import { socialMediaList } from "@/config/social.config";
import { getSocialLinks } from "@/helpers/owner.helpers";

const SocialMedia = () => {
  const socialLinks = getSocialLinks();

  return (
    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 w-full text-white">
      {socialMediaList.map((social) => {
        const socialLinkIndex = socialLinks.findIndex(
          (s) => s.id === social.id,
        );

        if (!socialLinkIndex) return;

        const Icon = social.icon;

        return (
          <Link
            key={social.id}
            href={socialLinks[socialLinkIndex].url}
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
