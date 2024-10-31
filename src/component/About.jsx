import React from 'react';
import doctor from "../assets/images/medical-doctor.webp";

const About = () => {
    
  return (
    <div id='about' className='about-container flex flex-col mt-5 mx-auto tracking-wider min-h-screen'>
        <h2 className='text-[#e80ed6] text-2xl lg:text-5xl md:text:3xl font-bold text-center my-4 text-shadow'>ABOUT</h2>
        <div className='flex flex-col-reverse md:flex-row justify-between mt-5'>
        <div className='text-white md:w-2/4 my-auto mx-3'>
            <div className=''>
         <h3 className='text-xl md:text-3xl lg:4xl font-bold my-3'>Dr Code: A Doctor and a Web Developer</h3>
         <p className='text-lg md:text-xl lg:text-3xl font-bold mx-auto mx-auto'>
            In the intersection of Technology and 
            healthcare, there exist a unique breed 
            bridging the gap between Medicine and 
            technology. I am a qualified physician and 
            a skilled web developer. I have a passion
            to write web code and create innovative 
            digital web solutions.
            I am a graduate of Delta State University, 
            Abraka.(MBBS degree).
            I am a self thought web developer skilled 
            in developing MERN and PERN stack web app.

         </p>
            </div>
        </div>
        <div className='md:w-2/4'>
            <img src={doctor} alt="medical doctor" className='object-cover w-auto h-auto rounded-xl' />
        </div>
        </div>

    </div>
  )
}

export default About