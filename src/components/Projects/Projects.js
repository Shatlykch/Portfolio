import React from "react";
import projects from "../data/Projects.json";
import ProjectCard from "./ProjectCard";
import "./ProjectsStyles.css";
const Projects = () => {
  return (
    <>
      <h2 className='title'>Projects</h2>
      <section className='containers' id="projects">

        <div className='projects'>
          {projects.map( ( project, id ) => {
            return <ProjectCard key={id} project={project} />;
          } )}
        </div>
      </section>
    </>
  );
};

export default Projects;