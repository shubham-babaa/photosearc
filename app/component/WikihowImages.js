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
    const query=`?person=${encodeURIComponent(
      JSON.stringify(key)
    )}`;
    return `/posts/${query}`;
  };
   const handelparentclick=(event)=>{
    event.stopPropagation();
   }
  const dynamicURL = determineDynamicURL(selectedImage);
  //  useEffect(()=>{ console.log(showImage)},[showImage])
  return (
    <div className="mt-10 items-center  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-1 min-h-screen w-[100%] overflow-x-hidden   mx-1" onClick={handelparentclick}>
      {Object.keys(photoURLs).map((key) => (
        <div key={key} className="relative rounded-lg border-2 bg-gradient-to-r to-cyan-900 from-gray-900  ">
          <Image
            src={photoURLs[key]}
            alt="Image"
            width={2000}
            height={700}
            className="w-full h-[100px] sm:h-[240px] md:h-[300px] rounded-lg "
            
          />
           <IoArrowUpCircle className='text-3xl absolute top-[-50%] left-[40%] text-emerald-900 animate-bounce rounded-full opacity-75'  onClick={() => handleShowImage(photoURLs[key])}/>
        </div> 
      ))}
      {showImage && (
        <div className="fixed top-0 left-0 w-full min-h-screen flex items-center justify-center bg-black bg-opacity-75 p-5">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Image"
              width={2000}
              height={700}
              className="w-[900px] h-[400px]"
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
                  className="absolute top-[80%] left-[10%]  bg-gray-800 text-white px-4 py-2 rounded-sm"
                >
                  Download
                </button>
              </div>
            )}
            {handleDetail && (
              <Link href={dynamicURL} passHref className=" ml-3 absolute top-[80%] left-[50%]  bg-gray-800 text-white px-4 py-2 rounded">
                  more detail!
                
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
