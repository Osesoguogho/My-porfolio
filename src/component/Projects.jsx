import React, {useState} from 'react';
import { projects } from '../ComponentMa';
import Modal from './Modal';
import { createPortal } from 'react-dom';
import ProjComponents from './ProjComponents';

const Projects = () => {
 

  const myProject = projects.map((project) => (
    <div className='mx-auto'>
    <ProjComponents key={project.id} project={project}/>
    </div>
  ))
  return (
    <div id='projects' className='w-[100vw] min-h-screen flex flex-col items-center justifer-center'>
      <h2 className='text-[#f1683a] text-2xl md:text-3xl lg:text-5xl font-bold text-center my-4 text-shadow'>PROJECTS</h2>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-[100%]'>
      {myProject}
      
      </div>
    </div>
  )
}

export default Projects