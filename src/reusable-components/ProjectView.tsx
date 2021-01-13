import React, { RefObject } from "react";
import { ProjectItem } from "./types";
import { STATUSES } from "./constants";
import "./ProjectView.css";
import projects from "../projects/projectData";
import { NavLink, Redirect, withRouter } from "react-router-dom";
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
  projectMounted: boolean;
}

class ProjectView extends React.Component<any, ViewState> {

  descriptionRef = React.createRef<HTMLDivElement>();
  whyRef = React.createRef<HTMLDivElement>();
  breakdownRef = React.createRef<HTMLDivElement>();
  contributionsRef = React.createRef<HTMLDivElement>();
  takeawaysRef = React.createRef<HTMLDivElement>();
  roadmapRef = React.createRef<HTMLDivElement>();

  constructor(props: any) {
    super(props);
    this.state = {
      project: undefined,
      selectedImgIdx: 0,
      projectTitle: '',
      displayContent: false,
      nextIDs: ['3d-modeller', 'terra-pizza'],
      projectMounted: false,
    }
  }

  componentDidMount() {
    this.setState({ projectMounted: true, });
    const { match: { params }} = this.props;
    const newProject = projects[this.props.match.params.projectId];
    if (newProject) {
      document.title = `${newProject.title} - Projects | Duha Hassan`;
      this.setNewProject(newProject);
    }
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
      projectMounted: true,
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

  goToSection(ref: RefObject<HTMLDivElement>) {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  render() {
    if (this.state.projectMounted && !this.state.project) {
      return <Redirect to='/404' />;
    } else if (!this.state.project) {
      return <div></div>; // placeholder while re-rendering occurs
    }
    return (
      <div className="page-content">
        <div className="banner">
          <div className="spanning-content">
            <img className="icon" src={require('../assets/icon_arrow_left.svg')} alt="left arrow"/>
            <NavLink to={'/projects'} className="link" id="link-projects">Projects</NavLink>
          </div>
          <div className="spanning-content">
            <h2 className="title">{ this.state.projectTitle }</h2>
            <div className="spacer"></div>
            <a href={this.state.project.sourceUrl} target="_blank" rel="noopener noreferrer" id={`link-${this.state.project.id}-github`}>
              <img
                src={require("../assets/icon_github.svg")} alt="view source code icon"
                className={`icon ${this.state.project.sourceUrl ? '' : 'disabled'}`}
                title={this.state.project.sourceUrl ? 'source code' : 'this project is not open-sourced'}/>
            </a>
            <a href={this.state.project.projectUrl} target="_blank" rel="noopener noreferrer" id={`link-${this.state.project.id}-live`}>
              <img
                src={require("../assets/icon_open.svg")} alt="view project icon"
                className={`icon ${this.state.project.projectUrl ? '' : 'disabled'}`}
                title={this.state.project.projectUrl ? 'view project' : 'this project was not made public'}/>
            </a>
          </div>
        </div>
        
        <div className="flex-row">
          <div className={ this.state.displayContent ? 'slide-up' : 'hidden' }>
            <div className="spanning-content baseline">
              <div className="project-section multiple">
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
              <div className="project-section" id="description" ref={this.descriptionRef}>
                <h4 className="title">description</h4>
                <p dangerouslySetInnerHTML={{ __html: this.state.project.description }}></p>
              </div>
            </div>

            { this.state.project.media[1] &&
              <div className="img-viewer" data-aos="fade-up">
                <img src={this.state.project.media[1].content} alt={this.state.project.media[1].altText} />
              </div>
            }
            
            <div className="project-section" data-aos="fade-left" id="why" ref={this.whyRef}>
              <h4 className="title">why?</h4>
              <p dangerouslySetInnerHTML={{ __html: this.state.project.motivation }}></p>
            </div>
            
            { this.state.project.media[2] &&
              <div className="img-viewer" data-aos="fade-up">
                <img src={this.state.project.media[2].content} alt={this.state.project.media[2].altText} />
              </div>
            }

            { this.state.project.appBreakdown && 
              <div className="project-section right" data-aos="fade-right" id="breakdown" ref={this.breakdownRef}>
                <h4 className="title">development details</h4>
                <p dangerouslySetInnerHTML={{ __html: this.state.project.appBreakdown }}></p>
              </div>
            }

            { this.state.project.media[3] &&
              <div className="img-viewer" data-aos="fade-up">
                <img src={this.state.project.media[3].content} alt={this.state.project.media[3].altText} />
              </div>
            }

            { this.state.project.contribution && 
              <div className="project-section" data-aos="fade-left" id="contributions" ref={this.contributionsRef}>
                <h4 className="title">contributions</h4>
                <p dangerouslySetInnerHTML={{ __html: this.state.project.contribution }}></p>
              </div>
            }

            { this.state.project.challenges && 
              <div className="project-section right" data-aos="fade-right" id="takeaways" ref={this.takeawaysRef}>
                <h4 className="title">challenges and take-aways</h4>
                <p dangerouslySetInnerHTML={{ __html: this.state.project.challenges }}></p>
              </div>
            }
            
            { this.state.project.media[4] &&
              <div className="img-viewer" data-aos="fade-up">
                <img src={this.state.project.media[4].content} alt={this.state.project.media[4].altText} />
              </div>
            }

            { this.state.project.roadmap && 
              <div className="project-section" data-aos="fade-left" id="roadmap" ref={this.roadmapRef}>
                <h4 className="title">roadmap</h4>
                <p dangerouslySetInnerHTML={{ __html: this.state.project.roadmap }}></p>
              </div>
            }
            
            <div className="home" data-aos="fade-up">
              <h3 className="section-title">Check out other projects!</h3>
              <div className="projects">
                <ProjectCard project={projects[this.state.nextIDs[0]]} />
                <ProjectCard project={projects[this.state.nextIDs[1]]} />
              </div>
            </div>

          </div>
          <nav className="sidebar">
            <ul>
              On this page
              <li>
                <button onClick={() => this.goToSection(this.descriptionRef)}>description</button>
              </li>
              <li>
                <button onClick={() => this.goToSection(this.whyRef)}>why</button>
              </li>
              { this.state.project.appBreakdown && <li>
                  <button onClick={() => this.goToSection(this.breakdownRef)}>development details</button>
                </li> }
              { this.state.project.contribution && <li>
                  <button onClick={() => this.goToSection(this.contributionsRef)}>contribution</button>
                </li> }
              { this.state.project.challenges && <li>
                  <button onClick={() => this.goToSection(this.takeawaysRef)}>take-aways</button>
                </li> }
              { this.state.project.roadmap && <li>
                  <button onClick={() => this.goToSection(this.roadmapRef)}>roadmap</button>
                </li> }
            </ul>
          </nav>
        </div>
        

      </div>
      
    );
  }

}

export default withRouter(ProjectView);