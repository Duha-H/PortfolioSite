import React from "react";
import ProjectCard from "../reusable-components/ProjectCard";
import ProjectView from "../reusable-components/ProjectView";
import { ProjectItem } from "../reusable-components/types";
import data from "./projectData";
import "./Projects";
import "./Projects.css";

interface ProjectsState {
  selectedProject?: ProjectItem;
}

class Projects extends React.Component<any, ProjectsState>{
  projects = data;
  constructor(props: any) {
    super(props);
    this.state = {
      selectedProject: this.projects[0],
    }
  }

  displayProject(project: ProjectItem) {
    this.setState({ selectedProject: project });
  }

  hideProject() {
    this.setState({ selectedProject: undefined });
  }

  render() {
    return (
      <div className="page-content" style={{ maxWidth: '1500px' }}>
        <h2>Projects</h2>
        <div className="projects-parent">
          <div className="projects">
            { this.projects.map(project => {
              return <ProjectCard project={project} onInfoClick={() => this.displayProject(project)} />
            })}
          </div>
          { this.state.selectedProject &&
            <ProjectView
              project={this.state.selectedProject}
              onHideClick={ () => this.hideProject() } />
          }
        </div>
        
      </div>
    );
  }
}

export default Projects;