import Link from "next/link";
import {
  faGithubAlt,
  faStackOverflow,
  faLinkedinIn,
  faInstagram,
  faFacebook,
  faGoogle,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialMediaIcons() {
  return (
    <div className="flex lg:flex-wrap flex-nowrap xl:flex-nowrap justify-center md:justify-start items-center gap-2 rounded-full w-full text-3xl">
      <Link
        href="https://github.com/rajesh-ranjan-git"
        className="flex justify-center items-center bg-[#333] hover:bg-[#040b14] rounded-full w-10 min-w-10 h-10 min-h-10 text-white text-center transition-all ease-in-out cursor-pointer select-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubAlt} size="xs" />
      </Link>

      <Link
        href="mailto:rajeshranjan8271@gmail.com"
        className="flex justify-center items-center bg-[#ea4335] hover:bg-[#040b14] rounded-full w-10 min-w-10 h-10 min-h-10 text-white text-center transition-all ease-in-out cursor-pointer select-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGoogle} size="xs" />
      </Link>

      <Link
        href="https://stackoverflow.com/users/7486676/rajesh-ranjan"
        className="flex justify-center items-center bg-[#f48024] hover:bg-[#040b14] rounded-full w-10 min-w-10 h-10 min-h-10 text-white text-center transition-all ease-in-out cursor-pointer select-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faStackOverflow} size="xs" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/rajesh-ranjan-660b1b13a"
        className="flex justify-center items-center bg-[#0e76a8] hover:bg-[#040b14] rounded-full w-10 min-w-10 h-10 min-h-10 text-white text-center transition-all ease-in-out cursor-pointer select-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="xs" />
      </Link>
      <Link
        href="https://www.facebook.com/rajeshranjan8271/"
        className="flex justify-center items-center bg-[#3b5998] hover:bg-[#040b14] rounded-full w-10 min-w-10 h-10 min-h-10 text-white text-center transition-all ease-in-out cursor-pointer select-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} size="xs" />
      </Link>
      <Link
        href="https://x.com/_rajesh____"
        className="flex justify-center items-center bg-black hover:bg-[#040b14] rounded-full w-10 min-w-10 h-10 min-h-10 text-white text-center transition-all ease-in-out cursor-pointer select-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faXTwitter} size="xs" />
      </Link>
      <Link
        href="https://www.instagram.com/_rajesh____/"
        className="flex justify-center items-center bg-[#e4405f] hover:bg-[#040b14] rounded-full w-10 min-w-10 h-10 min-h-10 text-white text-center transition-all ease-in-out cursor-pointer select-none"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="xs" />
      </Link>
    </div>
  );
}
