import React from "react";
import { ProjectItem } from "./types";
import "./ProjectCard.css";

interface CardProps {
  project: ProjectItem,
  onInfoClick: () => void;
  onClick: () => void;
}

class ProjectCard extends React.Component<CardProps> {
  project: ProjectItem;
  constructor(props: CardProps) {
    super(props);
    this.project = props.project;
  }

  render() {
    return (
      <div className="project-container" onClick={ () => this.props.onClick() }>
        <div className="image-overlay"></div>
        <img src={this.project.media[0]} className="card-image" alt=""/>
        <div className="info">
          <div className="project-header">
            <h3>{ this.project.title }</h3>
            <div className="spacer"></div>
            <a href={ this.props.project.sourceUrl } target="_blank" rel="noopener noreferrer">
              <img 
                src={require('../assets/icon_github.svg')}
                className={ this.project.openSource ? 'icon' : 'icon disabled' }
                alt="github"/>
            </a>
            <a href={ this.props.project.projectUrl } target="_blank" rel="noopener noreferrer">
              <img 
                src={require('../assets/icon_open.svg')}
                className={ this.project.projectUrl ? 'icon' : 'icon disabled' }
                style={{ paddingRight: 0, }}
                onClick={() => this.props.onInfoClick() }
                alt="visit"/>
            </a>
            
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