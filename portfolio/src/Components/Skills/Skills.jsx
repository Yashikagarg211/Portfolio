import React from 'react'
import './Skills.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import {Skills_data} from '../skills_data'



export default function Skills() {
  return (
    <div id='skills' className='skills'>
      <div className='skills-title'>
          <h1>My Skills</h1>
          <img src={theme_pattern} alt='' />
      </div>
      <div className='skills-container'>
        {Skills_data.map((skills, index) => (
           <div key={index} className='skills-format'>
            {skills.s_desc}
            <h2>{skills.s_name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

