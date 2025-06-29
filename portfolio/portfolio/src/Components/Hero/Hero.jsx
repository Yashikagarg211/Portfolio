import React from 'react'
import './Hero.css'
import profilePic from '../../assets/Profile-Pic (2).jpg'
import resume from '.././../../public/Yashika garg Resume2.pdf'

export default function Hero() {
  return (
    <div id='home' className='hero'>
      <div className='image'>
        <img src={profilePic} alt='Profile' />
      </div>

      <div className="hero-title">
        <span className="typing-line name-line"><span>Hi! I'm Yashika Garg,</span></span>
        <span className="typing-line role-line"><span>Frontend Developer</span></span>
      </div>

      <p>I am a Frontend Developer from India focused on building clean, responsive and user-friendly websites.</p>

      <div className='hero-action'>
        <a 
    href={resume} 
    target="_blank" 
    rel="noopener noreferrer" 
    className='hero-resume'
  >
    My Resume
  </a>
      </div>
    </div>
  )
}
