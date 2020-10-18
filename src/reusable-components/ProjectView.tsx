import React from "react";
import { ProjectItem } from "./types";
import { STATUSES } from "./constants";
import "./ProjectView.css";
import projects from "../projects/projectData";
import { Redirect, withRouter } from "react-router-dom";
import ProjectCard from "./ProjectCard";

interface ViewProp {
  project: ProjectItem;
  [key: string]: any;
}

interface ViewState {
  project: ProjectItem | undefined;
  selectedImgIdx: number;
  projectTitle: string;
  displayContent: boolean;
  nextIDs: string[];
}

class ProjectView extends React.Component<any, ViewState> {

  constructor(props: any) {
    super(props);
    this.state = {
      project: projects['traccio'],
      selectedImgIdx: 0,
      projectTitle: '',
      displayContent: false,
      nextIDs: ['3d-modeller', 'terra-pizza'],
    }
  }

  componentDidMount() {
    const { match: { params }} = this.props;
    
    const newProject = projects[this.props.match.params.projectId];
    document.title = `${newProject.title} - Projects | Duha Hassan`;
    this.setNewProject(newProject);
  }

  componentDidUpdate(prevProps: ViewProp) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const newProject = projects[this.props.match.params.projectId];
      this.setNewProject(newProject);
    }
  }

  setNewProject(newProject: ProjectItem) {
    this.setState({
      project: newProject,
      projectTitle: newProject.title, // update later
      displayContent: false,
    });
    this.setNextIDs(newProject.id);
    this.setName(80);
  }

  setName(rate?: number) {
    let index = 0;
    const updateRate = rate ? rate : 150;
    setInterval(() => {
      if (this.state.projectTitle === this.state.project?.title) {
        this.setState({ displayContent: true, });
        return;
      }
      this.setState({ projectTitle: this.state.projectTitle + this.state.project?.title[index], });
      index++;
    }, updateRate);
  }

  setNextIDs(newID: string) {
    if (!this.state.project) {
      return;
    }
    const projectList = Object.values(projects);
    const projectIdx = projectList.findIndex(project => project.id === newID );
    const nextID1 = projectIdx === projectList.length - 1 ? 0 : projectIdx + 1;
    const nextID2 = nextID1 === projectList.length - 1 ? 0 : nextID1 + 1;    
    this.setState({
      nextIDs: [projectList[nextID1].id, projectList[nextID2].id],
    });
  }

  render() {
    if (!this.state.project) {
      return <Redirect to='/projects' />;
    }    
    return (
      <div className="page-content">
        <div className="spanning-content banner">
          <h2 className="title">{ this.state.projectTitle }</h2>
          <div className="spacer"></div>
          <a href={this.state.project.sourceUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={require("../assets/icon_github.svg")} alt="source code"
              className={`icon ${this.state.project.sourceUrl ? '' : 'disabled'}`}
              title={this.state.project.sourceUrl ? 'source code' : 'this project is not open-sourced'}/>
          </a>
          <a href={this.state.project.projectUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={require("../assets/icon_open.svg")} alt="view project"
              className={`icon ${this.state.project.projectUrl ? '' : 'disabled'}`}
              title={this.state.project.projectUrl ? 'view project' : 'this project was not made public'}/>
          </a>
        </div>
        
        <div className={ this.state.displayContent ? 'slide-up' : 'hidden' }>
          <div className="spanning-content baseline">
            
            <div className="project-section" id="multiple">
              <div className="project-section row">
                <h4 className="title">type</h4>
                <p>{ this.state.project.mode }</p>
              </div>
              <div className="project-section row">
                <h4 className="title">status</h4>
                <p id={this.state.project.status}>{ STATUSES[this.state.project.status] }</p>
                <div id={this.state.project.status} className="status-icon"></div>
              </div>
              <div className="project-section row">
                <h4 className="title">tech</h4>
                <p className="tech-item">{ this.state.project.tech.join(' | ') }</p>
              </div>
            </div>

            <div className="project-section">
              <h4 className="title">description</h4>
              <p dangerouslySetInnerHTML={{ __html: this.state.project.description }}></p>
            </div>

          </div>

          { this.state.project.media[1] &&
            <div className="img-viewer">
              <img src={this.state.project.media[1]} alt=""/>
            </div>
          }
          
          <div className="project-section">
            <h4 className="title">why?</h4>
            <p dangerouslySetInnerHTML={{ __html: this.state.project.motivation }}></p>
          </div>
          
          { this.state.project.media[2] &&
            <div className="img-viewer">
              <img src={this.state.project.media[2]} alt=""/>
            </div>
          }

          { this.state.project.appBreakdown && 
            <div className="project-section right">
              <h4 className="title">development details</h4>
              <p dangerouslySetInnerHTML={{ __html: this.state.project.appBreakdown }}></p>
            </div>
          }

          { this.state.project.media[3] &&
            <div className="img-viewer">
              <img src={this.state.project.media[3]} alt=""/>
            </div>
          }

          { this.state.project.contribution && 
            <div className="project-section">
              <h4 className="title">contributions</h4>
              <p dangerouslySetInnerHTML={{ __html: this.state.project.contribution }}></p>
            </div>
          }

          { this.state.project.challenges && 
            <div className="project-section right">
              <h4 className="title">challenges and take-aways</h4>
              <p dangerouslySetInnerHTML={{ __html: this.state.project.challenges }}></p>
            </div>
          }
          
          { this.state.project.media[4] &&
            <div className="img-viewer">
              <img src={this.state.project.media[4]} alt=""/>
            </div>
          }

          { this.state.project.roadmap && 
            <div className="project-section">
              <h4 className="title">roadmap</h4>
              <p dangerouslySetInnerHTML={{ __html: this.state.project.roadmap }}></p>
            </div>
          }
          
          <div className="home">
            <h3 className="section-title">Check out other projects!</h3>
            <div className="projects">
              <ProjectCard project={projects[this.state.nextIDs[0]]} />
              <ProjectCard project={projects[this.state.nextIDs[1]]} />
            </div>
          </div>

        </div>

      </div>
      
    );
  }

}

export default withRouter(ProjectView);