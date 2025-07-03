import React from 'react'
import instaimg from '../src/assets/instagram.png'

export default function Projects() {
  const config = {
    projects :[
      {
        image:instaimg ,
        description:"An Instagram-inspired front-end web application built using React and styled with Tailwind CSS.",
        link:"https://github.com/rkvst/instagram-clone"
      }
    ]
  }
  return (
    <div>
      <section id='projects' className='flex flex-col justify-center px-5 py-20 bg-primary text-white scroll-mt-24'>
        <div className='w-full'>
        <div className='flex flex-col px-10 py-5 '>
            <h1 className=' text-4xl border-b-4 w-[170px] border-[#2d2b77] font-bold mb-5'>Projects</h1>
            <p>Here's one of my best projects built with React and TailwindCSS — check it out!</p>
        </div>
        </div>
        <div className='w-full '>
        <div className='flex md: flex-row px-10'>
          {config.projects.map((project)=>(
             <div className='relative shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition duration-500 rounded-lg overflow-hidden'>
               <img className='h-[200px] w-full md:w-[500px] object-cover rounded-lg'src={project.image} alt="Instagram Clone Project Screenshot" />
               <div className='absolute left-0 right-0 bottom-0 top-0 bg-secondary opacity-0 duration-500 hover:opacity-100 hover:cursor-pointer'>
                <p className='text-center px-5 py-5'>{project.description}</p>
                <div className='flex flex-col gap-3 items-center'>
                  <a className='bg-primary px-5 py-2 font-bold  hover:border-2  border-white rounded' target='_blank' href={project.link} rel="noopener noreferrer">View Project</a>
                  <a href="https://instagram-clone-six-lilac.vercel.app/" className='text-sm text-teal-300 font-medium' target='_blank'>Live Demo</a>
                </div>
               </div>
            </div>
          ))}
           
        </div>
        
        </div>
      </section>
    </div>
  )
}
