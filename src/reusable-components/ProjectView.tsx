import React from "react";
import { ProjectItem } from "./types";
import "./ProjectView.css";
import projects from "../projects/projectData";

interface ViewProp {
  project: ProjectItem;
  // onHideClick: () => void;
  [key: string]: any;
}

interface ViewState {
  selectedImgIdx: number;
  projectTitle: string;
}

class ProjectView extends React.Component<ViewProp, ViewState> {

  project: ProjectItem | undefined;
  constructor(props: any) {
    super(props);
    this.state = {
      selectedImgIdx: 0,
      projectTitle: '',
    }
    this.project = projects[0];
  }

  componentDidMount() {
    const { match: { params }} = this.props;
    this.project = projects[+this.props.match.params.projectId];
    // if (this.props.match.params.mode === 'solo') {
    //   this.project = soloProjects.find(project => {
    //     return project.id === +this.props.match.params.projectId;
    //   });
    // } else {
    //   this.project = teamProjects.find(project => {
    //     return project.id === +this.props.match.params.projectId;
    //   });
    // }
    this.setName(100);
  }

  componentDidUpdate(prevProps: ViewProp) {
    // if (prevProps.project.id !== this.props.project.id) {
    //   this.setState({ selectedImgIdx: 0 });
    // }
  }

  setName(rate?: number) {
    let index = 0;
    const updateRate = rate ? rate : 150;
    setInterval(() => {
      if (this.state.projectTitle === this.project?.title) {
        return;
      }
      this.setState({ projectTitle: this.state.projectTitle + this.project?.title[index], });
      index++;
    }, updateRate);
  }

  render() {
    if (!this.project) {
      return (
        <div className=""></div>
      );
    }
    return (
      <div className="view-container">
        <div className="view-header">
          <div className="spacer"></div>
          <img
            src={require('../assets/icon_clear_1.svg')}
            alt="hide project"
            className="icon"
            style={{ paddingRight: 0, }}
            onClick={ () => this.props.onHideClick() } />
        </div>
        <div className="spanning-content">
          <h2 className="title">{ this.state.projectTitle }&nbsp;</h2>
          <h2 id="blink">|</h2>
        </div>
        
        <div className="img-viewer">
          <img className="main" src={this.project.media[this.state.selectedImgIdx]} alt={`${this.project.title} preview`} />
          {/* <div className="images">
            { this.project.media.map((image, idx) => {
              return (
                <img src={image}
                  alt="preview"
                  onClick={() => this.setState({ selectedImgIdx: idx, }) }/>
              )
            }) }
          </div> */}
        </div>

        <div className="project-section">
          <p className="title">description</p>
          <p>{ this.project.description }</p>
        </div>

        <div className="project-section row">
          <p className="title">tech</p>
          <p className="tech-item">{ this.project.tech.join(' \u25AA ') }</p>
        </div>

        <div className="project-section row">
          <p className="title">view source</p>
          { this.project.openSource
            ? <a href={this.project.sourceUrl} target="_blank" rel="noopener noreferrer">
              <img src={require("../assets/icon_github.svg")} alt="" className="icon"/>
              </a>
            : <p>This project is, unfortunately, not open sourced.</p>
          }
        </div>

        { this.project.projectUrl && 
          <div className="project-section row">
            <p className="title">view project</p>
            <a href={this.project.sourceUrl} target="_blank" rel="noopener noreferrer">
              <img src={require("../assets/icon_open.svg")} alt="" className="icon"/>
            </a>
          </div>
        }
      </div>
    );
  }

}

export default ProjectView;