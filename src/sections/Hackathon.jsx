import React, { useState, useEffect } from 'react';

const Hackathon = () => {
  const images = [
    { src: '/assets/hackathon1.1.jpeg', text1: 'Super proud to announce our top 4 finish in the analyticaX, National level AIML hackathon at IIT Indore! It was an incredible journey, and were thrilled to have made our mark among the best. Excited to continue driving innovation in AI and machine learning!', text2:'#AnalyticaX #AIMLHackathon #IITIndore #fluxes2024' },
    { src: '/assets/hackathon1.2.jpeg', text1: 'Super proud to announce our top 4 finish in the analyticaX, National level AIML hackathon at IIT Indore! It was an incredible journey, and were thrilled to have made our mark among the best. Excited to continue driving innovation in AI and machine learning!', text2:'#AnalyticaX #AIMLHackathon #IITIndore #fluxes2024' },
    { src: '/assets/hackathon3.jpeg', text1: 'Thrilled to announce that as the team leader and developer, my team and I won 1st place at Codeathon, hosted by Presidency University and organized by IEEE! It was an amazing experience leading such a talented group and bringing our project to life. Excited for future challenges! 🏆💻', text2:'#HackathonWinner #TeamLeader #Codeathon #IEEE' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="xl:col-span-2 xl:row-span-3 p-6">
      <div className="grid-container">
        <h3 className="grid-headtext text-2xl font-bold text-center mb-4">Collaboration & Teamwork</h3>
        <p className="grid-subtext text-center mb-6">I thrive on collaboration and teamwork, participating in various hackathons where I work with diverse teams to create innovative solutions.</p>
        <div className="flex justify-center items-center w-full max-w-[400px] h-[200px] bg-black-100 rounded-3xl overflow-hidden mx-auto shadow-lg transition-transform duration-300 hover:scale-105">
          <img
            src={images[currentIndex].src}
            alt="Hackathon Participation"
            className="transition-transform duration-700 ease-in-out transform object-contain max-w-[90%] max-h-[90%] mx-auto"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
        <p className="grid-subtext text-center mt-4">{images[currentIndex].text1}</p>
        <p className="grid-subtext text-center mt-4">{images[currentIndex].text2}</p>
      </div>
    </div>
  );
};

export default Hackathon;
