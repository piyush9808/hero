// src/Accordion.js
import React, { useState } from 'react';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    { id: 1, image: 'https://via.placeholder.com/50', title: 'Title 1' },
    { id: 2, image: 'https://via.placeholder.com/50', title: 'Title 2' },
    { id: 3, image: 'https://via.placeholder.com/50', title: 'Title 3' },
    { id: 4, image: 'https://via.placeholder.com/50', title: 'Title 4' },
    { id: 5, image: 'https://via.placeholder.com/50', title: 'Title 5' },
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-5">
      <div className="border rounded-md p-4 shadow-md bg-white">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">Accordion Title</h2>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-md"
            onClick={toggleAccordion}
          >
            {isOpen ? 'Close' : 'Open'}
          </button>
        </div>
        {isOpen && (
          <div className="mt-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
            {items.map((item) => (
              <div key={item.id} className="flex items-center py-2">
                <img src={item.image} alt={item.title} className="w-12 h-12 mr-4 rounded-full" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
