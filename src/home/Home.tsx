import React from "react";
import logo from "../logo.svg";
import "../App.css";
import "./Home.css";
import { NavItem } from "../reusable-components/types";
import Nav from "../reusable-components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "../about/About";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";

class Home extends React.Component {
  navItems: NavItem[] = [
    { text: 'Home', iconSrc: require('../assets/placeholder-icon.svg'), link: '/' },
    { text: 'About', iconSrc: require('../assets/placeholder-icon.svg'), link: '/about' },
    { text: 'Projects', iconSrc: require('../assets/placeholder-icon.svg'), link: '/projects' },
    { text: 'Skills', iconSrc: require('../assets/placeholder-icon.svg'), link: '/skills' },
    { text: 'Contact', iconSrc: require('../assets/placeholder-icon.svg'), link: '/contact' },
  ]

  render() {
    return (
      <Router>
        <div className="container">
          <Nav items={ this.navItems } />
          <div className="content">
            <Route path="/" exact >
              <div className="">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Oui hon honn</p>
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
        </div>
      </Router>
      
    );
  }
}

export default Home;
