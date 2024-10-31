import { useState } from 'react';
import Navbar from './component/Navbar';
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import Marquee from "react-fast-marquee";
import Projects from './component/Projects';
import Modal from "./component/Modal";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import {GoArrowUp} from "react-icons/go";


function App() {
 

  return (
    <div className='pattern-background'>
    <Navbar />
    <Hero/>
    <hr className='w-[90%] h-[4px] border-blue-500 border-solid border-2 mt-8 mx-auto text-blue-500'/>
    <About />
    <hr className='w-[90%] h-[4px] border-blue-500 border-solid border-2 mt-8 mx-auto text-blue-500'/>
    <h2 className='text-[#e80ed6] text-2xl md:text-3xl lg:text-5xl font-bold text-center my-4 text-shadow'>SKILLS</h2>
    <Marquee>
    <Skills />
    </Marquee>
    
    <Projects />
    <hr className='w-[90%] h-[4px] border-blue-500 border-solid border-2 mt-8 mx-auto text-blue-500'/>
    <Contact />
    <button onClick={()=> window.scrollTo(0, 0)} className=" w-8 h-10 bottom-[1rem] bg-white sticky rounded-md shadow-md flex justify-center items-center float-right mr-2 z-10 cursor-pointer"> <GoArrowUp /> </button>
    <Footer />
   
    </div>
  )
}

export default App
