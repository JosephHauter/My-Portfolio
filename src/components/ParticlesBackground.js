import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
      await loadFull(main);
    };
  
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: true },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ccc",  // Light gray color
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 3,
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ccc",  // Light gray color
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
          retina_detect: true,
        }}
      />
    );
  };
  

export default ParticlesBackground;
