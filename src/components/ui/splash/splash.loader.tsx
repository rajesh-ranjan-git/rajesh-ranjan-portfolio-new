"use client";

import { useEffect, useState } from "react";
import splashStyles from "@/animations/splash.module.css";
import { FazerStyleType } from "@/types/types/splash.types";
import { SplashLoaderProps } from "@/types/props/splash.props.types";

export default function SplashLoader({
  loadingText = "Loading...",
}: SplashLoaderProps) {
  const [fazers, setFazers] = useState<FazerStyleType[]>([]);

  useEffect(() => {
    setFazers(
      Array.from({ length: 20 }, () => ({
        "--top": `${Math.random() * 100}%`,
        "--width": `${12 + Math.random() * 20}%`,
        "--duration": `${0.5 + Math.random() * 0.7}s`,
        "--delay": `${-Math.random() * 8}s`,
      })),
    );
  }, []);

  return (
    <div className="top-1/2 left-1/2 absolute w-full h-full -translate-x-1/2 -translate-y-1/2">
      <div
        className={`absolute w-full h-full inset-0 ${splashStyles.splash_fly}`}
      >
        <div className={`${splashStyles.splash_body}`}>
          <span className={`${splashStyles.splash_wing}`}>
            <span />
            <span />
            <span />
            <span />
          </span>
          <div className={splashStyles.splash_base}>
            <span />
            <div className={splashStyles.splash_face} />
          </div>
        </div>
      </div>

      <div className={splashStyles.splash_longfazers}>
        {fazers.map((style, i) => (
          <span key={i} style={style as React.CSSProperties} />
        ))}
      </div>

      <h1
        className={`bottom-[30%] left-1/2 absolute font-semibold text-white whitespace-nowrap -translate-x-1/2 font-alkatra ${splashStyles.splash_loader}`}
      >
        {loadingText}
      </h1>

      <div className="bottom-[20%] left-1/2 absolute w-1/2 md:w-1/4 -translate-x-1/2">
        <span className={splashStyles.splash_progress}></span>
      </div>
    </div>
  );
}
