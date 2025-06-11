import React from "react";

export type MenuItem = {
  item:
    | "home"
    | "about"
    | "experience"
    | "education"
    | "achievements"
    | "portfolio"
    | "certificates"
    | "contact";
  label:
    | "Home"
    | "About"
    | "Experience"
    | "Education"
    | "Achievements"
    | "Portfolio"
    | "Certificates"
    | "Contact Me";
  icon: React.ReactNode;
};
