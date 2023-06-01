
import React from 'react'

export default async function Vediofetch(searchQuery) {
	console.log("ocean")
	const query = encodeURIComponent(searchQuery);
	console.log(query)
    const url = `https://pexelsdimasv1.p.rapidapi.com/videos/search?query=${query}&per_page=60&page=1`;
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
          console.log(parsedResult)
        if(parsedResult)
        return parsedResult;
       
    } catch (error) {
        console.error(error);
    }


  
}