'use client'
import React, { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { BiArrowFromLeft } from "react-icons/bi";

const Mynav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuStyle = {
    transform: isOpen ? 'translateX(-50%)' : 'translateX(0)',
    transition: 'transform 500ms ease-in-out',
  };

  return (
    <nav className="bg-gray-900 overflow-x-hidden rounded-b-sm  z-10  w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="bg-cyan-500/50 shadow-[0px_1px_60px_100px] shadow-cyan-500/50 text-white py-1 px-2 mb-2   items-center">My Website</span>
            </div>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white py-1 px-2 mb-2 rounded-md sm:mb-0 sm:ml-2 flex items-center"
            >
              {isOpen ? <BiArrowFromLeft /> : <FiMenu />}
            </button>
          </div>
          <div className={`sm:flex sm:absolute sm:top-[2%] sm:flex-col sm:w-[60%] sm:ml-[30%] sm:h-auto sm:bg-inherit sm:text-gray-600 absolute top-[9%]  w-[0px] overflow-hidden  transition-transform ease-in-out duration-1000 transform ${
        isOpen ? "w-[50%] block left-[25%] ml-[50%] overflow-x-hidden  sm:left-[0%]" : "hidden"
      } rounded-b-md h-[300px] bg-gray-900 z-50`} style={menuStyle} >
            <div className="sm:block  sm:ml-6">
              <div className=" text-2xl space-x-1 ">
              <ul className="sm:grid sm:grid-cols-4 gap-2">
            <li>
              <a
                href="/"
                className="text-gray-300 hover:bg-gray-700 sm:text-gray-600  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Photos
              </a>
            </li>
            <li>
              <a
                href="/vedio"
                className="text-gray-300 hover:bg-gray-700 sm:text-gray-600  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Videos
              </a>
            </li>
            <li>
              <a
                href="/collections"
                className="text-gray-300 hover:bg-gray-700 sm:text-gray-600  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Collections
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-300 hover:bg-gray-700 sm:text-gray-600  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
            </li>
          </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Mynav;
