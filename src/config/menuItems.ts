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

export const menuItems = [
  {
    item: "home",
    name: "Home",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    item: "about",
    name: "About",
    icon: <FontAwesomeIcon icon={faUserAstronaut} />,
  },
  {
    item: "experience",
    name: "Experience",
    icon: <FontAwesomeIcon icon={faBriefcase} />,
  },
  {
    item: "education",
    name: "Education",
    icon: <FontAwesomeIcon icon={faBookOpenReader} />,
  },
  {
    item: "achievements",
    name: "Achievements",
    icon: <FontAwesomeIcon icon={faTrophy} />,
  },
  {
    item: "portfolio",
    name: "Portfolio",
    icon: <FontAwesomeIcon icon={faCubes} />,
  },
  {
    item: "certificates",
    name: "Certificates",
    icon: <FontAwesomeIcon icon={faCertificate} />,
  },
  {
    item: "contact",
    name: "contact",
    icon: <FontAwesomeIcon icon={faIdCard} />,
  },
];