"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import useSnapScroll from "@/hooks/useSnapScroll";

export default function SnapScrollManager() {
  // Hook for managing smooth scroll
  useSnapScroll(500);

  const pathname = usePathname();

  useEffect(() => {
    const main = document.querySelector("main");
    if (main) {
      main.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return null;
}
