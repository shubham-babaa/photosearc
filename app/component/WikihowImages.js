"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Pixelfetch from './Pixelfetch';
import {IoArrowUpCircle } from "react-icons/io5";
export default function WikihowImages({ searchResults, handleDownload, handleDetail, photoURLs }) {
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleShowImage = (url) => {
    setSelectedImage(url);
    setShowImage(true);
   
  };

  const handleCloseImage = () => {
    setShowImage(false);
  };

  const findKeyByURL = (url) => {
    for (const [key, value] of Object.entries(photoURLs)) {
      if (value === url) {
        return key;
      }
    }
    return '';
  };

  const determineDynamicURL = (url) => {
    const key = findKeyByURL(url);
    return `/posts/${key}`;
  };
   const handelparentclick=(event)=>{
    event.stopPropagation();
   }
  const dynamicURL = determineDynamicURL(selectedImage);
  //  useEffect(()=>{ console.log(showImage)},[showImage])
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 min-h-screen  " onClick={handelparentclick}>
      {Object.keys(photoURLs).map((key) => (
        <div key={key} className="relative rounded-lg border-2 bg-white border-red-900 pb-5">
          <Image
            src={photoURLs[key]}
            alt="Image"
            width={2000}
            height={700}
            className="w-[700px] h-[300px] rounded-lg border-4 border-white"
            
          />
          <IoArrowUpCircle className='text-3xl relative top-[-50%] left-[40%] text-emerald-500 animate-bounce rounded-full bg-sky-400 opacity-75'  onClick={() => handleShowImage(photoURLs[key])}/>
        </div>
      ))}
      {showImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 p-10">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Image"
              width={2000}
              height={700}
              className="w-[900px] h-[600px]"
            />
            <button
              onClick={handleCloseImage}
              className="absolute top-4 right-4 bg-white text-gray-800 px-4 py-2 rounded"
            >
              Close
            </button>
            {handleDownload && (
              <div>
                <button
                  onClick={() => handleDownload(selectedImage)}
                  className="absolute top-[90%] left-[10%] transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded"
                >
                  Download
                </button>
              </div>
            )}
            {handleDetail && (
              <Link href={dynamicURL} passHref className="absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded">
                  Click me!
                
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
