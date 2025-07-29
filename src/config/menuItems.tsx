import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpenReader,
  faBriefcase,
  faCertificate,
  faCubes,
  faHouse,
  faIdCard,
  faTrophy,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "@/types/types";

export const menuItems: MenuItem[] = [
  {
    item: "home",
    label: "Home",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    item: "about",
    label: "About",
    icon: <FontAwesomeIcon icon={faUserAstronaut} />,
  },
  {
    item: "experience",
    label: "Experience",
    icon: <FontAwesomeIcon icon={faBriefcase} />,
  },
  {
    item: "education",
    label: "Education",
    icon: <FontAwesomeIcon icon={faBookOpenReader} />,
  },
  {
    item: "achievements",
    label: "Achievements",
    icon: <FontAwesomeIcon icon={faTrophy} />,
  },
  {
    item: "portfolio",
    label: "Portfolio",
    icon: <FontAwesomeIcon icon={faCubes} />,
  },
  {
    item: "certificates",
    label: "Certificates",
    icon: <FontAwesomeIcon icon={faCertificate} />,
  },
  {
    item: "contact",
    label: "Contact Me",
    icon: <FontAwesomeIcon icon={faIdCard} />,
  },
];
