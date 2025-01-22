import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from "react-slick";

/** assets **/
import test from '../../assets/online-test 1.png'
import people from '../../assets/exam 1.png'
import calendar from '../../assets/exam 2.png'
import Rectangle from '../../assets/Rectangle 41.png'
import planet from '../../assets/planet.png'
import Arrow from '../../assets/arrow.png'
import Course from '../Utils/CourseCard';

import ArrowL from '../../assets/ArrowLeft.png'
import ArrowR from '../../assets/ArrowRight.png'


const coursesData = [
  {
    category: 'Web Development',
    rating: 5,
    title: 'Full Stack Web Development Bootcamp',
    schedule: '8 weeks',
    numberOfCourses: 20,
    tutorName: 'John Doe',
    coursePrice: 'Free',
  },
  {
    category: 'Data Science',
    rating: 4,
    title: 'Introduction to Machine Learning',
    schedule: '6 weeks',
    numberOfCourses: 15,
    tutorName: 'Jane Smith',
    coursePrice: '$49.99',
  },
  {
    category: 'Web Development',
    rating: 5,
    title: 'Full Stack Web Development Bootcamp',
    schedule: '8 weeks',
    numberOfCourses: 20,
    tutorName: 'John Doe',
    coursePrice: 'Free',
  },
];


const Programs = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + 3) % 3); 
  };
  
  return (
    <div className="Programs">
      <div className="relative flex justify-center items-center pt-10">
        <img src={planet} alt="Planet" className="absolute w-32 h-32 animate-spin" />
      </div>
      
      <div className="bg-gray-900 p-8 rounded-lg mt-16 mx-auto max-w-screen-lg flex flex-col md:flex-row justify-between items-center">
        <ul className="flex justify-center gap-16 mb-8">
          <li className="flex flex-col justify-center items-center">
            <img src={test} alt="test" className="w-20 h-20 mb-4" />
            <p className="text-white text-xl font-semibold text-center">Learn The Latest Skills</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <img src={people} alt="people" className="w-20 h-20 mb-4" />
            <p className="text-white text-xl font-semibold text-center">Meet other Coders Like You!</p>
          </li>
          <li className="flex flex-col justify-center items-center">
            <img src={calendar} alt="calendar" className="w-20 h-20 mb-4" />
            <p className="text-white text-xl font-semibold text-center">Have access To Exciting Events!</p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center text-center py-16">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-extrabold text-black mb-4">Current Programs!</h1>
          <h3 className="text-xl font-semibold text-black">Programs That Cover every Topic in Coding! FOR FREE!</h3>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
            {coursesData.map((course, i) => (
              <Course key={i} courseData={course} />
            ))}
          </div>
        </div>

        <div className="flex gap-2 mb-8">
          {[0, 1, 2].map((dotIndex) => (
            <div key={dotIndex} className={`w-3 h-3 rounded-full ${slideIndex === dotIndex ? 'bg-green-500' : 'bg-gray-500'}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
