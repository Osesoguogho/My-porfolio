import React from 'react'

const Modal = ({onSubmit, children}) => {
  return (
    <div onClick={(e)=> {e.target.className === "modal-container" ?
        onSubmit() : ""}
    } className='modal-container'>
        <div className='w-[80%] bg-white flex flex-col rounded-md'>
            <div className='flex justify-end mr-1 text-black'>
                <p onClick={()=> onSubmit()} className='text-2xl cursor-pointer'>&times;</p>
            </div>
            <div className='text-2xl text-center text-black'>
                <p>{children}</p>
            </div>
             <div className='flex justify-center'>
                <button onClick={()=> onSubmit()} className='p-1 bg-blue-600 text-white w-[60px] rounded-lg my-3'>close</button>
            </div>
        </div>
    </div>
  )
}

export default Modal