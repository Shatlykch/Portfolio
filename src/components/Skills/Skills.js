import React from "react";


import skillsdata from "../data/skillsdata.json";
import experience from "../data/experience.json";
import { getImg } from "../../utils.js";
import "../Skills/skills.css";

const Skills = () => {

  return ( <>
    <h2 className='stitle'>Skills & Experience</h2>
    <section className='scontainer' id="sexperience">

      <div className='scontent'>
        <div className='sskills'>
          {skillsdata.map( ( skill, id ) => {
            return (
              <div key={id} className='sskill'>
                <div className='sskillImageContainer'>

                  <img src={getImg( skill.title )} alt={skill.title} />
                </div>
                <p className="sskillTitle">{skill.title}</p>
              </div>
            );
          } )}
        </div>
        <ul className='shistory'>
          {experience.map( ( experienceItem, id ) => {
            return (
              <li key={id} className='sexperienceItem'>
                <img
                  src={getImg( experienceItem.title )}
                  alt={`${experienceItem.title} Logo`}
                />
                <div className='sexperienceItemDetails'>
                  <h3>{`${experienceItem.role},`}</h3> <h3>{`${experienceItem.organisation}`}</h3>
                  <p>{`${experienceItem.startDate} - ${experienceItem.endDate}`}</p>
                  <ul>
                    {experienceItem.experiences.map( ( experience, id ) => {
                      return <li key={id}>{experience}</li>;
                    } )}
                  </ul>
                </div>
              </li>
            );
          } )}
        </ul>
      </div>
    </section></>
  );
};

export default Skills;