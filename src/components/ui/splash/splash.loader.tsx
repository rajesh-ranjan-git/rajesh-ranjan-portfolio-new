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
    <div className="w-full h-full">
      <div
        className={`absolute w-full h-full inset-0 ${splashStyles.splash_fly}`}
      >
        <div
          className={`absolute top-1/2 left-1/2 ${splashStyles.splash_body}`}
        >
          <span className={`${splashStyles.splash_wing}`}>
            <span className="absolute bg-fixed-light w-7.5 h-px" />
            <span className="absolute bg-fixed-light w-7.5 h-px" />
            <span className="absolute bg-fixed-light w-7.5 h-px" />
            <span className="absolute bg-fixed-light w-7.5 h-px" />
          </span>
          <div className={`absolute w-0 h-0 ${splashStyles.splash_base}`}>
            <span className="absolute before:absolute after:absolute before:bg-fixed-light before:rounded-full w-0 before:w-6 after:w-0 h-0 before:h-6 after:h-0" />
            <div
              className={`absolute w-5 h-3 bg-fixed-light after:absolute after:w-3 after:h-3 after:bg-fixed-light ${splashStyles.splash_face}`}
            />
          </div>
        </div>
      </div>

      <div className={splashStyles.splash_longfazers}>
        {fazers.map((style, i) => (
          <span
            key={i}
            className="absolute bg-fixed-light/60"
            style={style as React.CSSProperties}
          />
        ))}
      </div>

      <h1
        className={`bottom-[30%] left-1/2 absolute font-semibold text-white whitespace-nowrap -translate-x-1/2 font-alkatra inline-block ${splashStyles.splash_loader}`}
      >
        {loadingText}
      </h1>

      <div className="bottom-[20%] left-1/2 absolute w-1/2 md:w-1/4 -translate-x-1/2">
        <span
          className={`inline-block relative w-0 after:absolute before:absolute before:opacity-0 after:opacity-0 ${splashStyles.splash_progress}`}
        ></span>
      </div>
    </div>
  );
}
