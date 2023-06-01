"use client"
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';
import SearchPage from './component/Search';
import Anemisearch from './component/Anemisearch';
import PixelSearch from './component/PixelSearch';
 import Wikihowlod from './component/Wikihowlod'
import SearchForm from './component/SearchFilter';
// 

export default function Home() {
  // const router=useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-[600px]:bg-sky-300 px-10">
  
  
  
    <PixelSearch/>

    <Wikihowlod/>
 
    </main>
  )
}
