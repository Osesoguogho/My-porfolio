import React, {useState} from 'react';
import Modal from './Modal';

const ProjComponents = ({project}) => {

    const [showModal, setShowModal] = useState(false);
  

    function handleModalDisplay(id) {
        if(id) setShowModal(true);
    };
    function handleClose() {
      setShowModal(false)
     }
  return (
    <div>
        <div  className='w-[10rem] h-[20rem] md:w-[12rem] md:h-[17rem] rounded-lg m-5 p-4 border-2 text-white shadow-2xl transition-all gradient-background'>
    <img src={project.imageURL} alt="github icon" className='w-full h-[30%]' />
    <div className="text-white mx-1 mt-1 text-center">
      {project.title}
    </div>
    <div className='mt-2 font-bold'>{project.description.substring(0, 31)}.....
      <p onClick={()=>handleModalDisplay(project.id)} className='bg-blue-600 text-center rounded-md mt-2 cursor-pointer md:mt-4'>Read more</p>
    </div>
    <div className={``}>
    {showModal ? (<Modal  onSubmit={handleClose} >
      <p className={``}>{project.description}</p>
      </Modal>) : ""
      }
    </div>
    <div className='bg-green-700 mt-4 text-center rounded-md py-[2px] md:mt-4'>
      <a href={project.link}>check code on Github</a>
    </div>
    </div>
  
    </div>
  )
}

export default ProjComponents