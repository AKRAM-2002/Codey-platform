import React from 'react';
import Educator1 from '../../assets/Educator1.png';
import Educator2 from '../../assets/Educator2.png';
import Educator3 from '../../assets/Educator3.png';
import EducatorCard from '../Utils/EducatorCard';
import Literally from '../../assets/Literally.png';
import Computer from '../../assets/Computer.png';
import Net from '../../assets/Net.png';
import Light1 from '../../assets/light1.png';
import Light2 from '../../assets/light2.png';

const Educators = () => {
  return (
    <div className="relative flex flex-col items-center justify-center py-16 bg-[rgba(31,216,145,0.14)] overflow-hidden">
      {/* Background Net Animation */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 animate-spin-slow">
        <img src={Net} alt="Net" className="w-24 h-24 md:w-32 md:h-32" />
      </div>

      {/* Title Section */}
      <div className="relative text-center mb-12 mt-8">
        <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 w-12 h-12">
          <img src={Light1} alt="Light 1" className="w-full h-full" />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black text-shadow-md">
          Our Top Educators!
        </h1>
        <div className="absolute -right-20 top-1/2 transform -translate-y-1/2 w-12 h-12">
          <img src={Light2} alt="Light 2" className="w-full h-full" />
        </div>
        <div className="mt-4">
          <img src={Literally} alt="Literally" className="w-24 md:w-32 mx-auto" />
        </div>
      </div>

      {/* Educator Cards */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
        {/* Left Computer */}
        <div className="hidden md:block transform rotate-12 animate-float">
          <img src={Computer} alt="Computer" className="w-16 h-16" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EducatorCard
            imageSrc={Educator1}
            name="Jacob Jones"
            occupation="Social Media Expert"
          />
          <EducatorCard
            imageSrc={Educator2}
            name="Jacob Jones"
            occupation="Web Developer"
          />
          <EducatorCard
            imageSrc={Educator3}
            name="Jacob Jones"
            occupation="Data Scientist"
          />
        </div>

        {/* Right Computer */}
        <div className="hidden md:block transform -rotate-12 animate-float">
          <img src={Computer} alt="Computer" className="w-16 h-16" />
        </div>
      </div>

      {/* Become An Instructor Button */}
      <div className="mt-12">
        <button className="px-8 py-3 rounded-full bg-[#0163E0] text-white text-lg font-light hover:bg-blue-600 transition-colors">
          Become An Instructor
        </button>
      </div>
    </div>
  );
};

export default Educators;