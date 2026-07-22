"use client";

import { useEffect, useState } from "react";
import Greetings from "@/sections/greetings";
import About from "@/sections/about";
import Skills from "@/sections/skills";
import Experience from "@/sections/experience";
import Education from "@/sections/education";
import Portfolio from "@/sections/portfolio";
import Certificates from "@/sections/certificates";
import Contact from "@/sections/contact";
import SplashScreen from "@/components/ui/splash/splash.screen";

export default function Home() {
  const [splash, setSplash] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setSplash(false), 2000);
  // }, []);

  if (splash) {
    return <SplashScreen loadingText="Loading..." backgroundColor="#040b14" />;
  }

  return (
    <main className="relative pl-0 md:pl-16 min-h-screen">
      <Greetings />
      <About title="About me..." />
      <Skills title="What My Programming Skills Includes?" />
      <Experience title="Professional journey..." />
      <Education title="Academic details..." />
      <Portfolio title="Recent works..." />
      <Certificates title="Verified training accomplishments..." />
      <Contact
        title="Beam me a message..."
        description="Whether you have a question, any suggestion, or just want to say hi, drop me a message and I'll get back to you!"
      />
    </main>
  );
}
