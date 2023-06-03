'use client'
import React, { useState,useEffect } from 'react';
import Wikihowfetch from './Wikihowfetch';
import Image from 'next/image';
import WikihowImages from './WikihowImages';

export default  function Wikihowlod  ()  {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const[a,setA]=useState(false);
 
  
    useEffect(() => {
        const fetchData = async () => {
          const data = await Wikihowfetch();
          console.log(data)
          // console.log(searchResults.photos[0].url)
          if (data !== 0) {
            setSearchResults(data);
            setA(true);
            console.log(searchResults)
          }
  //         const urls = {};
  //   data.photos.forEach((photo, index) => {
  //     const key = photo.id;
  //     const value = photo.src.original;
  //     urls[key] = value;
  //   });
  //  console.log(urls)
  //   setPhotoURLs(urls);
        };
      
        fetchData();
      }, []);
      

  

  return (
    <div className="container   py-40">
    <h1 className="text-2xl font-bold text-cyan-100 text-transparent opacity-90 mb-4">Image</h1>
    {a ? (
      <WikihowImages photoURLs={searchResults} />
    ) : (
      <p className="text-xl">Image shown here</p>
    )}
  </div>
  );
};