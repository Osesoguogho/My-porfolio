import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className=" min-h-screen w-screen flex flex-col justify-center items-center">
         <h2 className='text-[#f1683a] text-2xl md:text-3xl lg:text-5xl font-bold text-center my-4 text-shadow'>CONTACT</h2>
        <div className="my-3">
        <a href="mailto:osesthedon@gmail.com, osesoguogho@gmail.com" className=' bg-[#003161] px-4 py-2 shadow-2xl rounded-lg flex justify-center items-center text-2xl font-bold text-white'> contact me </a>
        </div>
        <div className='flex justify-evenly my-7 gap-5'>
          <a href="https://ng.linkedin.com/in/osebhohien-oguogho-a6843b23b?trk=public_profile_browsemap" className='w-8 h-8 border-solid border-2 border-blue-500 flex justify-center items-center text-2xl font-bold text-white'> <FaLinkedinIn /> </a>
          <a href="https://x.com/oses4sure" className='w-8 h-8 border-solid border-2 border-blue-500 flex justify-center items-center text-2xl font-bold text-white'> <FaXTwitter /> </a>
          <a href="https://github.com/Osesoguogho" className='w-8 h-8 border-solid border-2 border-blue-500 flex justify-center items-center text-2xl font-bold text-white'><FaGithub /> </a>
          <a href="https://www.facebook.com/young king" className='w-8 h-8 border-solid border-2 border-blue-500 flex justify-center items-center text-2xl font-bold text-white'> <FaFacebook /> </a>
          <a href="https://www.instagram.com/young_king369" className='w-8 h-8 border-solid border-2 border-blue-500 flex justify-center items-center text-2xl font-bold text-white'> <FaInstagramSquare /> </a>
        </div>
    </div>
  )
}

export default Contact