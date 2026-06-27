"use client";

import Link from "next/link";
import { socialMediaList } from "@/config/social.config";
import { getSocialLinks } from "@/helpers/owner.helpers";

const SocialMedia = () => {
  const socials = getSocialLinks();

  return (
    <div className="text-fixed-light flex flex-wrap justify-center lg:justify-start items-center gap-2 w-full">
      {socialMediaList.map((social) => {
        const socialLink = socials.find((s) => s?.id === social.id);

        if (!socialLink) return null;

        const href = socialLink.url;
        const Icon = social.icon;

        return (
          <Link
            key={social.id}
            href={href ?? ""}
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
