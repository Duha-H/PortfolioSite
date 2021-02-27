import React from "react";
import { ProjectItem } from "./types";
import "./ProjectCard.css";
import { Redirect, } from "react-router-dom";

interface CardProps {
  project: ProjectItem,
  navigate?: boolean,
}

interface CardState {
  project: ProjectItem,
  navigate: boolean,
}

class ProjectCard extends React.Component<CardProps, CardState> {

  constructor(props: CardProps) {
    super(props);
    this.state = {
      project: props.project,
      navigate: false,
    }
    
  }

  componentDidUpdate(prevProps: CardProps) {
    if (this.props.project.id !== prevProps.project.id) {
      this.setState({ project: this.props.project, });      
    }
  }

  onNavigate() {
    this.setState({ navigate: false });
  }

  render() {
    if (this.state.navigate) {
      this.onNavigate();
      return <Redirect to={{ pathname:`/projects/${this.props.project.id}`, state: { project: this.props.project }}} push />;
    } else if (!this.state.project) {
      return <div></div>;
    }

    return (
      <div className="project-container">
        <button
          onClick={() => this.setState({navigate: true})}
          className="link-parent"
          id={`link-${this.props.project.id}`}>
          <div className="image-overlay" style={{backgroundImage: `url(${this.props.project.media[0].content})`,}}></div>
          <div className="info">
            <div className="project-header">
              <h3>{ this.props.project.title }</h3>
              <div className="spacer"></div>
              <a href={ this.props.project.sourceUrl } target="_blank" rel="noopener noreferrer" id={`link-${this.props.project.id}-github`}>
                <img 
                  src={require('../assets/icon_github.svg')}
                  className={ this.props.project.openSource ? 'icon' : 'icon disabled' }
                  alt="view source code icon"/>
              </a>
              <a href={ this.props.project.projectUrl } target="_blank" rel="noopener noreferrer" id={`link-${this.props.project.id}-view`}>
                <img 
                  src={require('../assets/icon_open.svg')}
                  className={ this.props.project.projectUrl ? 'icon' : 'icon disabled' }
                  style={{ paddingRight: 0, }}
                  alt="view project icon"/>
              </a>
            </div>
            <p>{ this.props.project.excerpt }</p>
            <div className="tech">
              { this.props.project.tech.slice(0, 3).map(entry => {
                return <p className="tech-item">{ entry }</p>
              }) }
            </div>
          </div>
        </button>
        
      </div>
    );
  }
}

export default ProjectCard;