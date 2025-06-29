import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/Profile-Pic (2).jpg'

export default function About() {
  return (
    <div id='about' className='about'>
        <div className='about-title'>
            <h1>About Me</h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className='about-sections'>
            <div className="about-left">
                <img src={profile_img} alt='' />
            </div>
            <div className="about-right">
                <p>Passionate about bringing ideas to life through a blend of creativity and technology. I specialize in crafting interactive digital experiences that are both visually engaging and user-centered.
                Passionate about bringing ideas to life through a blend of creativity and technology. I specialize in crafting interactive digital experiences that are both visually engaging and user-centered.Passionate about bringing ideas to life through a blend of creativity and technology. I specialize in crafting interactive digital experiences that are both visually engaging and user-centered.Passionate about bringing ideas to life through a blend of creativity and technology. I specialize in crafting interactive digital experiences that are both visually engaging and user-centered.Passionate about bringing ideas to life through a blend of creativity and technology. I specialize in crafting interactive digital experiences that are both visually engaging and user-centered.</p>
            </div>
        </div>
    </div>
  )
}
