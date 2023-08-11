import React, { useState } from "react";

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={toggleDropdown}
      >
        News
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
          >
            General
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
          >
            Business
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
          >
            Entertainment
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
          >
            Health
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
          >
            Science
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
          >
            Sports
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
          >
            Technology
          </a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
