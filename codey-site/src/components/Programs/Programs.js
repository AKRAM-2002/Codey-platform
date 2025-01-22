import React, { useState } from 'react';
import Course from '../Utils/CourseCard';

// Import assets
import test from '../../assets/online-test 1.png';
import people from '../../assets/exam 1.png';
import calendar from '../../assets/exam 2.png';

import planet from '../../assets/planet.png';
import Arrow from '../../assets/arrow.png';
import ArrowR from '../../assets/ArrowRight.png';

const Programs = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

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

  return (
    <div className="grid grid-cols-1 mb-0 relative">
      <div className="absolute right-5 top-0">
        <img 
          src={planet} 
          alt="Planet" 
          className="w-[120px] h-[68px] transform rotate-[5.16deg] animate-spin-slow"
        />
      </div>

      {/* Row 1 */}
      <div className="mx-6 md:mx-8 lg:mx-12 mt-24 bg-[#1E1E1E] rounded-xl py-8">
        <ul className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16">
          <li className="flex items-center space-x-4">
            <img src={test} alt="test" className="w-20 h-20" />
            <div>
              <p className="text-white font-bold text-lg md:text-2xl leading-tight">
                Learn The Latest<br />Skills
              </p>
            </div>
          </li>
          
          <li className="flex items-center space-x-4">
            <img src={people} alt="people" className="w-20 h-20" />
            <div>
              <p className="text-white font-bold text-lg md:text-2xl leading-tight">
                Meet other Coders<br />Like You!
              </p>
            </div>
          </li>
          
          <li className="flex items-center space-x-4">
            <img src={calendar} alt="calendar" className="w-20 h-20" />
            <div>
              <p className="text-white font-bold text-lg md:text-2xl leading-tight">
                Have access To Exciting<br />Events!
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col items-center mt-12">
        <img 
          src={Arrow} 
          className="w-40 h-auto relative -right-4 md:right-64 lg:right-96 mb-4"
        />
        
        <div className="text-center mb-16 -mt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black shadow-md mb-4">
            Current Programs!
          </h1>
          <h3 className="text-base md:text-lg font-extrabold text-black">
            Programs That Cover every Topic in Coding! FOR FREE!
          </h3>
        </div>

        {/* Programs Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row gap-6 overflow-x-auto md:overflow-hidden">
            {coursesData.map((course, i) => (
              <div key={i} className={`transform transition-all duration-300 ${
                slideIndex === i ? 'scale-100 opacity-100' : 'scale-95 opacity-75'
              }`}>
                <Course courseData={course} />
              </div>
            ))}
          </div>

          <button 
            onClick={handleNextSlide}
            className="mt-4 md:mt-0 md:ml-4"
          >
            <img 
              src={ArrowR}
              alt="Right Arrow"
              className="w-10 h-auto cursor-pointer"
            />
          </button>
        </div>

        {/* Ellipsis dots */}
        <div className="flex gap-2 mt-6">
          {[0, 1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`w-2.5 h-2.5 rounded-full ${
                slideIndex === dot 
                  ? 'bg-[#1FD891]' 
                  : 'bg-[#656967]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;