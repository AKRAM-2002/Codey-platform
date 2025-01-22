import React from 'react';
import { Star, Clock, Video } from 'lucide-react';

const Course = ({ courseData }) => {
  const {
    category,
    rating,
    title,
    schedule,
    numberOfCourses,
    tutorName,
    coursePrice,
  } = courseData;

  return (
    <div className="max-w-sm bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="relative">
        <img 
          src="/api/placeholder/400/320"
          alt="Course cover"
          className="w-full h-52 object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-500 text-sm">{category}</span>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <Star 
                key={i}
                className="w-5 h-5 text-yellow-400 fill-current"
              />
            ))}
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4 text-gray-800">{title}</h2>
        
        <div className="border-t border-gray-200 my-4" />
        
        <div className="flex justify-between mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-600">{schedule}</span>
          </div>
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-600">{numberOfCourses} courses</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <span className="text-sm text-gray-600">{tutorName}</span>
          </div>
          <span className="text-sm font-medium text-gray-700">{coursePrice}</span>
        </div>
      </div>
      
      <div className="px-6 pb-6">
        <button className="w-full bg-[#1FD891] hover:bg-[#1abc7f] text-white font-bold py-2 px-4 rounded-full transition-colors">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Course;