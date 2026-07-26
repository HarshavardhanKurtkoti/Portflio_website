import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { HackerRoom } from '../components/HackerRoom.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div 
        className="w-full mx-auto flex flex-col sm:mt-36 mt-24 c-space gap-4 z-10 pointer-events-none pb-12 drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0) 70%)'
        }}
      >
        <p className="section-kicker text-center drop-shadow-[0_0_10px_rgba(0,0,0,1)]">Full Stack AI & Backend Engineer</p>
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans drop-shadow-[0_0_15px_rgba(0,0,0,1)]">
          Hi, I am Harshavardhan
        </p>
        <h1 className="hero_tag text-gray_gradient drop-shadow-[0_0_20px_rgba(0,0,0,1)]">Reliable systems, intelligent workflows, real impact.</h1>
        <p className="max-w-2xl mx-auto text-center text-white-500 sm:text-lg drop-shadow-[0_0_10px_rgba(0,0,0,1)]">I build AI-powered workflow platforms and production backend infrastructure with Python, FastAPI, React, Redis, and PostgreSQL.</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <ReactLogo position={sizes.reactLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit" onClick={(e) => {
          e.preventDefault();
          const section = document.querySelector('#contact');
          if (section) {
            const targetPosition = section.getBoundingClientRect().top + window.scrollY - 120;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 800;
            let start = null;

            const ease = (t, b, c, d) => {
              t /= d / 2;
              if (t < 1) return (c / 2) * t * t + b;
              t--;
              return (-c / 2) * (t * (t - 2) - 1) + b;
            };

            const step = (timestamp) => {
              if (!start) start = timestamp;
              const progress = timestamp - start;
              window.scrollTo(0, ease(progress, startPosition, distance, duration));
              if (progress < duration) window.requestAnimationFrame(step);
            };
            window.requestAnimationFrame(step);
          }
        }}>
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
