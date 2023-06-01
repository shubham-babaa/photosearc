import React from 'react'

export default async function Animeimage() {
    const url = 'https://any-anime.p.rapidapi.com/anime/img';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfcefc2f83msh70c1c755318138bp19af43jsn24a5d2eaceaf',
            'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
  
}
