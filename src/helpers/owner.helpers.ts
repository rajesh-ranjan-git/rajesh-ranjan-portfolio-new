import { ownerConfig } from "@/config/owner.config";
import { socialMedia } from "@/config/social.config";

export const getFullName = () => {
  if (ownerConfig.firstName && ownerConfig.lastName)
    return `${ownerConfig.firstName} ${ownerConfig.lastName}`;

  if (ownerConfig.firstName) return ownerConfig.firstName;

  return "John Doe";
};

export const getSingleSocialLink = (id: string) => {
  switch (id) {
    case socialMedia.phone.id:
      return {
        id: socialMedia.phone.id,
        userName: ownerConfig.phone,
        url: `${socialMedia.phone.urlPrefix}/${ownerConfig.phone}/`,
      };

    case socialMedia.github.id:
      return {
        id: socialMedia.github.id,
        userName: ownerConfig.social.github,
        url: `${socialMedia.github.urlPrefix}/${ownerConfig.social.github}/`,
      };

    case socialMedia.google.id:
      return {
        id: socialMedia.google.id,
        userName: ownerConfig.social.google,
        url: `${socialMedia.google.urlPrefix}${ownerConfig.social.google}`,
      };

    case socialMedia.stackOverflow.id:
      return {
        id: socialMedia.stackOverflow.id,
        userName: ownerConfig.social.stackOverflow,
        url: `${socialMedia.stackOverflow.urlPrefix}/${ownerConfig.social.stackOverflow}/`,
      };

    case socialMedia.linkedin.id:
      return {
        id: socialMedia.linkedin.id,
        userName: ownerConfig.social.linkedin,
        url: `${socialMedia.linkedin.urlPrefix}/${ownerConfig.social.linkedin}/`,
      };

    case socialMedia.twitter.id:
      return {
        id: socialMedia.twitter.id,
        userName: ownerConfig.social.twitter,
        url: `${socialMedia.twitter.urlPrefix}/${ownerConfig.social.twitter}/`,
      };

    case socialMedia.youtube.id:
      return {
        id: socialMedia.youtube.id,
        userName: ownerConfig.social.youtube,
        url: `${socialMedia.youtube.urlPrefix}${ownerConfig.social.youtube}/`,
      };

    case socialMedia.facebook.id:
      return {
        id: socialMedia.facebook.id,
        userName: ownerConfig.social.facebook,
        url: `${socialMedia.facebook.urlPrefix}/${ownerConfig.social.facebook}/`,
      };

    case socialMedia.instagram.id:
      return {
        id: socialMedia.instagram.id,
        userName: ownerConfig.social.instagram,
        url: `${socialMedia.instagram.urlPrefix}/${ownerConfig.social.instagram}/`,
      };

    default:
      return null;
  }
};

export const getSocialLinks = () => {
  let socialLinks = [];

  if (ownerConfig.social.github)
    socialLinks.push(getSingleSocialLink(socialMedia.github.id));

  if (ownerConfig.social.google)
    socialLinks.push(getSingleSocialLink(socialMedia.google.id));

  if (ownerConfig.social.stackOverflow)
    socialLinks.push(getSingleSocialLink(socialMedia.stackOverflow.id));

  if (ownerConfig.social.linkedin)
    socialLinks.push(getSingleSocialLink(socialMedia.linkedin.id));

  if (ownerConfig.social.twitter)
    socialLinks.push(getSingleSocialLink(socialMedia.twitter.id));

  if (ownerConfig.social.youtube)
    socialLinks.push(getSingleSocialLink(socialMedia.youtube.id));

  if (ownerConfig.social.facebook)
    socialLinks.push(getSingleSocialLink(socialMedia.facebook.id));

  if (ownerConfig.social.instagram)
    socialLinks.push(getSingleSocialLink(socialMedia.instagram.id));

  return socialLinks;
};

export const getLocation = (location?: {
  city?: string;
  state?: string;
  country?: string;
}) => {
  const city =
    location && location.city ? location.city : ownerConfig.location.city;
  const state =
    location && location.state ? location.state : ownerConfig.location.state;
  const country =
    location && location.country
      ? location.country
      : ownerConfig.location.country;

  if (city && state && country) return `${city}, ${state}, ${country}`;

  if (city && state) return `${city}, ${state}`;

  if (city && country) return `${city}, ${country}`;

  if (state && country) return `${state}, ${country}`;

  if (city) return city;

  if (state) return state;

  if (country) return country;

  return null;
};

export const getDegree = (degree?: string, stream?: string) => {
  if (degree?.toLowerCase() === "bachelor of technology")
    return `B.Tech (${stream})`;
  else return `${degree}, ${stream}`;
};

export const getAboutDetails = () => {
  const designation = ownerConfig.designation;
  const company = ownerConfig.company;
  const organization = ownerConfig.organization;
  const description = ownerConfig.description;
  const location = getLocation();
  const email = ownerConfig.social.google;
  const phone = ownerConfig.phone;
  const degree = getDegree(
    ownerConfig.education.college.degree,
    ownerConfig.education.college.stream,
  );
  const details = [];

  if (organization)
    details.push({
      id: "organization",
      label: "Organization",
      value: organization,
    });

  if (location)
    details.push({ id: "location", label: "Location", value: location });

  if (email) details.push({ id: "email", label: "Email", value: email });

  if (phone) details.push({ id: "phone", label: "Phone", value: phone });

  if (degree) details.push({ id: "degree", label: "Degree", value: degree });

  return {
    title:
      designation && company
        ? `${designation} | ${company}`
        : designation && organization
          ? `${designation} | ${organization}`
          : designation
            ? designation
            : null,
    description: description ? description : null,
    details: details,
  };
};

export const getEducationTimeLine = (
  startYear?: number,
  endYear?: number,
  pursuing?: boolean,
) => {
  if (startYear && endYear) return `${startYear} - ${endYear}`;

  if (startYear && pursuing) return `${startYear} - present}`;

  if (startYear) return startYear;

  if (endYear) return endYear;

  return null;
};

export const getEducationLocation = (
  name?: string,
  location?: { city?: string; state?: string; country?: string },
) => {
  const educationLocation = getLocation(location);

  if (name && educationLocation) return `${name}, ${educationLocation}`;

  if (name) return name;

  return null;
};

export const getExperienceTimeLine = (
  startMonth?: string,
  startYear?: number,
  endMonth?: string,
  endYear?: number,
  pursuing?: boolean,
): string | null => {
  const start = startYear
    ? `${startMonth ? `${startMonth} ` : ""}${startYear}`
    : null;

  const end = pursuing
    ? "Present"
    : endYear
      ? `${endMonth ? `${endMonth} ` : ""}${endYear}`
      : null;

  if (start && end) return `${start} - ${end}`;

  if (start) return start;

  if (end) return end;

  return null;
};
