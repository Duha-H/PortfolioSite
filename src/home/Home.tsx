import React from "react";
import "../App.css";
import "./Home.css";
import { NavItemData } from "../reusable-components/types";
import {
  Link,
  NavLink,
  withRouter,
} from "react-router-dom";
import PropTypes from "prop-types";
import projects from "../projects/projectData";
import ProjectCard from "../reusable-components/ProjectCard";
import { languages, libraries, tools } from "../reusable-components/constants";

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
    document.title = 'Portfolio Home | Duha Hassan';
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
          <h2 data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-delay="1100"
              data-aos-once="false"
              data-aos-offset="0">Software Developer</h2>
          <h3 data-aos="fade-right"
              data-aos-easing="ease-in-back"
              data-aos-delay="1100"
              data-aos-offset="0">I'd love to let you know more about myself and my work &#128578;</h3>
        </div>

        <div className="home">
          <h3 className="section-title">About me</h3>
          <div className="row">
            <div className="">
              <p>I'm a <b>recently-graduated software developer</b>, currently based in Toronto. I enjoy experimenting with different technologies, and building pieces of software that solve a problem or make a task slightly easier.</p>
              <p>I haven't always had an interest in software development, but 4 years ago in an inadvertent escape from an Architecture degree I decided to transfer to a Computer Science program, and it has kind of just clicked for me since!</p>
            </div>
            
            <div className="">
              <p>Coming from a background in <b>architectural design</b>, I think I've developed the ability to view projects holistically and anticipate future concerns, as well as a unique attention to minute details. Which, I think, is kind of neat!</p>
              <p>I have quite a bit of learning to do, and I, therefore, find great value in working as part of a team. I do my best to be a teammate I would want to have, and I greatly value communication in as a team member above all else.</p>
              <p className="prompt"><NavLink to="/about" className="link">read more</NavLink><img className="icon" src={require('../assets/icon_arrow.svg')} alt=""/></p>
            </div>
          </div>
        </div>

        <div className="home">
          <h3 className="section-title">Skills</h3>
          <p>Whenever possible, I do my best to select the most appropriate tools for a project &#128296;. This gives me a greater chance to become familiar with a variety of tools and tech stacks out there.</p>
          <p>Here are some <b>technical tools I'm familiar with:</b></p>
          <ul className="skills">
            <li>
              <div>
                <p className="title"><img src={require('../assets/icon_skills.svg')} className="icon" alt=""/> Languages</p>
                <div className="skill-group">
                  { languages.map(language => <p className="tech-item">{ language }</p>) }
                </div>
              </div>
            </li>
            <li>
              <div>
                <p className="title"><img src={require('../assets/icon_skills.svg')} className="icon" alt=""/> Libraries, APIs, Frameworks</p>
                <div className="skill-group">
                  { libraries.map(library => <p className="tech-item">{ library }</p>) }
                </div>
              </div>
            </li>
            <li>
              <div>
                <p className="title"><img src={require('../assets/icon_skills.svg')} className="icon" alt=""/> Platforms, Databases, Tools</p>
                <div className="skill-group">
                  { tools.map(tool => <p className="tech-item">{ tool }</p>) }
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="home">
          <h3 className="section-title">Select Projects</h3>
          <div className="projects">
            <ProjectCard project={this.projects[0]} />
            <ProjectCard project={this.projects[1]} />
            <ProjectCard project={this.projects[2]} />
          </div>
          <p className="prompt"><NavLink to="/projects" className="link">view more</NavLink><img className="icon" src={require('../assets/icon_arrow.svg')} alt=""/></p>
        </div>

        <div className="home confined">
          <h3 className="section-title">Connect</h3>
          <p>I'm currently in the market for employment, so I'd love to hear from you if you're looking for a developer, or would just like to collaborate or chat about cool stuff!</p>
          <p className="prompt">Shoot me an &nbsp; <a href="mailto:duha.h.153@gmail.com">email</a><img src={require('../assets/icon_contact.svg')} alt="contact" className="icon"/></p>
          <p className="prompt">Or connect with me on &nbsp; <a href="mailto:duha.h.153@gmail.com">linkedin</a><img src={require('../assets/icon_linkedin.svg')} alt="contact" className="icon"/></p>
        </div>

        <div className="home" style={{ width: '100%', }} data-aos="fade-up">
          <p className="prompt" style={{ justifyContent: 'center', }}>Check out this portfolio's &nbsp; <a href="https://github.com/Duha-H/website">repository on github</a><img className="icon" src={require('../assets/icon_github.svg')} alt=""/>!</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
