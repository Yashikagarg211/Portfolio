import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import {myWork_data} from '../mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

export default function MyWork() {

  const [showAll, setShowAll] = useState(false);
  const displayedWorks = showAll ? myWork_data : myWork_data.slice(0, 3);


  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Work</h1>
            <img src={theme_pattern} alt='' />
        </div>
        <div className='mywork-container'>
                {displayedWorks.map((work) => (
                   <div key={work.w_no} className='mywork-format'>
                    <div className="mywork-image-container">
                     <img src={work.w_img} alt={work.w_name} className="project-image" />
                     {/* Hover Overlay */}
                     <div className="overlay">
                      {work.buttons.map((btn, index) => (
                       <a href={btn.link} target="_blank" rel="noopener noreferrer" className="btn" key={index}>
                    {btn.text}
                  </a>
                ))}
              </div>
            </div>
            <div className="tech-stack">
              {work.tech_stack.map((tech_stack, index) => (
                <span className="tech-btn" key={index}>{tech_stack}</span>
              ))}
            </div>

            <h2>{work.w_name}</h2>
          </div>
        ))}
      </div>
      {myWork_data.length > 3 && (
        <div className="mywork-showmore" onClick={() => setShowAll(!showAll)}>
          <p>{showAll ? 'Show Less' : 'Show More'}</p>
          <img src={arrow_icon} alt='' className={showAll ? 'rotate' : ''} />
        </div>
      )}
    </div>
  );
};
