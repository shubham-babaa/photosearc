
import React from 'react'

export default async function Wikihowlod() {

    const url = 'https://hargrimm-wikihow-v1.p.rapidapi.com/images?count=300';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'cfcefc2f83msh70c1c755318138bp19af43jsn24a5d2eaceaf',
            'X-RapidAPI-Host': 'hargrimm-wikihow-v1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const parsedResult = JSON.parse(result);
      
        console.log(parsedResult);
        return parsedResult
    } catch (error) {
        console.error(error);
    }


  
}
