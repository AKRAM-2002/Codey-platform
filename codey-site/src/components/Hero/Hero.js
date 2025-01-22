import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Saly from '../../assets/Saly-38.png';

const Hero = () => {
  const courseOptions = [
    'Course 1',
    'Course 2',
    'Course 3',
    'Course 4',
    'Course 5',
  ];

  const [selectedCourse, setSelectedCourse] = useState('');

  return (
    <div className="w-full min-h-screen bg-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="space-y-6 lg:pl-8 mt-4 md:mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              A Place For Youth Coders
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Grouping youth from all over the world to Network with each other, 
              Learn together and Participate in Events in-person in Morocco, 
              Outside or even online!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors">
                Programs
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-full font-semibold hover:bg-gray-50 transition-colors">
                Events
              </button>
            </div>

            <div className="bg-white rounded-full shadow-lg p-2 max-w-2xl">
              <div className="flex flex-col md:flex-row items-center gap-4 p-2">
                <div className="w-full md:w-1/2">
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full px-4 py-2 text-gray-600 bg-transparent border-0 focus:ring-0 font-medium"
                  >
                    <option value="">Select a course</option>
                    {courseOptions.map((course, index) => (
                      <option key={index} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="w-full md:w-1/2 relative">
                  <input
                    type="text"
                    placeholder="Search courses..."
                    className="w-full px-4 py-2 pr-10 text-gray-600 bg-transparent border-0 focus:ring-0 font-medium"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src={Saly}
                alt="Youth Coding Illustration"
                className="w-full max-w-[600px] h-auto lg:pr-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;