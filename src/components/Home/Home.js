import React from "react";
import '../../index.js'
import './Home.css';
import Lottie from "lottie-react";
import Animation from '../../../src/assets/Animation.json';
import Typewriter from "typewriter-effect";
import resumePDF from '../../../src/assets/Home/shatlykresume.pdf'

function Home () {



  const openResume = () => {
    window.open( resumePDF, '_blank' );
  };

  return (
    <>
      <div className="container">
        <div>
          <h1 className="home">
            <p className="typewriter-text">
              <Typewriter
                options={{
                  strings: ["Hey there, I'm Shatlyk!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>


            <br />
            <p className="brand">As an enthusiastic software engineer, I am deeply committed to

              expanding my coding skills and knowledge. I am passionate,

              about crafting innovative and user-friendly web and mobile

              applications, and I am actively learning and mastering

              technologies like JavaScript, React, Node.js, and React

              Native to achieve this goal. My aim is to deliver high-quality

              solutions that not only meet client needs but so exceed expectations.</p >
          </h1 >
          <button className="resume-button" onClick={openResume}>See my Resume</button>
        </div >
        <div className="animation">
          <Lottie loop={true} animationData={Animation} />
        </div>
      </div >
    </>
  );
}

export default Home;
