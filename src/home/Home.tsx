import React from "react";
import "../App.css";
import "./Home.css";
import { NavItemData } from "../reusable-components/types";
import Nav from "../reusable-components/Nav";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import About from "../about/About";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import homeIcon from "../assets/IconHome";

interface StateType {
  theme: 'dark' | 'light';
  name: string;
  mobileNav: boolean;
}

class Home extends React.Component<any, StateType> {
  navItems: NavItemData[] = [
    { text: 'home', iconSrc: require('../assets/icon_home.svg'), link: '/' },
    { text: 'about', iconSrc: require('../assets/icon_about.svg'), link: '/about' },
    { text: 'projects', iconSrc: require('../assets/icon_projects.svg'), link: '/projects' },
    { text: 'skills', iconSrc: require('../assets/icon_skills.svg'), link: '/skills' },
  ]
  me = 'Duha Hassan';

  constructor(props: any) {
    super(props);
    this.state = {
      theme: 'dark',
      name: '',
      mobileNav: false,
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

  toggleTheme() {
    if (this.state.theme === 'dark') {
      this.setState({ theme: 'light', })
    } else {
      this.setState({ theme: 'dark', })
    }
  }

  hideMobileNav() {
    this.setState({ mobileNav: false, });    
  }

  render() {
    return (
      <Router>
        <div className={`container ${this.state.theme}`}>
          <Nav items={ this.navItems } mobile={this.state.mobileNav} onHideClick={ () => this.hideMobileNav() } />
          <div className="spanning-content header">
            <h2 className="logo">DH</h2>
            <div className="spacer"></div>
            {/* <p><a href="https://github.com/Duha-H/website">view source</a></p> */}
            <img src={require('../assets/icon_nav.svg')} alt="navigation" className="nav-toggle icon"
              onClick={ () => { this.setState({ mobileNav: !this.state.mobileNav, }) }}
            />
            <div className="theme-toggle" onClick={ () => this.toggleTheme() }>
              <img src={require(`../assets/icon_bulb_${this.state.theme}.svg`)} alt="theme toggle" className="theme-toggle"/>
              <img src={require(`../assets/icon_switch_${this.state.theme}.svg`)} alt="theme toggle" className="theme-toggle switch"/>
            </div>
          </div>
          <div className="content">
            <Route path="/" exact >
              <div className="page-content" id="center">
                <div className="home">
                  <h3 style={{color: 'var(--text)'}}>Hi there! I'm</h3>
                  <div className="typewritten">
                    <h1 id="name">{ this.state.name }</h1><h1 id="blink">|</h1>
                  </div>
                  <h2>Software Developer</h2>
                  <h3>I'd love to let you know more about myself and my work :)</h3>
                  <a href="mailto:duha.h.153@gmail.com" className="button"><img src={require('../assets/icon_contact.svg')} alt="contact" className="icon"/> Get in touch</a>
                </div>
              </div>
            </Route>
            <Route path="/about" exact sensitive={false} >
              <About />
            </Route>
            <Route path="/projects" exact sensitive={false} >
              <Projects />
            </Route>
            <Route path="/skills" exact sensitive={false} >
              <Skills />
            </Route>
            <Route path="/contact" exact sensitive={false} >
              <Contact />
            </Route>
          </div>

          <div className="contact-links">
            <a href="https://github.com/Duha-H" target="_blank" rel="noopener noreferrer">
              <img src={require("../assets/icon_github.svg")} alt=""/>
            </a>
            <a href="https://linkedin.com/in/duha-hassan/" target="_blank" rel="noopener noreferrer">
              <img src={require("../assets/icon_linkedin.svg")} alt=""/>
            </a>
            <div className="line"></div>
          </div>
        </div>
      </Router>
      
    );
  }
}

export default Home;
