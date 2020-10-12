import React from "react";
import ProjectCard from "../reusable-components/ProjectCard";
import { ProjectItem } from "../reusable-components/types";
import projects from "./projectData";
import "./Projects";
import "./Projects.css";

interface ProjectsState {
  selectedProject?: ProjectItem;
}

class Projects extends React.Component {

  render() {
    return (
      <div className="page-content">
        <h2>Projects</h2>
        <p>Below is a selection of projects that I've built or contributed to. Click on a project to learn more about it! &#10024;</p>
        <div className="projects-parent">
          <div className="">
            <div className="projects">
              { Object.values(projects).map(project => {
                return <ProjectCard project={project} />
              }) }
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Projects;