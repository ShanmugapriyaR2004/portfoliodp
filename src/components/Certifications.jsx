import React, { useState, useEffect, useRef } from 'react';
import data from '../data.json';
import { useInView } from 'react-intersection-observer';

// Import images
import apImg from '../assets/ap.jpg';
import cr1Img from '../assets/cr1.jpg';
import cr2Img from '../assets/cr2.jpg';
import fpImg from '../assets/fp.jpg';
import ruImg from '../assets/ru.jpg';
import kg1Img from '../assets/kg1.jpg';
import mgaImg from '../assets/mga.jpg';
import phyImg from '../assets/phy.jpg';
import cerImg from '../assets/cer.jpg';

// Add more imports as necessary

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);

  const sectionRef = useRef(null); // Ref for the whole section
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [listRef, listInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    setCertifications(data.certifications);
  }, []);

  const handleToggle = () => {
    const isShowingLess = visibleCount !== 6;
    setVisibleCount(isShowingLess ? 6 : certifications.length);

    // Scroll to top of section when showing less
    if (isShowingLess && sectionRef.current) {
      const top = sectionRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const imageMap = {
    'ap.jpg': apImg,
    'cr1.jpg': cr1Img,
    'cr2.jpg': cr2Img,
    'fp.jpg': fpImg,
    'ru.jpg': ruImg,
    'kg1.jpg': kg1Img,
    'mga.jpg': mgaImg,
    'phy.jpg': phyImg,
    'cer.jpg': cerImg,
    // Map more images as necessary
  };

  const getImage = (imageName) => {
    return imageMap[imageName] || null;
  };

  return (
    <div ref={sectionRef} className="text-white text-center mt-32 p-10 min-h-screen bg-[#0f0f0f]">
      {/* Title */}
      <div
        ref={titleRef}
        className={`relative inline-block transition-transform duration-1000 ease-out ${
          titleInView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <h1 className="text-5xl font-medium p-2 z-10">Certifications</h1>
        <span
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-full bg-[#E75151] origin-center ${
            titleInView ? 'animate-line-expand' : ''
          }`}
        />
      </div>

      {/* Grid */}
      <div
        ref={listRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center mt-20 transition-opacity duration-1000 ease-out ${
          listInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {certifications.slice(0, visibleCount).map((cert, idx) => {
          const imgSrc = getImage(cert.pht);
          return (
            <div
              key={idx}
              className="relative bg-white bg-opacity-10 backdrop-blur-lg text-left p-6 w-[300px] h-[350px] rounded-xl shadow-md hover:scale-105 transition-transform duration-300 flex flex-col justify-between"
            >
              {imgSrc ? (
                <img
                  src={imgSrc}
                  alt={`Certificate ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-800 rounded-md mb-4 flex items-center justify-center text-sm text-gray-400">
                  Image not available
                </div>
              )}
              <div className="flex justify-center mt-auto">
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white underline hover:text-[#E75151] transition-colors"
                  >
                    View Certificate
                  </a>
                ) : (
                  <span className="text-sm text-gray-300">No link available</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Toggle Button */}
      {certifications.length > 6 && (
        <div className="mt-10">
          <a
            onClick={handleToggle}
            className="text-white hover:text-[#E75151] underline cursor-pointer text-sm"
          >
            {visibleCount === 6 ? 'Show More' : 'Show Less'}
          </a>
        </div>
      )}
    </div>
  );
};

export default Certifications;
