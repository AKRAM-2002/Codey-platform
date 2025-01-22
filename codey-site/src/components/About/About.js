import React from 'react';
import Saly from '../../assets/Saly-10.png';
import { FaArrowRight } from 'react-icons/fa';

const About = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side */}
        <div>
          <h3 className="text-lg font-semibold text-purple-600">About Us</h3>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mt-2 mb-4">
            Codey is a Global Community for Youth Coders!
          </h1>
          <div className="space-y-4 text-gray-700">
            <p>
            Codey is a vibrant global community designed to empower youth coders. 
            Our platform connects aspiring developers with invaluable resources, 
            mentorship, and real-world projects to enhance their skills and make a 
            meaningful impact. Whether you're looking to join coding teams, participate 
            in events, or access curated programs, Codey has everything you need to grow.


            </p>
            <p>
            We provide the tools and opportunities to build a strong foundation in coding, 
            enabling you to create innovative solutions and achieve your goals. 
            Focus on learning, collaborating, and creating while we connect you with a 
            network of like-minded individuals and exciting opportunities.
            </p>
          </div>
          <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-purple-700 transition">
            Join Us <FaArrowRight />
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center items-center">
          <img src={Saly} alt="About Us" className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default About;
