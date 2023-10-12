"use client";
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
          <Image
            src='/logo.png'
            alt='logo'
            width={30}
            height={30}
          />
          <span className="ml-3 text-xl">DataVizTrack</span>
        </Link>
        <nav className="md:ml-auto hidden lg:flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" href='/'>Home</Link>
          <Link className="mr-5 hover:text-gray-900" href='/design'>Design</Link>
          <Link className="mr-5 hover:text-gray-900" href='/login'>Login</Link>
          <Link className="mr-5 hover:text-gray-900" href='/register'>Register</Link>
        </nav>  
        <div className="relative lg:hidden">
          <button type="button" aria-expanded="false" onClick={() => setIsShow(!isShow)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -mt-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          <div className={`absolute ${isShow ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'} -left-20 w-60 z-10 mt-5 flex -translate-x-1/2 px-4 transition ease-in duration-150`}>
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="py-4 px-8 flex flex-col gap-5">
                <Link className="mr-5 hover:text-gray-900" href='/'>Home</Link>
                <Link className="mr-5 hover:text-gray-900" href='/design'>Design</Link>
                <Link className="mr-5 hover:text-gray-900" href='/login'>Login</Link>
                <Link className="mr-5 hover:text-gray-900" href='/register'>Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;