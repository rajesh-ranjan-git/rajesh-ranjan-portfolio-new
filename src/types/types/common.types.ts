import { IconType } from "react-icons";
import { storageConfig, themeConfig } from "@/config/common.config";

export type StaticImagesConfigType = Record<
  string,
  {
    src: string;
    alt: string;
    width: number;
    height: number;
    loading: "eager" | "lazy";
  }
>;

export type ThemeType = keyof typeof themeConfig;

export type StorageType = keyof typeof storageConfig;

export type StoredDataType<T> = {
  data: T;
  expiresAt?: number;
};

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
  icon: IconType;
};
