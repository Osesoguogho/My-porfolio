import React from 'react';
import serviceArray from './servicecom';

const Services = () => {

  return (
    <div className='parallax3 min-h-screen w-[100vw] mt-0 mx-auto flex flex-col items-center'>
       <h2 className='text-[#f1683a] text-2xl md:text-3xl lg:text-5xl font-bold text-center my-4 text-shadow p-8'>SERVICES</h2>
       <p className='mb-4 text-white p-3 text-lg md:text-xl'> These are some of the services I offer. Reach out to me if I can help you with any!</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mb-16 '>
            {
                serviceArray.map(service =>(
                    <div key={service.id} className='w-[70vw] h-[335px] md:w-[40vw] lg:w-[30vw] ring-1 rounded-xl bg-[#000b58] flex flex-col items-center mt-6 text-white'>
                        <img src={service.iconURL} alt="icons" width={40} height={40} className='mt-8'/>
                        <div className='text-lg my-3 pl-2 font-bold'>
                            {service.header}
                        </div>
                        <hr className='w-[20%] h-[4px] border-blue-500 border-solid border-2 mt-2 mx-auto text-blue-500'/>
                        <div className='mt-2 p-4'>
                            {service.serviceRender}
                        </div>
                         </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services