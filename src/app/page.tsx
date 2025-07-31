"use client";

import { useRef } from "react";
import Sidebar from "@/components/sidebar/sidebar";
import About from "@/module/about";
import Greetings from "@/module/greetings";
import PersonalInfo from "@/module/personalInfo";
import SnapScrollManager from "@/components/snap-scroll-manager/snapScrollManager";

export default function Home() {
  const scrollRef = useRef<HTMLElement>(null);

  return (
    <main ref={scrollRef} className="h-screen overflow-x-hidden">
      <Sidebar />

      <SnapScrollManager scrollRef={scrollRef} />

      <Greetings />
      <About />
      <PersonalInfo />
    </main>
  );
}
