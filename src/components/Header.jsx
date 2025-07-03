import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
function Header() {
    const[togglemenu,setTogglemenu]=useState(false);
  return (
    <div>
      <header className='w-full flex justify-between px-5 sm:px-32 py-2 bg-primary '>
        <a className='font-bold text-black' href="#">R VIMAL</a>
        <nav className='hidden md:block'>
           <ul className='flex text-white'>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>
         {togglemenu && <nav className='block md:hidden '>
           <ul onClick={()=>{setTogglemenu(!togglemenu)}}className='flex flex-col text-white mobile-nav'>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=>{setTogglemenu(!togglemenu)}}className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
      </header>
    </div>
  )
}

export default Header
