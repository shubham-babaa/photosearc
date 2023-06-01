
import React from 'react'

export default async function Pixelfetch(searchQuery) {
	console.log("ocean")
	const query = encodeURIComponent(searchQuery);
	console.log(query)
    const url = `https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${query}&locale=en-US&per_page=20&page=2`;
	console.log(url)
	// console.log('https://pexelsdimasv1.p.rapidapi.com/v1/search?query=ocean&locale=en-US&per_page=15&page=1',"hj")
const options = {
	method: 'GET',
	headers: {
		Authorization: 'poU40iwlkOeU35WKQoW0B8mh0UC3spOlg9A3HlNNjSdytqAqUm0E71UI',
		'X-RapidAPI-Key': 'cfcefc2f83msh70c1c755318138bp19af43jsn24a5d2eaceaf',
		'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	const parsedResult = JSON.parse(result);
	const photos = parsedResult.photos;
	
console.log(result)
	if(parsedResult)
	return parsedResult;
} catch (error) {
	console.error(error);
}
  
}
