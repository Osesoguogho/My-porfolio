import React from 'react';
import { BiSolidWallet } from "react-icons/bi";
import webcode from "../assets/images/webcode.webp"

const Experience = () => {
    const experienceArray = [
        {
            id: 1,
            year: '2021 - 2024',
            work: 'Full Stack Developer(React, Node.js, Postgresql)',
            company: 'Miczy Tech'
        },
        {
            id: 2,
            year: '2021 - 2023',
            work: 'BackEnd Developer(Node.js, Postgresql)',
            company: 'Gala9ja'
        },
        {
            id: 3,
            year: '2021 - 2022',
            work: 'Junior Web Developer(HTML, CSS, javaScript)',
            company: 'Miczy Tech'
        }
    ]
  return (
    <div className='w-screen min-h-screen mt-2'>
        <div className='text-[#f1683a] text-2xl md:text-3xl lg:text-5xl font-bold text-center my-4 text-shadow p-8'>EXPERIENCE</div>
        <div className='w-[100%] h-[100%] flex justify-center items-center'>
            <div className='hidden md:block w-2/4'>
                <img src={webcode} alt="a black guy writing react and node js code" className='w-[80%] h-[40%] mx-auto my-auto rounded-xl shadow-2xl' />
            </div>

            <div className='flex flex-col gap-10 justify-center items-center text-white md:w-2/4'>
         {
            experienceArray.map(experience => (
                <div key={experience.id} className='w-[80%] bg-[#003161] shadow-xl h-auto flex gap-2 p-5 rounded-xl'>
                    <div className='my-auto p-3 w-[40px] h-[40px] rounded-full bg-transparent'>
                    <BiSolidWallet />
                    </div>
                    <div className='leading-8'>
                        <p className='text-sm'> {experience.year}</p>
                        <h3 className='text-lg'> {experience.work}</h3>
                        <h4 className='text-md'> {experience.company}</h4>
                    </div>
                </div>
            ))
         }
         </div>
        </div>
    </div>
  )
}

export default Experience