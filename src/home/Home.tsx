import React from "react";
import "../App.css";
import "./Home.css";
import { NavItem } from "../reusable-components/types";
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

class Home extends React.Component {
  navItems: NavItem[] = [
    { text: 'home', iconSrc: require('../assets/icon_home.svg'), link: '/' },
    { text: 'about', iconSrc: require('../assets/icon_about.svg'), link: '/about' },
    { text: 'projects', iconSrc: require('../assets/icon_projects.svg'), link: '/projects' },
    { text: 'skills', iconSrc: require('../assets/icon_skills.svg'), link: '/skills' },
  ]

  render() {
    return (
      <Router>
        <div className="container dark">
          <Nav items={ this.navItems } />
          <div className="content">
            <Route path="/" exact >
              <div className="page-content" id="center">
                <h3>Hi there,</h3>
                <h1>Duha here!</h1>
                <h3>I build useful software and tools, and I'd love to let you know more about myself :)</h3>
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
