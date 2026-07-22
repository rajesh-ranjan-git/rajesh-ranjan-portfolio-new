"use client";

import { useEffect, useState } from "react";
import { SplashGateProps } from "@/types/props/splash.props.types";
import SplashScreen from "@/components/ui/splash/splash.screen";

const SplashGate = ({
  children,
  loadingText = "Loading...",
  endingText = "Welcome",
  backgroundColor = "#040b14",
  className = "",
  duration = 2000,
}: SplashGateProps) => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setSplash(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (splash) {
    return (
      <SplashScreen
        loadingText={loadingText}
        endingText={endingText}
        backgroundColor={backgroundColor}
        className={className}
        duration={duration}
      />
    );
  }

  return <>{children}</>;
};

export default SplashGate;
