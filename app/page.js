"use client"
import Image from 'next/image'
import { useRouter } from 'next/router';
import Link from 'next/link';

import Anemisearch from './component/Anemisearch';
import PixelSearch from './component/PixelSearch';
 import Wikihowlod from './component/Wikihowlod'

// 

export default function Home() {
  // const router=useRouter();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-gradient-to-r to-cyan-900 from-gray-900  py-10 mx-1 overflow-x-hidden">
  
  
  
    <PixelSearch/>

    <Wikihowlod/>
 
    </main>
  )
}