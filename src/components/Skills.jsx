import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import data from '../data.json';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [ref, inView]   = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    setSkills(data.skills);
  }, []);

  return (
    <div className="text-white text-center mt-32 p-10">
      {/* Title with underline */}
      <div
        ref={ref}
        className={`relative inline-block transition-transform duration-1000 ease-out ${
          inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <h1 className="text-5xl font-medium -mt-20 p-2 z-10">Skills</h1>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-full bg-[#E75151] animate-line-expand" />
      </div>

      {/* Skill icons with hover animation */}
      <div
        className={`mt-16 grid grid-cols-3 gap-x-0 gap-y-8 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {skills.map((skill, idx) => {
          const logoUrl = new URL(`../assets/${skill.logo}`, import.meta.url).href;
          return (
            <div
              key={idx}
              className="group relative flex flex-col items-center transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              {/* Logo container: no bg, red border, spins on hover */}
              <div className="w-20 h-20 mb-5 flex items-center justify-center rounded-full border-2 border-[#E75151] overflow-hidden
                              transition-all duration-1000
                              group-hover:animate-spin">
                <img
                  src={logoUrl}
                  alt={skill.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-xl font-semibold transition-colors duration-300 group-hover:text-white">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
