"use client"
import { useSearchParams } from 'next/navigation';
import WikihowImages from '../component/WikihowImages';




export default function Page() {
const searchParams=useSearchParams()
  const person = searchParams.get('person');

let result = {};
if (person) {
  result = JSON.parse(person);
}

const handleDownload = async (url) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = 'image.jpg';
    link.click();
    alert("Download successful");
  } catch (error) {
    console.error('Error downloading image:', error);
  }
};
const handleDetail="true";

  return (
    <div className='overflow-x-hidden bg-gradient-to-r to-cyan-900 from-gray-900 mx-1'>
     <WikihowImages photoURLs={result}  handleDownload={handleDownload} handleDetail={handleDetail}/>
    </div>
  );
}
