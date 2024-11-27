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
import Carousel from "./component/Carousel";
import Services from "./component/Services";
import Experience from './component/Experience';
import { Parallax, Background } from 'react-parallax';
import marine5 from './image/marine5.jpg';
import marine7 from './image/marine7.jpg';
import motioning from './image/motionimg.mp4';



function App() {
 

  return (
    <div className='bg-[#000b58] w-screen min-h-screen'>
      
      <Parallax blur={{ min: -15, max: 15 }} strength={2000}>
      <Navbar/>
      <Carousel/>
    </Parallax>
      <Parallax strength={300} bgImage={marine5}>
    <About />
    </Parallax>
    <Parallax strength={900}>
    <Experience />
    </Parallax>
   <div className='skills-bg'>
    <h2 className='text-[#f1683a] text-2xl md:text-3xl lg:text-5xl font-bold text-center my-4 text-shadow p-8'>SKILLS</h2>
    <Marquee>
    <Skills />
    </Marquee>
    </div>
    
    <Projects />
    {/* <hr className='w-[90%] h-[4px] border-blue-500 border-solid border-2 mt-8 mx-auto text-blue-500'/> */}
    <Parallax strength={600} >
    <Services />
    </Parallax>
    <Contact />
    <button onClick={()=> window.scrollTo(0, 0)} className=" w-8 h-10 bottom-[1rem] bg-white sticky rounded-md shadow-md flex justify-center items-center float-right mr-2 z-10 cursor-pointer"> <GoArrowUp /> </button>
    <Footer />
   
    </div>
  )
}

export default App
