"use client";

import { useEffect, useState } from "react";
import { UseSectionNavigationProps } from "@/types/props/hooks.props.types";

export const useSectionNavigation = ({
  sectionIds,
  rootMargin = "-30% 0px -60% 0px",
  threshold = 0,
}: UseSectionNavigationProps) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds, rootMargin, threshold]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (!element) return;

    window.history.replaceState(null, "", `#${sectionId}`);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return {
    activeSection,
    scrollToSection,
  };
};
