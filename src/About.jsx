import React from 'react'
import Aboutimg from '../src/assets/about.png'

function About() {
  const config = {
    line1:"Hi, My name is R Vimal.I am a Front-end developer.I built beautiful Websites with React.js and Tailwind css",
    line2:"I am Proficient in Frontend Skills like HTML,CSS,React.js and TailWind CSS"
  }
  return (
    <div>
      <section className='flex flex-col md:flex-row px-5  bg-secondary' id='about'>
        <div className=' py-5 md:w-1/2'>
           <img src={Aboutimg} alt="" />
        </div>
        <div className='md:w-1/2 flex justify-center '>
            <div className='flex flex-col justify-center text-white'>
                 <h1 className='text-4xl border-b-4 w-[180px] border-[#5551e3] font-bold mb-3'>About Me</h1>
           <p className='pb-5'>{config.line1}</p>
           <p className='pb-5'>{config.line2}</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default About
