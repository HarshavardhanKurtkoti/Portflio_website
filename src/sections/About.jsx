import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import Hackathon from './Hackathon.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' kurtkoti.harsha@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm Harshavardhan Kurtkoti</p>
              <p className="grid-subtext">
                A passionate MLOps & Full Stack Developer with expertise in building end-to-end solutions. I specialize in:
                <br /><br />
                • Machine Learning & Data Science<br />
                • Full Stack Development<br />
                • DevOps & Cloud Architecture<br />
                • Predictive Analytics
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack & Tools</p>
              <p className="grid-subtext">
                <span className="font-semibold">Development:</span> Python, Java, React, HTML5, CSS3<br/>
                <span className="font-semibold">Version Control:</span> Git, GitHub<br/>
                <span className="font-semibold">Cloud & DevOps:</span> AWS, Docker, GitHub Actions<br/>
                <span className="font-semibold">Data & ML:</span> MongoDB, MySQL, MLflow, DVC<br/>
                <span className="font-semibold">Monitoring:</span> Grafana
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center bg-black-100">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                showAtmosphere={true}
                atmosphereColor="#3a228a"
                atmosphereAltitude={0.25}
                showGraticules={false}
                labelsData={[{ lat: 12.9716, lng: 77.5946, text: 'Bangalore, India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I'm very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Bangalore, India and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" to="contact" />
            </div>
          </div>
        </div>

        <Hackathon />

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">kurtkoti.harsha@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
