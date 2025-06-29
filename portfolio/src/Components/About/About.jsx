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
                <p>I'm a passionate Frontend Developer who loves bringing ideas to life through clean, interactive, and user-friendly web interfaces. With a strong foundation in HTML, CSS, JavaScript, React, and Tailwind CSS, I enjoy transforming complex problems into elegant digital experiences.<br/>
                <br/>
                I'm also a design thinker who values good UI/UX — often turning to Figma and Canva to prototype and plan visually appealing layouts. I thrive in collaborative environments and bring along strong leadership and communication skills, often taking initiative and driving impact beyond just code.
                <br/>
                <br/>
                Currently exploring how AI and modern web tools can enhance everyday web experiences, I'm always eager to learn, build, and innovate. Whether it's a responsive website or a fun interactive feature, I aim to create web solutions that not only work — but wow.</p>
            </div>
        </div>
    </div>
  )
}
