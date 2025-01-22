import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const EventCard = ({ title, date, description }) => {
  const [showEvent, setShowEvent] = useState(false);

  const toggleEvent = () => {
    setShowEvent(!showEvent);
  };

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg shadow-indigo-500/20 p-6 transition-all duration-300 w-full max-w-2xl mx-auto mb-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100">
            {showEvent ? (
              <AiOutlineMinus 
                className="w-6 h-6 text-indigo-600 cursor-pointer"
                onClick={toggleEvent}
              />
            ) : (
              <AiOutlinePlus 
                className="w-6 h-6 text-indigo-600 cursor-pointer"
                onClick={toggleEvent}
              />
            )}
          </div>
          <h3 className="text-neutral-800 font-medium text-lg md:text-xl lg:text-2xl font-poppins">
            {showEvent ? title : 'Coming Soon!'}
          </h3>
        </div>
      </div>

      {showEvent && (
        <div className="mt-6 space-y-4">
          <div className="space-y-2">
            <h4 className="text-indigo-600 font-semibold text-lg font-poppins">
              Date:
            </h4>
            <p className="text-neutral-600">
              {date}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-indigo-600 font-semibold text-lg font-poppins">
              Description:
            </h4>
            <p className="text-neutral-600">
              {description}
            </p>
          </div>

          <div className="flex justify-end pt-4">
            <button className="bg-indigo-600/90 hover:bg-indigo-700 text-white font-semibold py-2 px-8 rounded-full transition-colors duration-200 text-base md:text-lg font-poppins">
              Enroll
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCard;