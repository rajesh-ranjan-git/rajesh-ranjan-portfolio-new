"use client";

import { useEffect } from "react";

const TitleManager = () => {
  const originalTitle = "Rajesh Ranjan | Full Stack Developer";
  const inactiveTitle = "Come back soon! 👋";

  const originalFavicon = "/favicon-default.ico";
  const awayFavicon = "/favicon-namaste.ico";

  useEffect(() => {
    const handleVisibilityChange = () => {
      let favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement || null;
      
      if (!favicon) {
        favicon = document.createElement('link');
        favicon.rel = 'icon';
        document.head.appendChild(favicon);
      };

      if (document.hidden) {
        document.title = inactiveTitle;
        console.log("debug favicon.href : ", favicon.href)
        favicon.href = awayFavicon;
      } else {
        document.title = originalTitle;
        console.log("debug favicon.href : ", favicon.href)
        favicon.href = originalFavicon;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return null;
};

export default TitleManager;
