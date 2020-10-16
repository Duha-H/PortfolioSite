import React from "react";
import "../App.css";
import "./Home.css";
import { NavItemData } from "../reusable-components/types";
import {
  Link,
  withRouter,
} from "react-router-dom";
import PropTypes from "prop-types";
import projects from "../projects/projectData";
import ProjectCard from "../reusable-components/ProjectCard";

interface StateType {
  // theme: 'dark' | 'light';
  name: string;
}

class Home extends React.Component<any, StateType> {
  navItems: NavItemData[] = [
    { text: 'home', iconSrc: require('../assets/icon_home.svg'), link: '/' },
    { text: 'about me', iconSrc: require('../assets/icon_about.svg'), link: '/about' },
    { text: 'projects', iconSrc: require('../assets/icon_projects.svg'), link: '/projects' },
    { text: 'background', iconSrc: require('../assets/icon_skills.svg'), link: '/skills' },
  ];
  projects = Object.values(projects).slice(0, 3);
  me = 'Duha Hassan';
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  }

  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
    }
  }

  componentDidMount() {
    this.setName();
  }

  setName() {
    let index = 0;
    setInterval(() => {
      if (this.state.name === this.me) {
        return;
      }
      this.setState({ name: this.state.name + this.me[index], });
      index++;
    }, 150);
  }

  render() {
    return (
      <div className="page-content" id="center">
        <div className="home">
          <h3 style={{color: 'var(--text)'}}>Hi there! I'm</h3>
          <div className="typewritten">
            <h1 id="name">{ this.state.name }</h1><h1 id="blink">|</h1>
          </div>
          <h2>Software Developer</h2>
          <h3>I'd love to let you know more about myself and my work :)</h3>
          <a href="mailto:duha.h.153@gmail.com" className="button">
            <img src={require('../assets/icon_contact.svg')} alt="contact" className="icon"/>
             Get in touch
          </a>
        </div>

        <div className="home row">
          <div className="">
            <p>I'm a recently-graduated software developer, currently based in Toronto. I enjoy building pieces of software that solve a problem, or make a task slightly easier!</p>
            <p>I haven't always had an interest in software development, but 4 years ago in an inadvertent escape from an Architecture degree (2/10 would not recommend &#128578;) I decided to transfer to a Computer Science program, and it has kind of just clicked for me since. Coming from a background in architectural design projects, I think I've developed the ability to view projects holistically and anticipate future concerns, as well as a unique attention to minute details. Which, I think, is kind of neat!</p>
            <p>I have quite a bit of learning to do (to say the least), and I, therefore, find great value in working as part of a team. I do my best to be a teammate I would want to have, and I greatly value communication in as a team member above all else.</p>
            <Link to="/about" className="link">read more</Link>
          </div>
        </div>

        <div className="home">
          <h3 className="section-title">Select Projects</h3>
          <div className="projects">
            <ProjectCard project={this.projects[0]} />
            <ProjectCard project={this.projects[1]} />
            <ProjectCard project={this.projects[2]} />
          </div>
          <Link to="/projects" className="link">view more</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
