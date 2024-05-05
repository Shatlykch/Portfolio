import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbarstyle.css';
import { Link } from 'react-router-dom';




function NavBar () {

  function showSidebar () {
    const sidebar = document.querySelector( '.sidebar' );
    sidebar.style.display = 'flex';
  }
  function hideSidebar () {
    const sidebar = document.querySelector( '.sidebar' );
    sidebar.style.display = 'none';
  }

  return (
    <>

      <nav className='navbar'>
        <Link to="/" className='brand-title'>Shatlyk Ch</Link>



        <div className='navbar-links'>
          <ul className='sidebar' >
            <li><NavLink to='#' className='close-button' onClick={hideSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></NavLink></li>
            <li><NavLink to="/home" className='home-button' activeClassName="active" onClick={hideSidebar}>Home</NavLink></li>
            <li><NavLink to="/about" activeClassName="active" onClick={hideSidebar}>About</NavLink></li>
            <li><NavLink to="/projects" activeClassName="active" onClick={hideSidebar}>Projects</NavLink></li>
            <li><NavLink to="/skills" activeClassName="active" onClick={hideSidebar}>Skills</NavLink></li>
          </ul>
          <ul >
            <li><NavLink to="/home" className='hideOnMobile'>Home</NavLink></li>
            <li><NavLink to="/about" className='hideOnMobile'>About</NavLink></li>
            <li><NavLink to="/projects" className='hideOnMobile'>Projects</NavLink></li>
            <li><NavLink to="/skills" className='hideOnMobile'>Skills</NavLink></li>
            <li className='menu-button'><NavLink to='#' onClick={showSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></NavLink></li>

          </ul>
        </div>
      </nav >

    </>
  )

}

export default NavBar;
