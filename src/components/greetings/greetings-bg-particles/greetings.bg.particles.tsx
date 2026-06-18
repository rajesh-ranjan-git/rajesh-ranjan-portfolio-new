"use client";

import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const particlesInit = async (engine: Engine): Promise<void> => {
  await loadSlim(engine);
};

const GreetingsBgParticles = () => {
  const options = useMemo<ISourceOptions>(
    () => ({
      preset: "snow",
      background: {
        color: "transparent",
      },
      fullScreen: {
        enable: true,
      },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        color: {
          value: "#ffffff",
        },
        opacity: {
          value: 0.2,
        },
        shape: {
          type: ["circle", "star", "edge"],
        },
        size: {
          value: 10,
        },
        wobble: {
          enable: true,
          distance: 20,
          speed: 10,
        },
        zIndex: {
          value: {
            min: 0,
            max: 100,
          },
        },
        number: {
          density: {
            enable: true,
            value: 800,
          },
          value: 90,
        },
        move: {
          enable: true,
          outModes: {
            default: "out",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: false,
            },
          },
          modes: {
            grab: {
              distance: 400,
              links: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 0.8,
              speed: 3,
            },
            repulse: {
              distance: 200,
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
          },
        },
      },
    }),
    [],
  );

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        className="z-[-1] absolute"
        options={options}
      />
    </ParticlesProvider>
  );
};

export default GreetingsBgParticles;
