import React from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Page = () => {
  const company = 'Acme Corp';
  const description = 'We are a leading company in the field of innovation and technology.';
  const yearFounded = 2005;
  const teamSize = 100;

  return (
    <div className={`p-10  ${inter.className} flex min-h-screen flex-col items-center justify-between  bg-gradient-to-r to-cyan-900 from-gray-900  py-10 mx-1 overflow-x-hidden`}>
      <h1 className="text-2xl w-full py-2 text-center font-bold ml-10 mb-2 mx-10 bg-gray-900 shadow-lg shadow-cyan-500 rounded-md text-white">
        About Page
      </h1>

      <div className="text-center lg:h-[300px] bg-gray-900 shadow-lg shadow-cyan-500 mx-10 shadow-lg rounded-md leading-7 p-3">
        <h1 className="text-green-100 text-3xl mb-5">Welcome to the About page of our website!</h1>

        <p className="text-white">{description}</p>
        <p className="text-white">Team Size: {teamSize} employees</p>
        <p className="text-white">Year Founded: {yearFounded}</p>
      </div>
    </div>
  );
};

export default Page;
