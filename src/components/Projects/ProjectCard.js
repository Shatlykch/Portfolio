import React from "react";
import "./ProjectsStyles.css";
import { getImg } from "../../utils";
import project from "../data/Projects.json"

const ProjectCard = ( {
  project: { title, imageSrc, description, skills, GitHub, appSource },
} ) => {
  return (
    <div className="containe">
      <img
        src={getImg( title )} alt={project.title}
        className="image" />

      <h3 className="ptitle">{title}</h3>
      <p className="description">{description}</p>
      <ul className="skills">
        {skills.map( ( skill, id ) => {
          return (
            <li key={id} className="skill">
              {skill}
            </li>
          );
        } )}
      </ul>
      <div className="links">
        <a href={GitHub} className="link">
          GitHub
        </a>
        <a href={appSource} className="link">
          Site
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
