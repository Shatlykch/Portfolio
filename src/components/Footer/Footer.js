import React from 'react'
import './Footer.css';
import emaillogo from '../../assets/navbar/email.png';
import githublogo from '../../assets/navbar/github-icon.png';
import linkedinlogo from '../../assets/navbar/linkedin-app-icon.svg';


function Footer () {
    return (
        <div className='footer'>
            <a href='mailto: shatlyk78@gmail.com' target="_blank" rel="noreferrer" className='emaillink'>
                <p className='contactemail'>
                    <img src={emaillogo} alt="EmailLogo" className='emaillogo' />
                </p>
            </a>
            <a href='https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit' target="_blank" rel="noreferrer" className='linkedinlink'>
                <p className='linkedin'>
                    <img src={linkedinlogo} alt="LinkedInLogo" className='linkedinlogo' />
                </p>
            </a>
            <a href='https://github.com/Shatlykch?tab=repositories' target="_blank" rel="noreferrer" className='githublink'>
                <p className='github'>
                    <img src={githublogo} alt="GitHubLogo" className='githublogo' />
                </p>
            </a>



        </div >

    )
}

export default Footer