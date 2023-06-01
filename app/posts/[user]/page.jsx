// "use client"
// import React,{useState,useEffect} from "react";
// import Image from "next/image";
// import { useSearchParams } from 'next/navigation';
// const Page = ({ params }) => {
//   const url = `https://pexelsdimasv1.p.rapidapi.com/v1/photos/${params.user}`;
//   const options = {
//     method: 'GET',
//     headers: {
//       Authorization: 'poU40iwlkOeU35WKQoW0B8mh0UC3spOlg9A3HlNNjSdytqAqUm0E71UI',
//       'X-RapidAPI-Key': 'cfcefc2f83msh70c1c755318138bp19af43jsn24a5d2eaceaf',
//       'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
//     }
//   };

//   const [photo, setPhoto] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url, options);
//         const result = await response.text();
//         const parsedResult = JSON.parse(result);
//         setPhoto(parsedResult);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   if (!photo) {
//     return <div>Loading...</div>;
//   }
   
//   return (
//     <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-5">
//       <Image src={photo.src.original} alt="Green Grass Near Trees" width={700} height={700} className="w-full" />
//       <div className="p-4">
//         <h2 className="text-xl font-bold mb-2">Photographer: <a href="https://www.pexels.com/@luisdalvan" className="text-blue-500">{photo.photographer}</a></h2>
//         <div className="mt-4">
//           <h3 className="text-lg font-bold mb-2">Image Variations:</h3>
//           <ul className="list-disc list-inside">
//             <li><a href={photo.src.original} className="text-blue-500">Original</a></li>
//             <li><a href={photo.src.large2x} className="text-blue-500">Large 2x</a></li>
//             <li><a href={photo.src.large} className="text-blue-500">Large</a></li>
//             <li><a href={photo.src.medium} className="text-blue-500">Medium</a></li>
//             <li><a href={photo.src.small} className="text-blue-500">Small</a></li>
//             <li><a href={photo.src.portrait} className="text-blue-500">Portrait</a></li>
//             <li><a href={photo.src.landscape} className="text-blue-500">Landscape</a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}

