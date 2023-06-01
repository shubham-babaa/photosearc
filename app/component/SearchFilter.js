"use client"
import React, { useState } from 'react';

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search based on searchQuery and selectedTopic
    // Your search logic here
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

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

  return (
    <div className="bg-gray-900  flex items-center justify-center">
      <div className="h-1/5 sm:h-3/5 md:h-2/5 lg:h-4/5">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-6">Search for free photos</h1>
        </div>
        <form onSubmit={handleSearch}>
          <div className="flex flex-col space-y-4">
            <div>
              <label htmlFor="searchQuery" className="text-white">
                Search:
              </label>
              <input
                type="text"
                id="searchQuery"
                value={searchQuery}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md bg-gray-800 text-white border-transparent focus:border-white focus:ring-0"
              />
            </div>
            <div>
              <label htmlFor="selectedTopic" className="text-white">
                Trending Topics:
              </label>
              <select
                id="selectedTopic"
                value={selectedTopic}
                onChange={handleTopicChange}
                className="mt-1 block w-full rounded-md bg-gray-800 text-white border-transparent focus:border-white focus:ring-0"
              >
                <option value="">Select a topic</option>
                {trendingTopics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;

