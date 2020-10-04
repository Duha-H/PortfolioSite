import React from "react";
import { ProjectItem } from "./types";
import "./ProjectCard.css";

interface CardProps {
  project: ProjectItem,
  onInfoClick: () => void;
}

class ProjectCard extends React.Component<CardProps> {
  project: ProjectItem;
  constructor(props: CardProps) {
    super(props);
    this.project = props.project;
  }

  render() {
    return (
      <div className="project-container">
        <div className="image-overlay"></div>
        <img src={this.project.media[0]} className="card-image" alt=""/>
        <div className="info">
          <div className="project-header">
            <h3>{ this.project.title }</h3>
            <div className="spacer"></div>
            <img 
              src={require('../assets/icon_github.svg')}
              className={ this.project.openSource ? 'icon' : 'icon disabled' }
              alt="github"/>
            <img 
              src={require('../assets/icon_info.svg')}
              className="icon"
              style={{ paddingRight: 0, }}
              onClick={() => this.props.onInfoClick() }
              alt="github"/>
          </div>
          <p>{ this.project.excerpt }</p>
          <div className="tech">
            { this.project.tech.slice(0, 3).map(entry => {
              return <p className="tech-item">{ entry }</p>
            }) }
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;