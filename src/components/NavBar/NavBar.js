import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbarstyle.css';
import { Link } from 'react-router-dom';
import emaillogo from '../../assets/navbar/email.svg';
import githublogo from '../../assets/navbar/github-icon.svg';
import linkedinlogo from '../../assets/navbar/linkedin-app-icon.svg';




function NavBar () {
  return (
    <>

      <nav className='navbar'>
        <Link to="/" className='brand-title'>Shatlyk Ch</Link>

        <div>
          <a href='mailto: shatlyk78@gmail.com' target="_blank" rel="noreferrer" className='emaillink'>
            <p className='contactemail'>
              <img src={emaillogo} alt="EmailLogo" className='emaillogo' /> Email
            </p>
          </a>
          <a href='https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit' target="_blank" rel="noreferrer" className='linkedinlink'>
            <p className='linkedin'>
              <img src={linkedinlogo} alt="LinkedInLogo" className='linkedinlogo' /> LinkedIn
            </p>
          </a>
          <a href='https://github.com/Shatlykch?tab=repositories' target="_blank" rel="noreferrer" className='githublink'>
            <p className='github'>
              <img src={githublogo} alt="GitHubLogo" className='githublogo' /> GitHub
            </p>
          </a>



        </div >
        <div className='navbar-links'>
          <ul >
            <li><NavLink exact to="/home" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
            <li><NavLink to="/skills" activeClassName="active">Skills</NavLink></li>
          </ul>
        </div>
      </nav >

    </>
  )

}

export default NavBar;
