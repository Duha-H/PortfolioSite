import React from "react";
import "./Skills.css";

class Skills extends React.Component {
  render() {
    return (
      <div className="page-content skills">
        <div className="spanning-content">
          <h2>Technical Background</h2>
          <div className="spacer"></div>
          <a href="#skills" className="title">Skills</a>
          <a href="#education" className="title">Education</a>
          <a href="#experience" className="title">Experience</a>
        </div>
        <div className="bg-section">
          <p className="title">Skills</p>
        </div>

        <div className="bg-section">
          <p className="title">Education</p>
        </div>

        <div className="bg-section">
          <p className="title">Experience</p>
        </div>
      </div>
    );
  }
}

export default Skills;