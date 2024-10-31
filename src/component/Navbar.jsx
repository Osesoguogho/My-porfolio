import React, {useState} from 'react';
import UseDarkMode from '../UseDarkMode';
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";


const Navbar = () => {
const [showMenu, setShowMenu] = useState(false);
    const toggleButton = () => {
        setShowMenu(!showMenu)
    };


  return (
   <div className="flex my-auto shadow-2xl  h-[80px] w-[100%] my-auto transition-all gradient-background z-10 ">
    <nav className="my-auto ml-4">
   <button onClick={toggleButton} className={`md:hidden ${showMenu ? "toggle-btn" : "" } relative w-8 h-8 bg-black cursor-pointer z-20`}>
                <div className='bg-white w-8 h-1 transition-all duration-500 rounded absolute top-4 -mt-0.5 before:content-[""] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[""] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:-translate-x-4 after:translate-y-3 after:transition-all after:duration-500 '>

                </div>
            </button>
                <ul className={`md:flex hidden md:block md:flex md:gap-10 md:justify-end md:items-center md:mx-8 font-bold`}>
                    <a href="#about"> <li>About</li> </a>
                   <a href="#skills"><li>skills</li></a>
                   <a href="#projects"><li>Projects</li></a>
                  <a href="#contact"><li>Contact</li></a>
                </ul>
                { showMenu && <div className={`min-h-screen md:hidden bg-gray-800 text-white transition-all ease-in-out absolute top-0 right-0 space-y-4 fixed z-10 w-2/4 ${showMenu ? "side-bar" : "w-2/4"}`}>
                <ul className={`md:hidden flex flex-col justify-center w-full mx-auto my-10 items-center mx-8 font-bold`}>
                   <a onClick={toggleButton} href="#about" className='mb-10 w-full text-center py-4 hover:border-2 hover:border-white hover:border-solid'> <li> About</li> </a>
                   <a onClick={toggleButton} href="#skills" className='mb-10 w-full text-center py-4 hover:border-2 hover:border-white hover:border-solid'> <li> skills</li> </a>
                   <a onClick={toggleButton} href="#projects" className='mb-10 w-full text-center py-4 hover:border-2 hover:border-white hover:border-solid'> <li> projects</li> </a>
                   <a onClick={toggleButton} href="#contact" className='mb-10 w-full text-center py-4 hover:border-2 hover:border-white hover:border-solid'> <li> contact</li> </a>
                  
                </ul>
            
            </div>
}

        </nav>
    </div>
  )
}

export default Navbar