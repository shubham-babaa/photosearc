import React from 'react'

export default  async function ImageSearch() {
  
    const url = 'https://any-anime.p.rapidapi.com/anime/gif';
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
    
//     try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
  
//   const res=await fetch(url, options)
//   const data=await res.json();
  
//   console.log(data)
//   const urls = data.value.map((obj) => obj.url);
// console.log(urls)


// for (const url of urls) {
//   const parsedUrl = new URL(url);
//   const hostname = parsedUrl.hostname;
//  await nextConfig.images.domains.push(hostname);
// }
// console.log(nextConfig.images.domains)


};
