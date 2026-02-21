import React, { useState, useEffect } from 'react';
import data from '../data.json';
import profileImg from '../assets/p1.jpg'; // replace with your actual image path

const Home = () => {
  const [homeData, setHomeData] = useState({});
  useEffect(() => {
    setHomeData(data.home);
  }, []);
  const [showImage, setShowImage] = useState(false);

useEffect(() => {
  setTimeout(() => setShowImage(true), 100); // Delay optional
}, []);


  const getRandomColor = () => {
    return Math.random() > 0.5 ? '#E75151' : '#404040';
  };

  return (
    <div className="text-white mt-32 relative flex justify-between items-center px-32">
      {/* Floating bubbles */}
      <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full opacity-50 animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-10px`,
              backgroundColor: getRandomColor(),
              width: `11px`,
              height: `11px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Left Side: Text Content */}
      <div className="z-10 max-w-[60%]">
        <h1 className="text-5xl font-medium p-2">{homeData.greeting}</h1>
        <h1 className="text-5xl font-medium p-2">{homeData.name}</h1>
        <p className="text-2xl font-normal p-2">{homeData.title}</p>
        <div className="relative w-fit p-2">
          <p className="font-normal relative z-10">{homeData.bio}</p>
          <span className="absolute bottom-[-6px] left-1/2 w-full h-[2px] bg-[#E75151] animate-line-expand origin-center"></span>
        </div>
      </div>

      {/* Right Side: Profile Image */}
        {/* Right Side: Profile Image */}
<div
  className={`z-10 transition-all duration-[1500ms] ease-in-out transform ${
    showImage ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
  }`}
>
  <img
    src={profileImg}
    alt="Profile"
    className="w-[300px] h-[300px] object-top rounded-full shadow-lg object-cover"
  />
</div>


    </div>
  );
};

export default Home;
