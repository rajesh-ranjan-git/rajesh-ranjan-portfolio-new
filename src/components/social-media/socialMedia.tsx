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

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 w-full">
      <Link
        href="https://github.com/rajesh-ranjan-git"
        className="flex justify-center items-center bg-[#333] hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithubAlt} size="xl" color="#fff" />
      </Link>

      <Link
        href="mailto:rajeshranjan8271@gmail.com"
        className="flex justify-center items-center bg-[#ea4335] hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGoogle} size="xl" color="#fff" />
      </Link>

      <Link
        href="https://stackoverflow.com/users/7486676/rajesh-ranjan"
        className="flex justify-center items-center bg-[#f48024] hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faStackOverflow} size="xl" color="#fff" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/rajesh-ranjan-660b1b13a"
        className="flex justify-center items-center bg-[#0e76a8] hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="xl" color="#fff" />
      </Link>
      <Link
        href="https://www.facebook.com/rajeshranjan8271/"
        className="flex justify-center items-center bg-[#3b5998] hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} size="xl" color="#fff" />
      </Link>
      <Link
        href="https://x.com/_rajesh____"
        className="flex justify-center items-center bg-[#000] hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faXTwitter} size="xl" color="#fff" />
      </Link>
      <Link
        href="https://www.instagram.com/_rajesh____/"
        className="flex justify-center items-center bg-[#e4405f] hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="xl" color="#fff" />
      </Link>
    </div>
  );
};

export default SocialMedia;
