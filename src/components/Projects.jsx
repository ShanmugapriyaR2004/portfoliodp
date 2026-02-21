import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import data from '../data.json'; // Make sure this file exists and is properly structured

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    setProjects(data.projects);
  }, []);

  return (
    <div className="text-white text-center mt-5 p-10 bg-[#0f0f0f]">
      {/* Title */}
      <div
        ref={ref}
        className={`relative inline-block transition-transform duration-1000 ease-out ${
          inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <h1 className="text-5xl font-medium p-2 z-10">Projects</h1>
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-full bg-[#E75151] animate-line-expand" />
      </div>

      {/* Project Cards */}
      <div
        className={`mt-36 grid grid-cols-1 sm:grid-cols-2 gap-10 transition-all duration-1000 justify-center ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="relative bg-gray-800/100 backdrop-blur-md border-l-2 border-white rounded-xl p-6 text-left shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 w-[500px] h-[350px] mx-auto flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">{project.title}</h2>
              <p className="text-gray-200 mb-4 leading-relaxed break-words">
                {project.description}
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-4 absolute bottom-4 left-6">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#E75151] text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-white hover:text-[#E75151] border border-[#E75151] transition-all"
                >
                  Demo
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#E75151] text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-white hover:text-[#E75151] border border-[#E75151] transition-all"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
