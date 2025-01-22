import React from 'react';

import members from '../../assets/Frame 67 (1).png';
import resources from '../../assets/Frame 67 (2).png';
import staff from '../../assets/Frame 67.png';
import sponsor from '../../assets/hack-club.png';

const Featured = () => {
  return (
    <div className="grid gap-8 px-4 sm:px-8 lg:px-16">
      {/* Row 1 */}
      <div className="flex flex-wrap justify-around gap-8">
        {[
          { img: staff, count: '20+', label: 'Staff' },
          { img: members, count: '80+', label: 'Members' },
          { img: resources, count: '50+', label: 'Resources' },
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <img src={item.img} alt={item.label} className="w-16 h-16" />
            <div>
              <p className="text-2xl font-semibold text-gray-900">{item.count}</p>
              <p className="text-gray-600">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 */}
      <div className="flex flex-wrap items-center justify-around gap-4">
        {/* Left Rectangles */}
        {[...Array(2)].map((_, idx) => (
          <div
            key={`left-${idx}`}
            className="w-36 h-12 bg-gray-200 flex justify-center items-center"
          ></div>
        ))}

        {/* Sponsors Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-lg font-semibold">Sponsors</p>
          <img src={sponsor} alt="Sponsors" className="w-32 h-auto mt-2" />
        </div>

        {/* Right Rectangles */}
        {[...Array(2)].map((_, idx) => (
          <div
            key={`right-${idx}`}
            className="w-36 h-12 bg-gray-200 flex justify-center items-center"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
