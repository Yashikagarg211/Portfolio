import React from 'react'
import './Footer.css'
import linkedin_icon from'../../assets/linkedin-icon-svgrepo-com.svg'
import github_icon from '../../assets/github-octocat-svgrepo-com.svg'


export default function Footer() {
  return (
    <div className='footer'>
        <hr />
        <div className="footer-bottom">
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/yashika-garg-37baa2290" target="_blank" rel="noopener noreferrer" className="footer-icon linkedin">
                <img src={linkedin_icon} alt='Linkedin' /></a>
            </div>
            <a href="https://github.com/Yashikagarg211" target="_blank" rel="noopener noreferrer" className="footer-icon github">
          <img src={github_icon} alt='GitHub' />
        </a>
        </div>
    </div>
  );
};
