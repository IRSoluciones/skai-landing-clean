import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine, Container } from "tsparticles-engine";

export default function ParticlesBg() {
  const init = useCallback(async (engine: Engine) => {
    // default engine is fine for this simple preset
  }, []);

  const loaded = useCallback(async (_container?: Container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none absolute inset-0 z-0"
      init={init}
      loaded={loaded}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 30, density: { enable: true, area: 800 } },
          color: { value: ["#1B1464", "#DB495E"] },
          opacity: { value: 0.3 },
          size: { value: { min: 2, max: 4 } },
          move: { enable: true, speed: 1, direction: "none", outModes: { default: "out" } },
          links: { enable: true, color: "#DB495E", opacity: 0.25, distance: 140 },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" }, resize: true },
          modes: { repulse: { distance: 80, duration: 0.4 } },
        },
        detectRetina: true,
      }}
    />
  );
}


