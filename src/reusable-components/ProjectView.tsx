import React from "react";
import { ProjectItem } from "./types";
import "./ProjectView.css";

interface ViewProp {
  project: ProjectItem;
  onHideClick: () => void;
}

interface ViewState {
  selectedImgIdx: number;
}

class ProjectView extends React.Component<ViewProp, ViewState> {

  constructor(props: any) {
    super(props);
    this.state = {
      selectedImgIdx: 0,
    }
  }

  componentDidUpdate(prevProps: ViewProp) {
    if (prevProps.project.id !== this.props.project.id) {
      this.setState({ selectedImgIdx: 0 });
    }
  }

  render() {
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
        <h3 className="title">{ this.props.project.title }&nbsp;</h3>
        <div className="img-viewer">
          <img className="main" src={this.props.project.media[this.state.selectedImgIdx]} alt={`${this.props.project.title} preview`} />
          <div className="images">
            { this.props.project.media.map((image, idx) => {
              return (
                <img src={image}
                  alt="preview"
                  onClick={() => this.setState({ selectedImgIdx: idx, }) }/>
              )
            }) }
          </div>
        </div>

        <div className="project-section">
          <p className="title">description</p>
          <p>{ this.props.project.description }</p>
        </div>

        <div className="project-section row">
          <p className="title">tech</p>
          <p className="tech-item">{ this.props.project.tech.join(' \u25AA ') }</p>
        </div>

        <div className="project-section row">
          <p className="title">view source</p>
          { this.props.project.openSource
            ? <a href={this.props.project.sourceUrl} target="_blank" rel="noopener noreferrer">
              <img src={require("../assets/icon_github.svg")} alt="" className="icon"/>
              </a>
            : <p>This project is, unfortunately, not open sourced.</p>
          }
        </div>

        { this.props.project.projectUrl && 
          <div className="project-section row">
            <p className="title">view project</p>
            <a href={this.props.project.sourceUrl} target="_blank" rel="noopener noreferrer">
              <img src={require("../assets/icon_open.svg")} alt="" className="icon"/>
            </a>
          </div>
        }
      </div>
    );
  }

}

export default ProjectView;