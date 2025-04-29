import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import { memo } from "react";


export const Background = memo(({children}) => {
  const [init, setInit] = useState(false);

 
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: "#000",
      },
      detectRetina: false,
      fpsLimit: 30,
      interactivity: {
        detectsOn: "canvas",
        events: {
          resize: true,
        },
      },
      particles: {
        color: {
          value: "#fff",
        },
        number: {
          density: {
            enable: true,
            area: 1080,
          },
          limit: 0,
          value: 400,
        },
        opacity: {
          animation: {
            enable: true,
            minimumValue: 0.05,
            speed: 0.25,
            sync: false,
          },
          random: {
            enable: true,
            minimumValue: 0.05,
          },
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          random: {
            enable: true,
            minimumValue: 0.5,
          },
          value: 1,
        },
        move: {
          collisions: true,
          enable: true,
          speed: 1,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "bounce",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
    }),
    [],
  );

  if (init) {
    return (
   
        <div className='absolute inset-0 z-[-1] h-full w-full'>
        <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}/>
        </div>

    );
  }
  return <></>;
})
