import React from 'react'
import resumeimg from '../src/assets/resume.jpg'
import Projects from './Projects'
function Resume() {
    const config = {
        link:"https://in.docworkspace.com/d/sIPqugPBn7_eawwY?sa=601.1074"
    }
  return (
    <div>
      <section id='resume' className='flex flex-col md:flex-row px-5   bg-secondary '>
              <div className=' py-5 md:w-1/2 flex justify-center md:justify-end'>
                 <img className='w-[300px]' src={resumeimg} alt="resume" />
              </div>
              <div className='md:w-1/2 flex justify-center'>
                  <div className='flex flex-col justify-center  text-white'>
                       <h1 className='text-4xl border-b-4 w-[130px] border-[#5551e3] font-bold mb-3'>Resume</h1>
                 <p className='pb-5'>you can view my resume <a className='bg-primary px-5 py-2  font-bold  hover:border-2 mt-4 inline-block  border-white rounded;'href={config.link}>Download</a></p>
                
                  </div>
              </div>
            </section>
    </div>
  )
}

export default Resume
