import React, {useState} from 'react';
import { projects } from '../ComponentMa';
import Modal from './Modal';
import { createPortal } from 'react-dom';
import ProjComponents from './ProjComponents';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  

  function handleModalDisplay(id) {
      if(id) setShowModal(true);
  };
  function handleClose() {
    setShowModal(false)
   }

  const myProject = projects.map((project) => (
    <ProjComponents key={project.id} project={project}/>
  ))
  return (
    <div id='projects' className='flex flex-col mx-auto items-center'>
      <h2 className='text-[#e80ed6] text-2xl md:text-3xl lg:text-5xl font-bold text-center my-4 text-shadow'>PROJECTS</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {myProject}
      </div>
    </div>
  )
}

export default Projects