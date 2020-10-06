import React from "react";
import ProjectCard from "../reusable-components/ProjectCard";
import ProjectView from "../reusable-components/ProjectView";
import { ProjectItem } from "../reusable-components/types";
import { soloProjects, teamProjects } from "./projectData";
import "./Projects";
import "./Projects.css";

interface ProjectsState {
  selectedProject?: ProjectItem;
}

class Projects extends React.Component<any, ProjectsState>{
  // projects = data;
  soloProjects = soloProjects;
  teamProjects = teamProjects;
  constructor(props: any) {
    super(props);
    this.state = {
      selectedProject: undefined,
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
          <div className="">
            <h2 className="section-title">Projects I Built&nbsp;&nbsp;</h2>
            <div className="projects">
              { this.soloProjects.map(project => {
                return <ProjectCard project={project} onInfoClick={() => this.displayProject(project)} />
              })}
            </div>
            <h2 className="section-title">Projects I Contributed to&nbsp;&nbsp;</h2>
            <div className="projects">
              { this.teamProjects.map(project => {
                return <ProjectCard project={project} onInfoClick={() => this.displayProject(project)} />
              })}
            </div>
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