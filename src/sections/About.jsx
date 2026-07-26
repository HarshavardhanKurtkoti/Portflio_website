import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import Hackathon from './Hackathon.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('kurtkoti.harsha@gmail.com');
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <section className="c-space my-24" id="about">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="col-span-1">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="Illustration of Harshavardhan" className="w-full h-44 object-contain" />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Harshavardhan Kurtkoti</p>
              <p className="grid-subtext">
                Full Stack AI &amp; Backend Engineer building resilient automation platforms, AI workflow engines, and polished product experiences.
              </p>
              <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-blue-200">
                {['AI workflows', 'Backend systems', 'Distributed automation', 'Product delivery'].map((item) => (
                  <span className="rounded-lg border border-blue-400/20 bg-blue-400/[0.06] px-2.5 py-2" key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="Technology workflow illustration" className="w-full h-44 object-contain" />
            <div>
              <p className="grid-headtext">Core toolkit</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-white-600">
                {['FastAPI & SQLAlchemy', 'React & Next.js', 'LangChain & LLMs', 'Redis & PostgreSQL', 'Docker & CI/CD', 'AWS & observability'].map((tool) => (
                  <span className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-2" key={tool}>{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <div className="grid-container">
            <div className="rounded-2xl w-full h-52 flex justify-center items-center bg-black-100">
              <Globe
                height={208}
                width={208}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                showAtmosphere
                atmosphereColor="#3a228a"
                atmosphereAltitude={0.25}
                labelsData={[{ lat: 12.9716, lng: 77.5946, text: 'Bangalore, India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Open to building globally</p>
              <p className="grid-subtext">Based in Bangalore, India — available for remote collaboration across time zones.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-5" to="contact" />
            </div>
          </div>
        </div>

        <Hackathon />

        <div className="xl:col-span-1">
          <div className="grid-container justify-between">
            <img src="assets/grid4.png" alt="Contact illustration" className="w-full h-28 object-cover sm:object-top" />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Have an interesting system to build?</p>
              <button type="button" className="copy-container w-full" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="Copy email" />
                <span className="text-base font-medium text-gray_gradient">kurtkoti.harsha@gmail.com</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
