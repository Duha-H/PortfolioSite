import React from "react";
import { ProjectItem } from "./types";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

interface CardProps {
  project: ProjectItem,
}

class ProjectCard extends React.Component<CardProps, CardProps> {
  // project: ProjectItem;
  constructor(props: CardProps) {
    super(props);
    // this.project = props.project;
    this.state = {
      project: props.project,
    }
  }

  componentDidUpdate(prevProps: CardProps) {
    if (this.props.project.id !== prevProps.project.id) {
      this.setState({ project: this.props.project, });
    }
  }

  render() {
    return (
      <div className="project-container">
        <Link to={`/projects/${this.state.project.id}`}>
          <div className="image-overlay"></div>
          <img src={this.state.project.media[0]} className="card-image" alt=""/>
          <div className="info">
            <div className="project-header">
              <h3>{ this.state.project.title }</h3>
              <div className="spacer"></div>
              <a href={ this.props.project.sourceUrl } target="_blank" rel="noopener noreferrer">
                <img 
                  src={require('../assets/icon_github.svg')}
                  className={ this.state.project.openSource ? 'icon' : 'icon disabled' }
                  alt="github"/>
              </a>
              <a href={ this.props.project.projectUrl } target="_blank" rel="noopener noreferrer">
                <img 
                  src={require('../assets/icon_open.svg')}
                  className={ this.state.project.projectUrl ? 'icon' : 'icon disabled' }
                  style={{ paddingRight: 0, }}
                  alt="visit"/>
              </a>
              
            </div>
            <p>{ this.state.project.excerpt }</p>
            <div className="tech">
              { this.state.project.tech.slice(0, 3).map(entry => {
                return <p className="tech-item">{ entry }</p>
              }) }
            </div>
          </div>
        </Link>
        
      </div>
    );
  }
}

export default ProjectCard;