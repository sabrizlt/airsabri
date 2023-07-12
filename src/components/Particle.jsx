import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import immagine from "../IMAGE/aereoparticles.png";

const Particle = () => {
  const particlesInit = async (main) => {
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
    className="particles"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#fff",
          },
          shape: {
            type: "image",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: immagine,
              width: 200,
              height: 100,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 0.161991851809854,
              opacity_min: 0.0161991851809854,
              sync: false,
            },
          },
          size: {
            value: 35,
            random: true,
            anim: {
              enable: false,
              speed: 12.14938888573905,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#0033cc",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "top-right",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particle;