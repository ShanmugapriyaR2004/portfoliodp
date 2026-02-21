import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import data from '../data.json';

const Services = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [listRef, listInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    setServices(data.services);
  }, []);

  const closeModal = () => setSelectedService(null);

  return (
    <div className="text-white px-4 pt-10 pb-32 text-center relative">
      {/* Title with animated underline */}
      <div
        ref={titleRef}
        className={`inline-block transition-transform duration-1000 ease-out relative ${
          titleInView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <h1 className="text-5xl font-medium">Services</h1>
        <span
          className={`block h-[3px] bg-[#E75151] mt-1 transform transition-transform duration-700 origin-left ${
            titleInView ? 'scale-x-100' : 'scale-x-0'
          } w-full`}
        ></span>
      </div>

      {/* Services List */}
      <div
        ref={listRef}
        className={`mt-20 grid grid-cols-1 sm:grid-cols-2 gap-y-16 transition-opacity duration-1000 ease-out ${
          listInView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="relative bg-gray-800 h-60 w-4/5 mx-auto flex flex-col p-6 rounded-lg border border-[#E75151] hover:scale-105 transform transition text-left"
          >
            <h2 className="text-2xl font-semibold text-center mb-2">{svc.titile}</h2>
            <p className="text-sm leading-relaxed break-words flex-grow">{svc.description}</p>
            <button
              className="bg-[#E75151] text-white py-2 px-4 rounded-lg hover:bg-red-600 absolute bottom-4 right-4"
              onClick={() => setSelectedService(svc)}
            >
              View More
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-[#0f0f0f] p-8 rounded-xl max-w-xl w-11/12 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-semibold mb-4 text-[#E75151]">{selectedService.titile}</h2>
            <p className="text-white mb-4 leading-relaxed">{selectedService.description}</p>
            <p className="text-gray-300 mb-6 leading-relaxed">{selectedService.extra}</p>
            <button
              className="mt-4 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
