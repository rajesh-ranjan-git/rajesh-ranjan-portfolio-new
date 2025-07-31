"use client";

import { useEffect } from "react";

const useSnapScroll = (duration = 300) => {
  useEffect(() => {
    // To scroll only on the main document and not on others like sidebar
    const scrollContainer = document.querySelector("main");
    if (!scrollContainer) return;

    // For snapping scroll to sections
    const sections = scrollContainer.querySelectorAll("section");
    let isScrolling = false;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentIndex = Math.round(
        scrollContainer.scrollTop / window.innerHeight
      );
      const nextIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        sections.length - 1
      );
      const targetY = sections[nextIndex].offsetTop;

      scrollToY(targetY, duration);
    };

    const scrollToY = (targetY: number, duration: number) => {
      const startY = scrollContainer.scrollTop;
      const distance = targetY - startY;
      const startTime = performance.now();

      isScrolling = true;

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutQuad(progress);

        scrollContainer.scrollTop = startY + distance * ease;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          isScrolling = false;
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
    };
  }, [duration]);
};

export default useSnapScroll;
