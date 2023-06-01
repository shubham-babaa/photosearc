'use client'
import React, { useState } from 'react';
import ImageSearch from './ImageSearch';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState('');

  const handleSearch = async () => {
    // Perform the search logic using the searchQuery state
    // Update the searchResults state with the fetched results
    // You can use an API or any other data source to fetch the search results
    // For simplicity, let's assume we have a dummy function that fetches the results
    const results = await ImageSearch(searchQuery);
    console.log(results)
    setSearchResults(results);
  };

  const addWidthToImage = (htmlString, width) => {
    const imageElement = `<img`;
    const styleIndex = htmlString.indexOf('style="');
    if (styleIndex !== -1) {
      // If the style attribute already exists, modify the width value
      const startIndex = styleIndex + 'style="'.length;
      const endIndex = htmlString.indexOf('"', startIndex);
      const existingStyle = htmlString.slice(startIndex, endIndex);
      const modifiedStyle = existingStyle.replace(/width\s*:\s*[^;]+/, `width: ${width}`);
      return htmlString.slice(0, startIndex) + modifiedStyle + htmlString.slice(endIndex);
    } else {
      // If the style attribute doesn't exist, add the width to the image element
      const imageElementWithWidth = `${imageElement} style="width: ${width};"`;
      return htmlString.replace(imageElement, imageElementWithWidth);
    }
  };

  const renderSearchResults = () => {
    if (typeof searchResults === 'string') {
      const width = '300px'; // Set the desired width here
      const modifiedHTMLString = addWidthToImage(searchResults, width);
      return (
        <div dangerouslySetInnerHTML={{ __html: modifiedHTMLString }} />
      );
    } else {
      // Handle other types of search results (e.g., array or object)
      return null;
    }
  };

  return (
    <div>
      <h1>Search Page</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className='mt-10'>
      {renderSearchResults()}
      </div>
    </div>
  );
};

export default SearchPage;
