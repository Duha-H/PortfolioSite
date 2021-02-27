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

  componentDidMount() {
    document.title = 'Projects | Duha Hassan';
  }

  render() {
    return (
      <div className="page-content">
        <h2>Projects</h2>
        <p>Below is a selection of projects that I built or contributed to. Click on a project to learn more about it! &#10024;</p>
        <div className="projects-parent slide-up">
          <div className="">
            <div className="projects">
              { projects.map(project => {
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