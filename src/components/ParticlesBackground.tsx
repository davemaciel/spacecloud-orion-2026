import { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

export function ParticlesBackground() {
  useEffect(() => {
    const particlesConfig = {
      particles: {
        number: {
          value: 5,
          density: {
            enable: true,
            value_area: 100
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.2,
          random: true,
          anim: {
            enable: true,
            speed: 0.05,
            opacity_min: 0,
            sync: false
          }
        },
        size: {
          value: 1.5,
          random: true,
          anim: {
            enable: false
          }
        },
        line_linked: {
          enable: false
        },
        move: {
          enable: true,
          speed: 0.05,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: false },
          onclick: { enable: false },
          resize: true
        }
      },
      retina_detect: false,
      fps_limit: 20
    };

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    script.onload = () => {
      window.particlesJS('particles-js', particlesConfig);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      // Clean up particles.js when component unmounts
      const canvas = document.querySelector('#particles-js canvas');
      if (canvas) {
        canvas.remove();
      }
    };
  }, []);

  return (
    <div
      id="particles-js"
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        height: '100vh',
        transform: 'translate3d(0,0,0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    />
  );
}