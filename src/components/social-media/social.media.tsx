import Link from "next/link";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedinIn,
  FaStackOverflow,
  FaXTwitter,
} from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="z-10 flex flex-wrap items-center gap-2 w-full text-white">
      <Link
        href="https://github.com/rajesh-ranjan-git"
        className="flex justify-center items-center bg-[#333] hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </Link>

      <Link
        href="mailto:rajeshranjan8271@gmail.com"
        className="flex justify-center items-center bg-[#ea4335] hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGoogle size={24} />
      </Link>

      <Link
        href="https://stackoverflow.com/users/7486676/rajesh-ranjan"
        className="flex justify-center items-center bg-[#f48024] hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaStackOverflow size={24} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/rajesh-ranjan-660b1b13a"
        className="flex justify-center items-center bg-[#0e76a8] hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn size={24} />
      </Link>
      <Link
        href="https://www.facebook.com/rajeshranjan8271/"
        className="flex justify-center items-center bg-[#3b5998] hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook size={24} />
      </Link>
      <Link
        href="https://x.com/_rajesh____"
        className="flex justify-center items-center bg-black hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter size={24} />
      </Link>
      <Link
        href="https://www.instagram.com/_rajesh____/"
        className="flex justify-center items-center bg-[#e4405f] hover:bg-[#040b14] p-1 rounded-full w-10 h-10 transition-all ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </Link>
    </div>
  );
};

export default SocialMedia;
