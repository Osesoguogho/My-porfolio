import React from 'react';
import skills from "../ComponentMa";
import Marquee from "react-fast-marquee";

const Skills = () => {
  console.log(skills);

  const mySkills = skills.map(skill => (
    <div key={skill.id} className='w-[120px] h-[120px] rounded-lg m-5 p-4 border-2 skill-card'>
    <img src={skill.imageURL} alt={`${skill.skillType} icon`} className='m-auto' />
    <div className="text-white mx-auto mt-1 text-center">
      {skill.skillType}
    </div>
    </div>
  ))
  return (
    <div id="skills" className='h-auto'>
       
      <div className='my-5 flex justify-center items-center flex-wrap'>
   {mySkills}
    </div>
  
    </div>
  )
}

export default Skills