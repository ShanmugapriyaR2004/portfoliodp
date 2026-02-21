import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import data from '../data.json';
import profileImg from '../assets/p2.jpg';


const About = () => {
  const [aboutData, setAboutData] = useState({});
  

  // 1. Title ref
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  // 2. Photo ref
  const [photoRef, photoInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  // 3. Content & buttons ref
  const [contentRef, contentInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    setAboutData(data.about);
  }, []);

  return (
    <div className="text-white p-10 text-center mt-52">
      {/* Title + line */}
      <div
        ref={titleRef}
        className={
          `relative inline-block -mt-14 transition-transform duration-1000 ease-out ` +
          (titleInView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0')
        }
      >
        <h1 className="text-5xl font-medium p-2 relative z-10">
          {aboutData.title}
        </h1>
        <span
          className={
            `absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-full bg-[#E75151] origin-center ` +
            (titleInView ? 'animate-line-expand' : '')
          }
        />
      </div>

      {/* Main block: photo, description, buttons */}
      <div className="mt-52 flex flex-col md:flex-row ml-9 gap-10">
        {/* Photo */}
        <div
          ref={photoRef}
          className={
            `w-60 h-60 -mt-14 ml-10 rounded-full overflow-hidden border-4 transition-transform duration-1000 ease-out ` +
            (photoInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0')
          }
        >
         <img
  src={profileImg}
  alt="Profile"
  className="w-full h-full object-cover"
/>

        </div>

        {/* Description & buttons */}
        <div
          ref={contentRef}
          className={
            `text-left max-w-xl transition-all duration-1000 ease-out delay-100 ` +
            (contentInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0')
          }
        >
          <p className="font-normal mb-6 ml-56 -mt-16 max-w-xl text-left leading-relaxed break-words">
            {aboutData.description}
          </p>
          <div className="flex gap-4 mt-20 ml-56">
  {/* Replace the link below with your actual resume PDF path */}
  <a
    href="/assets/resume.pdf"  // or use an online link like "https://example.com/resume.pdf"
    download
    className="bg-[#E75151] px-6 py-2 rounded-lg hover:bg-red-600 transition text-white"
  >
    Download Resume
  </a>

  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=rajachandramohan.m@gmail.com"
  className="border border-[#E75151] px-6 py-2 rounded-lg hover:bg-[#E75151] transition text-white"
>
  Contact Me
</a>

</div>

        </div>
      </div>
    </div>
  );
};

export default About;
