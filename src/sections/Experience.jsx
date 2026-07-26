import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants/index.js';

const WorkExperience = () => {
  const [animationName, setAnimationName] = useState('idle');

  return (
    <section className="c-space my-20" id="work">
      <div className="w-full text-white-600">
        <p className="head-text">My Work Experience</p>

        <div className="work-container">
          <div className="work-canvas relative min-h-[420px] overflow-hidden">
            <div className="absolute inset-x-0 top-0 z-10 p-6 pointer-events-none bg-gradient-to-b from-[#11131b] via-[#11131b]/70 to-transparent">
              <p className="section-kicker">Interactive timeline</p>
              <p className="text-sm text-white-500 mt-2">Hover an experience to bring the developer to life.</p>
            </div>
            <Canvas camera={{ position: [0, 0.25, 10], fov: 38 }}>
              <ambientLight intensity={2.4} />
              <directionalLight position={[4, 7, 6]} intensity={2.2} />
              <pointLight position={[-4, 2, 3]} color="#60a5fa" intensity={12} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position={[-0.2, -3.2, 0]} scale={2.7} animationName={animationName} />
              </Suspense>
              <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.7} maxPolarAngle={Math.PI / 2.1} />
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5 max-h-[500px] overflow-y-auto custom-scrollbar" onPointerLeave={() => setAnimationName('idle')}>
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onPointerEnter={() => setAnimationName(item.animation.toLowerCase())}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full object-contain" src={item.icon} alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
