'use client'
import React, { useState, useEffect } from 'react';
import Vediofetch from '../component/VedioFetch';
import Image from 'next/image';
import { IoCaretUpCircleOutline, IoCloseSharp } from "react-icons/io5";
export default function Page() {
  const [searchQuery, setSearchQuery] = useState();
  const [dta, setDta] = useState('');
  const [showImage, setShowImage] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null); // Track selected video
  const [searchData, setSearchData] = useState('');
  const [k, setK] = useState("https://player.vimeo.com/external/339400446.hd.mp4?s=ac5022d70a4585bb4e6015d52ad614f665724fd9&profile_id=175&oauth2_token_id=57447761")
  useEffect(() => {
    const fetchData = async () => {
      const data = await Vediofetch(searchQuery ? searchQuery : "all");
      if (data.videos.length !== 0) {
        setDta(data.videos);
        console.log(dta)

        if (dta.length > 0)
          setK(dta[0].video_files[0].link)
        console.log(k);
      }
    };
    fetchData();
  }, [searchQuery]);


  const handleSearch = (e) => {
    setSearchQuery(searchData);
    const k = dta[0].video_files[0].link

    setSearchData('')

  };

  const handlePlayVideo = (video) => {
    setSelectedVideo(video);
    setShowImage(true);
  };

  const handleCloseVideo = () => {
    setShowImage(false);
    setSelectedVideo(null);
  };

  useEffect(() => {
    console.log(selectedVideo, showImage);
  }, [selectedVideo, showImage, k]);

  const handleParentClick = (event) => {
    event.stopPropagation(); // Prevent event propagation to the parent div
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between  bg-gradient-to-r to-cyan-900 from-gray-900   mx-1 overflow-x-hidden">
      {/* Updated background color to gray */}
      <div className="flex  justify-center items-center  mb-20">

        <div className=' text-center'>
          <video
            id="videoPlayer"
            width="100%"
            height="auto"
            controls
            autoplay
            loop
            className="w-full h-[600px] "
          >
            <source src=
              "https://player.vimeo.com/external/221214111.hd.mp4?s=02857e21d87a8cd1c0ceeb77ba164d2648b49871&profile_id=170&oauth2_token_id=57447761"
              type="video/mp4" />
          </video>
        </div >

        <div className='absolute sm:top-[80%] sm:left-[35%] top-[80%] flex z-50'>
          <input
            type="text"
            value={searchData}
            onChange={(e) => { setSearchData(e.target.value) }}
            className="border border-gray-300 rounded-md py-2 px-4 w-64 sm:w-80 md:w-96"
            placeholder="Search..."
          />
          <button
            onClick={handleSearch}
            className="ml-2 py-2 px-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white rounded-md"
          >
            Search
          </button>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-2" onClick={handleParentClick}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {dta.length > 0 ? (
            dta.map((obj) => {
              const { id, quality, file_type, width, height, fps, link } = obj.video_files[0];
              return (
                <div key={id} className="relative">
                  <div className="rounded overflow-hidden shadow-lg shadow-cyan-500/50">
                    <div
                      className="w-full h-full bg-blackbg-cyan-500 shadow-3xl shadow-cyan-500 rounded-lg cursor-pointer relative border-4  border-red-900 px-4"
                    // Call handlePlayVideo when video is clicked
                    >

                      <video
                        width={width}
                        height={height}
                        className={`w-full h-full ${showImage ? 'hidden' : ''}`}
                      >
                        <source src={link} type={file_type} />
                        Your browser does not support the video tag.
                      </video>
                      <IoCaretUpCircleOutline className='text-[50px] text-white absolute top-[50%] left-[40%]' onClick={() => handlePlayVideo(obj)} />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>No videos found</div>
          )}
        </div>
        {showImage && selectedVideo && (
          <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-900 z-50">
            <button
              className="absolute top-4 right-4 bg-cyan-500  shadow-lg shadow-cyan-500/50 text-white py-2 px-6 ml-2 rounded-lg" // Updated button color to black for light mode
              onClick={handleCloseVideo}
            >
              <IoCloseSharp />
            </button>
            <div className="relative w-3/4 h-3/4">
              <video
                width="100%"
                height="100%"
                controls
                className="w-full h-full"
              >
                <source
                  src={selectedVideo.video_files[0].link}
                  type={selectedVideo.video_files[0].file_type}
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
