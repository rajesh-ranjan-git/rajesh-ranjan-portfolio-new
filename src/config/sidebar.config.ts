import { MenuItemType } from "@/types/types/common.types";
import { FaHouse } from "react-icons/fa6";
import { FaUserAstronaut } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { FaCubes } from "react-icons/fa6";
import { FaCertificate } from "react-icons/fa6";
import { FaIdCard } from "react-icons/fa6";

export const menuItems: MenuItemType[] = [
  {
    item: "home",
    label: "Home",
    icon: FaHouse,
  },
  {
    item: "about",
    label: "About",
    icon: FaUserAstronaut,
  },
  {
    item: "experience",
    label: "Experience",
    icon: FaBriefcase,
  },
  {
    item: "education",
    label: "Education",
    icon: FaBookOpenReader,
  },
  {
    item: "achievements",
    label: "Achievements",
    icon: FaTrophy,
  },
  {
    item: "portfolio",
    label: "Portfolio",
    icon: FaCubes,
  },
  {
    item: "certificates",
    label: "Certificates",
    icon: FaCertificate,
  },
  {
    item: "contact",
    label: "Contact Me",
    icon: FaIdCard,
  },
];
