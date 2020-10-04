import React from "react";
import { ProjectItem } from "./types";
import "./ProjectView.css";

interface ViewProp {
  project: ProjectItem;
  onHideClick: () => void;
}

class ProjectView extends React.Component<ViewProp> {

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
        <h3 className="title">{ this.props.project.title }</h3>
      </div>
    );
  }

}

export default ProjectView;