import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
// import webcode from "./assets/images/webcode.webp";
import webimg from '../assets/images/webcode.webp';
import resume from "../resume/oses Tech cv.pdf";

const Hero = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row  justify-between items-center min-h-screen hero-page'>
      <div className="flex flex-col items-center mx-auto w-2/4 tracking-wider">
        <h1 className="font-black text-3xl md:text-4xl lg:text-6xl flex flex-col my-4 text-[#e80ed6]">
          <span>Dr OGUOGHO</span>
          <span>OSEBHOHIEN</span>
        </h1>
        <h3 className='text-xl font-bold'>Full Stack Developer</h3>
        <div className='flex gap-3 my-7'>
          <a href="https://ng.linkedin.com/in/osebhohien-oguogho-a6843b23b?trk=public_profile_browsemap" className='w-8 h-8 border-solid border-2 border-blue-500 flex justify-center items-center text-2xl font-bold'> <FaLinkedinIn /> </a>
          <a href="https://x.com/oses4sure" className='w-8 h-8 border-solid border-2 border-blue-500 flex justify-center items-center text-2xl font-bold'> <FaXTwitter /> </a>
          <a href="https://github.com/Osesoguogho" className='w-8 h-8 border-solid border-2 border-blue-500 flex justify-center items-center text-2xl font-bold'><FaGithub /> </a>
          <a href="http://" className='w-8 h-8 border-solid border-2 border-blue-500 flex justify-center items-center text-2xl font-bold'> <FaFacebook /> </a>
          <a href="https://www.instagram.com/young_king369" className='w-8 h-8 border-solid border-2 border-blue-500 flex justify-center items-center text-2xl font-bold'> <FaInstagramSquare /> </a>
        </div>
        
        <div className='text-lg flex flex-col justify-start items-center font-semibold'>
        <span> With a passion of developing</span> <span className='justify-self-start'>react web app and Node.js</span>
         <span>learning new and current concepts</span><span> and always ready to work</span>
        </div>
        <div className='my-5'>
          <a href={resume} target="_blank" rel="noopener noreferrer" download="oses resume">
          <button tabIndex={0} type='button' className='w-20 h-8 text-center bg-red-800 rounded-xl'>
          Resume
          </button>
          </a>
        </div>
      </div>
      <div className='mx-10'>
        <img src={webimg} alt="" width={400} height={400} className='object-cover rounded-full'/>
      </div>
    </div>
  )
}

export default Hero