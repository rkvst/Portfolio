import React from 'react'
import Heroimg from '../src/assets/hero.png'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
function Hero() {
  const config = {
    subtitle:"Im a Front-end developer",
    social:{
      twitter:'https://twitter.com',
      facebook:'https://www.facebook.com/dhanush.veriyan.526',
      linkedin:'https://www.linkedin.com/in/vimal-r-662845372'
    }
  }
  return (
    <div>
      <section className='flex  flex-col md:flex-row justify-center px-5 py-32 bg-primary'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl'>Hi, <br/> Im <span className='text-black'>R</span> Vimal
            <p className='text-3xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10 '>
          <a href={config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40} /></a>
          <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
          <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
        </div>
        </div>
        <img className='md:w-1/3'src={Heroimg} alt="" />
      </section>
    </div>
  )
}

export default Hero
