import React from 'react';
import face from '../../assets/Rectangle 16.png';
import rocketImage from '../../assets/Saly-43.png';
import EventCard from '../Utils/EventCard';

const Events = () => {
  return (
    <div className="w-full pt-24 px-4 md:px-8 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center space-y-4 mb-16">
        <h1 className="text-4xl md:text-6xl font-black text-black text-center drop-shadow-md font-poppins">
          Our Upcoming <span className="text-[#4D47C3]">Events</span>
        </h1>
        <p className="text-[#4D47C3] text-lg md:text-xl font-normal text-center font-['Paytone_One']">
          Our future events will be here
        </p>
      </div>

      {/* Main Content Section */}
      <div className="relative max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column with Rockets and Face */}
          <div className="relative min-h-[600px] flex items-center justify-center">
            {/* Top Rocket */}
            <div className="absolute top-0 left-0 w-48 sm:w-64 z-10 animate-[spin_10s_linear_infinite]">
              <img 
                src={rocketImage} 
                alt="Rocket" 
                className="w-full h-auto"
              />
            </div>

            {/* Face Container */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[310px] z-20">
              <div className="p-4 rounded-3xl bg-white shadow-xl">
                <img 
                  src={face} 
                  alt="Face" 
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Bottom Rocket */}
            <div className="absolute bottom-0 right-0 w-48 sm:w-64 z-10 animate-[spin_10s_linear_infinite]">
              <img 
                src={rocketImage} 
                alt="Rocket" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column with Event Cards */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 space-y-4 sm:space-y-6">
              {[1, 2, 3, 4, 5].map((index) => (
                <EventCard
                  key={index}
                  title="Live Workshop in Web Development!"
                  date="October 15, 2023"
                  description="Join us for an exciting live workshop on web development and learn the latest trends."
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;