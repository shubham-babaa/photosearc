'use client'
import React, { useState, useEffect } from 'react';
import Pixelfetch from './Pixelfetch';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import WikihowImages from './WikihowImages';
import VedioFetch from './VedioFetch';
import {IoArrowForwardOutline } from "react-icons/io5";
const trendingTopics = [
  'technology',
  'space',
  'beach',
  'landscape',
  'abstract',
  'business',
  'nature',
  'food',
  'sky',
  'memorial day',
];

const Topic = ['Video'];

export default function PixelSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState({});
  const [a, setA] = useState(false);
  const [photoURLs, setPhotoURLs] = useState({});
  const [urldetail, setUrldetail] = useState({});
  const [topic, setTopic] = useState('');
  const [selectedOption, setSelectedOption] = useState('all');

  const handleSearch = async () => {
    const data = await Pixelfetch(searchQuery ? searchQuery : selectedOption);
    if (data.photos.length !== 0) {
      setSearchResults(data);
      setA(true);
    }
    setSearchQuery(''); // Clear the search query after search
    const urls = {};
    data.photos.forEach((photo, index) => {
      const key = photo.id;
      const value = photo.src.original;
      urls[key] = value;
    });

    setPhotoURLs(urls);
    const queryString = `?person=${encodeURIComponent(JSON.stringify(urls))}`;
    const url = `/search${queryString}`;
    window.location.href = url;
  };

  const handleSearchVedio = async () => {
    const data = await VedioFetch(searchQuery ? searchQuery : selectedOption);
    if (data.videos.length !== 0) {
      setSearchResults(data);
      setA(true);
    }
    setSearchQuery('');
    const videoFilesArray = [];
    data.videos.forEach((video) => {
      if (video.video_files.length > 0) {
        const firstVideoFile = video.video_files[0];
        const videoFileObject = {
          firstVideoFile,
        };
        videoFilesArray.push(videoFileObject);
      }
    });
    setPhotoURLs(videoFilesArray);
    const queryString = `?person=${encodeURIComponent(JSON.stringify(videoFilesArray))}`;
    const url = `/vedio${queryString}`;
    window.location.href = "/vedio";
  };

  useEffect(() => {
    console.log(photoURLs, searchResults, searchQuery);
  }, [photoURLs, searchResults, searchQuery]);

  return (
    <div className="bg-gray-600 py-4 px-6 contrast-100 sm:px-12 md:px-24 lg:px-32 xl:px-40 border-white border-2 rounded-lg">
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Search Filter</span>
      </h1>
      <div className={`flex flex-col md:flex-row items-center  mb-6`}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-grow mb-2 md:mb-0 md:mr-2"
        />
        <select
          value={selectedOption}
          onChange={(e) => setSelectedOption(e.target.value)}
          className="rounded-lg py-2 hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:block"
        >
          <option value="all">All</option>
          {trendingTopics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
        </div>
        <div className='flex  justify-between'>
        <button
          onClick={handleSearch}
          className="bg-cyan-500  shadow-lg shadow-cyan-500/50 text-white py-2 px-6 ml-2 rounded-lg"
        >
          Search
        </button>
        <button
          onClick={handleSearchVedio}
          className="bg-cyan-500  shadow-lg shadow-cyan-500/50 text-white  px-6 ml-2 rounded-lg  flex py-2 justify-between"
        >
         <IoArrowForwardOutline className=' text-2xl'/> 
         <h1>
         Video</h1>
        </button>
        </div>
      </div>

  );
}
