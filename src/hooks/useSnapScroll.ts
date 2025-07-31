"use client";

import { useEffect } from "react";

const useSnapScroll = (duration = 300) => {
  useEffect(() => {
    // To scroll only on the main document and not on others like sidebar
    const container = document.querySelector("main");
    if (!container) return;

    // For snapping scroll to sections
    const sections = container.querySelectorAll("section");
    let isScrolling = false;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const scrollToY = (targetY: number) => {
      const startY = container.scrollTop;
      const distance = targetY - startY;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutQuad(progress);

        container.scrollTop = startY + distance * ease;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          isScrolling = false;
        }
      };

      isScrolling = true;
      requestAnimationFrame(animateScroll);
    };

    const snapToSection = (direction: number) => {
      if (isScrolling) return;
      const currentIndex = Math.round(container.scrollTop / window.innerHeight);
      const nextIndex = Math.min(
        Math.max(currentIndex + direction, 0),
        sections.length - 1
      );
      const targetY = sections[nextIndex].offsetTop;
      scrollToY(targetY);
    };

    // Wheel + keyboard
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      snapToSection(e.deltaY > 0 ? 1 : -1);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        snapToSection(1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        snapToSection(-1);
      }
    };

    // Touch
    let startY = 0;
    let endY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;

      if (Math.abs(deltaY) > 50) {
        snapToSection(deltaY > 0 ? 1 : -1);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [duration]);
};

export default useSnapScroll;
