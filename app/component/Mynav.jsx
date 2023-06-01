'use client'
import React, { useState } from 'react';
import {HiMenu } from 'react-icons/hi';
import { GiAbstract041 } from "react-icons/gi";
const Mynav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-stone-700 text-white rounded-sm shadow-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="grid ">
          
         
          <GiAbstract041 className='text-[40px]  text-cyan-600'/>
        
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <a
                href="/"
                className="hover:text-gray-300 text-xl font-bold text-cyan-600 transition duration-300"
              >
                Photos
              </a>
            </li>
            <li>
              <a
                href="/vedio"
                className="hover:text-gray-300 text-xl font-bold text-cyan-600 transition duration-300"
              >
                Videos
              </a>
            </li>
            <li>
              <a
                href="/collections"
                 className="hover:text-gray-300 text-xl font-bold text-cyan-600 transition duration-300"
              >
                Collections
              </a>
            </li>
            <li>
              <a
                href="/about"
                 className="hover:text-gray-300 text-xl font-bold text-cyan-600 transition duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <HiMenu size={24} />
          </button>
        </div>
      </div>
      {showMenu && (
        <div    className={` md:hidden px-4 py-2 mb-[10vh] bg-cyan-900
        `}>
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="/"
                className="hover:text-gray-500 text-red-900 transition duration-300"
              >
                Photos
              </a>
            </li>
            <li>
              <a
                href="/vedio"
                className="hover:text-gray-300 text-red-900 transition duration-300"
              >
                Videos
              </a>
            </li>
            <li>
              <a
                href="/collections"
                className="hover:text-gray-300 text-red-900 transition duration-300"
              >
                Collections
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-gray-300 text-red-900 transition duration-300"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Mynav;
