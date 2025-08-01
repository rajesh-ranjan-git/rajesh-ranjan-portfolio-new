import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PersonalInfoText = () => {
  return (
    <div className="flex lg:justify-center lg:items-center lg:p-10 py-2 w-full lg:w-[70%]">
      <div className="flex flex-col gap-2 lg:gap-6">
        <h3 className="text-shadow-2xs font-semibold text-[#699ee1] text-xl md:text-3xl">
          <span className="text-nowrap">Full Stack Developer</span> |{" "}
          <span className="text-nowrap">Business Today Technology</span> |{" "}
          <span className="text-nowrap">India Today Group</span>
        </h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faAngleRight} />{" "}
            <strong>Organization:</strong> India Today Group
          </li>
          <li>
            <FontAwesomeIcon icon={faAngleRight} />{" "}
            <strong>Designation:</strong> Full Stack Developer
          </li>
          <li>
            <FontAwesomeIcon icon={faAngleRight} /> <strong>Birthday:</strong>{" "}
            18
            <sup>th</sup> January, 1997
          </li>
          <li>
            <FontAwesomeIcon icon={faAngleRight} /> <strong>Phone:</strong>{" "}
            +91-9999-340-771
          </li>
          <li>
            <FontAwesomeIcon icon={faAngleRight} /> <strong>Degree:</strong>{" "}
            B.Tech{" "}
            <span className="text-nowrap">
              (Computer Science & Engineering)
            </span>
          </li>
          <li>
            <FontAwesomeIcon icon={faAngleRight} /> <strong>Email:</strong>{" "}
            rajeshranjan8271@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfoText;
