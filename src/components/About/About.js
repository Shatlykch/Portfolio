import './About.css'
import aboutMeImage from "../../assets/about/photo.jpg";
import logo from '../../assets/about/logo.png';
import galogo from '../../assets/about/galogo.png'
import React from "react";




const About = () => {
  return (
    <div className="aboutPage">
      <section className='acontainer' id="aabout">

        <div className='acontent'>
          <div className='aphotodiv'> <img
            src={aboutMeImage}
            alt="Me sitting with a laptop"
            className='aphoto'
          /> </div>
          <ul className='aaboutItems'>
            <li className='aaboutItem'>
              {/* <img src={cursorIcon} alt="Cursor icon" /> */}
              <div className='aaboutItemText'>
                <h2 className='atitle'>My story</h2>

                <p className='about'>
                  My journey into software engineering was driven by a combination of fascination with technology and a desire for personal and professional growth. While working in the oil and gas industry for the past 15 years, I encountered various challenges related to logistics, supply chain management, and operations optimization. I realized that technology plays a crucial role in addressing these challenges and driving efficiency and innovation in the industry. This realization sparked my interest in software engineering, as I saw it as an opportunity to leverage technology to solve complex problems and make a positive impact.

                </p>
              </div>
            </li>

          </ul>
        </div>
      </section>

      <section className='aedu-section'>
        <h2 className='aedu-title'>EDUCATION</h2>
        <div className="cardContainer">
          <card className='acard1'> <img className='alogo' src={galogo} alt='galogo' />

            <h3>GENERAL ASSEMBLY | IN-PERSON | New York</h3>
            <h4>Software Engineering Immersive| 500+ hour Full-stack software engineering program</h4>

            <h4>January 2024 - April 2024 </h4>
          </card>
          <card className='acard2'>
            <img className='alogo1' src={logo} alt='alogo1' />

            <h3>STATE INSTITUTE OF MANAGEMENT AND ECONOMY | Ashgabat</h3>
            <h4>Bachelor of Science in Marketing Management and Research </h4>
            <h4>Graduated with a GPA of 4.0/4.0</h4>

          </card>
        </div>
      </section>
    </div>
  );
};

export default About;