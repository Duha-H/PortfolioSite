import React from "react";
import "../App.css";
import "./Home.css";
import { NavItemData } from "../reusable-components/types";
import {
  NavLink,
  withRouter,
} from "react-router-dom";
import PropTypes from "prop-types";
import projects from "../projects/projectData";
import ProjectCard from "../reusable-components/ProjectCard";
import { languages, libraries, tools } from "../reusable-components/constants";
import { SkillBubble } from "../reusable-components/SkillBubble";

interface StateType {
  // theme: 'dark' | 'light';
  name: string;
  visibleSkillSection: 'languages' | 'libraries' | 'tools';
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
  visibleSection: 'languages' | 'libraries' | 'tools' = 'languages';

  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      visibleSkillSection: 'languages',
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

  toggleSkillSection(section: 'languages' | 'libraries' | 'tools') {
    this.setState({visibleSkillSection: section});    
  }

  render() {
    return (
      <div className="page-content" id="center">
        <div className="home">
          <h3 style={{color: 'var(--text)'}}>Hi there! I'm</h3>
          <div className="typewritten">
            <h1 id="name">{ this.state.name }</h1><h1 id="blink">|</h1>
          </div>
          <div className=""
            style={{width: '100%', }}
            data-aos="fade-down"
            data-aos-easing="ease-in-back"
            data-aos-delay="1100"
            data-aos-once="false"
            data-aos-offset="0">
            <h2>Software Developer</h2>
            <h3>I'd love to let you know more about myself and my work &#128578;</h3>
          </div>
          
        </div>

        <div className="home">
          <h3 className="section-title">About me</h3>
          <div className="row">
            <div className="">
              <p>I'm a <b>recently-graduated software developer</b>, currently based in Toronto. I enjoy experimenting with different technologies, and building pieces of software that solve a problem or make a task slightly easier.</p>
              <p>I haven't always had an interest in software development, but 4 years ago, in an inadvertent escape from an Architecture degree, I decided to transfer to a Computer Science program. It has kind of just clicked for me since!</p>
            </div>
            
            <div className="">
              <p>Coming from a background in architectural design projects, I think I've developed an ability to view projects holistically and anticipate future concerns, as well as an attention to minute details. Which, I think, is kind of neat!</p>
              <p>I have a lot of learning to do, so I find great value in working as part of a team. I do my best to be a teammate I would want to have, and I greatly value communication as a team member above all else.</p>
              <p className="prompt">
                <NavLink to="/about" className="link" id="link-about">read more</NavLink>
                <img className="icon" src={require('../assets/icon_arrow.svg')} alt="right arrow"/>
              </p>
            </div>
          </div>
        </div>

        <div className="home">
          <h3 className="section-title">Skills</h3>
          <p>Whenever possible, I do my best to select the most appropriate tools for a project &#128296;. This gives me a greater chance to become familiar with a variety of tools and tech stacks out there.</p>
          <p>Here are some <b>technical tools I'm familiar with:</b></p>
          <ul className="skill-nav">
            <li
              className={this.state.visibleSkillSection === 'languages' ? 'selected' : ''}>
              <button onClick={() => this.toggleSkillSection('languages')}>
                <p className="title"><img src={require('../assets/icon_skills.svg')} className="icon" alt=""/> Languages</p>
              </button>
            </li>
            <li
              className={this.state.visibleSkillSection === 'libraries' ? 'selected' : ''}>
              <button onClick={() => this.toggleSkillSection('libraries')}>
                <p className="title"><img src={require('../assets/icon_skills.svg')} className="icon" alt=""/> Libraries</p>
              </button>
            </li>
            <li
              className={this.state.visibleSkillSection === 'tools' ? 'selected' : ''}>
              <button onClick={() => this.toggleSkillSection('tools')}>
                <p className="title"><img src={require('../assets/icon_skills.svg')} className="icon" alt=""/> Tools</p>
              </button>
            </li>
          </ul>
          <ul className="skills">
            { this.state.visibleSkillSection === 'languages' &&
              <li>
                <div className="skill-group">
                  { languages.map(language => <SkillBubble skill={language} />) }
                </div>
              </li>
            }
            { this.state.visibleSkillSection === 'libraries' &&
              <li>
                <div className="skill-group">
                  { libraries.map(library => <SkillBubble skill={library} />) }
                </div>
              </li>
            }
            { this.state.visibleSkillSection === 'tools' &&
              <li>
                <div className="skill-group">
                  { tools.map(tool => <SkillBubble skill={tool} />) }
                </div>
              </li>
            }            
          </ul>
        </div>

        <div className="home">
          <h3 className="section-title">Select Projects</h3>
          <div className="projects">
            <ProjectCard project={this.projects[0]} />
            <ProjectCard project={this.projects[1]} />
            <ProjectCard project={this.projects[2]} />
          </div>
          <p className="prompt"><NavLink to="/projects" className="link">view more</NavLink><img className="icon" src={require('../assets/icon_arrow.svg')} alt="right arrow"/></p>
        </div>

        <div className="home confined connect">
          <h3 className="section-title">Reach out!</h3>
          <p>
            If you're looking for a developer or someone to collaborate with, or would just like to chat about cool stuff, I'd love to hear from you!<br></br>
            I'm also currently <b>in the market for employment</b>, so if you've got any opportunities, feel free to send them my way.
          </p>
          <p className="prompt">
            Shoot me an &nbsp;
            <a href="mailto:duha.h.153@gmail.com" rel="noopener noreferrer" target="_blank" id="link-email">email</a>
            <img src={require('../assets/icon_contact.svg')} alt="" className="icon"/>
          </p>
          <p className="prompt">
            Connect with me on &nbsp;
            <a href="https://linkedin.com/in/duha-hassan/" rel="noopener noreferrer" target="_blank" id="link-linkedin">linkedin</a>
            <img src={require('../assets/icon_linkedin.svg')} alt="" className="icon"/>
          </p>
          <p className="prompt">
            Or, check out more of my projects on &nbsp;
            <a href="https://github.com/Duha-H/" rel="noopener noreferrer" target="_blank" id="link-github">github</a>
            <img src={require('../assets/icon_github.svg')} alt="" className="icon"/>
          </p>
        </div>

      </div>
    );
  }
}

export default withRouter(Home);
