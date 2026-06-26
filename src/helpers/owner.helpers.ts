import { ownerConfig } from "@/config/owner.config";
import { socialMedia } from "@/config/social.config";

export const getFullName = () => {
  if (ownerConfig.firstName && ownerConfig.lastName)
    return `${ownerConfig.firstName} ${ownerConfig.lastName}`;

  if (ownerConfig.firstName) return ownerConfig.firstName;

  return "John Doe";
};

export const getSocialLinks = () => {
  let socialLinks = [];

  if (ownerConfig.social.github)
    socialLinks.push({
      id: socialMedia.github.id,
      username: ownerConfig.social.github,
      url: `${socialMedia.github}/${ownerConfig.social.github}/`,
    });

  if (ownerConfig.social.google)
    socialLinks.push({
      id: socialMedia.google.id,
      username: ownerConfig.social.google,
      url: `${socialMedia.google}/${ownerConfig.social.google}/`,
    });

  if (ownerConfig.social.stackOverflow)
    socialLinks.push({
      id: socialMedia.stackOverflow.id,
      username: ownerConfig.social.stackOverflow,
      url: `${socialMedia.stackOverflow}/${ownerConfig.social.stackOverflow}/`,
    });

  if (ownerConfig.social.linkedin)
    socialLinks.push({
      id: socialMedia.linkedin.id,
      username: ownerConfig.social.linkedin,
      url: `${socialMedia.linkedin}/${ownerConfig.social.linkedin}/`,
    });

  if (ownerConfig.social.twitter)
    socialLinks.push({
      id: socialMedia.twitter.id,
      username: ownerConfig.social.twitter,
      url: `${socialMedia.twitter}/${ownerConfig.social.twitter}/`,
    });

  if (ownerConfig.social.youtube)
    socialLinks.push({
      id: socialMedia.youtube.id,
      username: ownerConfig.social.youtube,
      url: `${socialMedia.youtube}/${ownerConfig.social.youtube}/`,
    });

  if (ownerConfig.social.facebook)
    socialLinks.push({
      id: socialMedia.facebook.id,
      username: ownerConfig.social.facebook,
      url: `${socialMedia.facebook}/${ownerConfig.social.facebook}/`,
    });

  if (ownerConfig.social.instagram)
    socialLinks.push({
      id: socialMedia.instagram.id,
      username: ownerConfig.social.instagram,
      url: `${socialMedia.instagram}/${ownerConfig.social.instagram}/`,
    });

  return socialLinks;
};

export const getSocialBadge = () => {
  switch (ownerConfig.socialBadge) {
    case socialMedia.github.id:
      return ownerConfig.social.github ? ownerConfig.social.github : null;
    case socialMedia.google.id:
      return ownerConfig.social.google ? ownerConfig.social.google : null;
    case socialMedia.stackOverflow.id:
      return ownerConfig.social.stackOverflow
        ? ownerConfig.social.stackOverflow
        : null;
    case socialMedia.linkedin.id:
      return ownerConfig.social.linkedin ? ownerConfig.social.linkedin : null;
    case socialMedia.twitter.id:
      return ownerConfig.social.twitter ? ownerConfig.social.twitter : null;
    case socialMedia.facebook.id:
      return ownerConfig.social.facebook ? ownerConfig.social.facebook : null;
    case socialMedia.instagram.id:
      return ownerConfig.social.instagram ? ownerConfig.social.instagram : null;
    default:
      return null;
  }
};

export const getLocation = () => {
  const city = ownerConfig.location.city;
  const state = ownerConfig.location.state;
  const country = ownerConfig.location.country;

  if (city && state && country) return `${city}, ${state}, ${country}`;

  if (city && state) return `${city}, ${state}`;

  if (city && country) return `${city}, ${country}`;

  if (state && country) return `${state}, ${country}`;

  if (city) return city;

  if (state) return state;

  if (country) return country;

  return null;
};

export const getDegree = () => {
  const degree = ownerConfig.degree;
  const stream = ownerConfig.stream;

  if (degree.toLowerCase() === "bachelor of technology")
    return `B.Tech (${stream})`;
};

export const getAboutDetails = () => {
  const designation = ownerConfig.designation;
  const company = ownerConfig.company;
  const organization = ownerConfig.organization;
  const description = ownerConfig.description;
  const location = getLocation();
  const email = ownerConfig.social.google;
  const phone = ownerConfig.phone;
  const degree = getDegree();
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
