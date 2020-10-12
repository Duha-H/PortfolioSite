import React from "react";
import { Route, withRouter } from "react-router-dom";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Nav from "./reusable-components/Nav";
import ProjectView from "./reusable-components/ProjectView";
import { NavItemData } from "./reusable-components/types";
import Skills from "./skills/Skills";

interface StateType {
  theme: 'dark' | 'light';
  mobileNav: boolean;
  showNav: boolean;
}

class AppContainer extends React.Component<any, StateType> {
  navItems: NavItemData[] = [
    { text: 'home', iconSrc: require('./assets/icon_home.svg'), link: '/' },
    { text: 'about me', iconSrc: require('./assets/icon_about.svg'), link: '/about' },
    { text: 'projects', iconSrc: require('./assets/icon_projects.svg'), link: '/projects' },
    { text: 'background', iconSrc: require('./assets/icon_skills.svg'), link: '/skills' },
  ];
  docIcon1 = './assets/icon_document_dark.svg';
  docIcon2 = './assets/icon_document_dark.svg';
  currDocIcon = this.docIcon2;

  constructor(props: any) {
    super(props);
    this.state = {
      theme: 'dark',
      mobileNav: false,
      showNav: false,
    }
  }

  componentDidMount() {
    const storedTheme = localStorage.getItem('duha-theme');
    if (storedTheme &&
        (storedTheme === 'light' || storedTheme === 'dark')) {
      this.setState({ theme: storedTheme });
      document.body.setAttribute('theme', storedTheme);
    }
    if (this.props.location.pathname !== '/') {
      this.setState({ showNav: true, });
    }    
  }

  componentDidUpdate(prevProps: any) {
    if (prevProps.location !== this.props.location) {
      this.onRouteChange();
    }
  }

  onRouteChange() {
    window.scrollTo(0, 0);
    if (this.props.location !== '/') {
      this.setState({ showNav: true, });
    } else if (this.props.location === '/' && this.state.showNav) {
      this.setState({ showNav: false, });
    }
  }

  toggleTheme() {
    if (this.state.theme === 'dark') {
      this.setState({ theme: 'light', });
      localStorage.setItem('duha-theme', 'light');
      document.body.setAttribute('theme', 'light');
    } else {
      this.setState({ theme: 'dark', });
      localStorage.setItem('duha-theme', 'dark');
      document.body.setAttribute('theme', 'dark');
    }
  }

  hideMobileNav() {
    this.setState({ mobileNav: false, });
  }

  toggleDocIcon() {
    if (this.currDocIcon === this.docIcon1) {
      this.currDocIcon = this.docIcon2;
    } else {
      this.currDocIcon = this.docIcon1;
    }
  }

  render() {
    return (
      <div className={`container ${this.state.theme}`}>
        <Nav items={ this.navItems } mobile={this.state.mobileNav} onHideClick={ () => this.hideMobileNav() } />
        <div className="spanning-content header">
          <h2 className="logo">DH</h2>
          <div className="spacer"></div>
          <a href="mailto:duha.h.153@gmail.com" className="button"
            onMouseEnter={ () => this.toggleDocIcon() }
            onMouseLeave={ () => this.toggleDocIcon() }>
            <img src={require('./assets/icon_document_dark.svg')} alt="contact" className="icon"/>
            resume
          </a>
          <img src={require('./assets/icon_nav.svg')} alt="navigation" className="nav-toggle icon"
            onClick={ () => { this.setState({ mobileNav: !this.state.mobileNav, }) }}
          />
          <div className="theme-toggle" onClick={ () => this.toggleTheme() }>
            <img src={require(`./assets/icon_bulb_${this.state.theme}.svg`)} alt="theme toggle" className="theme-toggle"/>
            <img src={require(`./assets/icon_switch_${this.state.theme}.svg`)} alt="theme toggle" className="theme-toggle switch"/>
          </div>
        </div>

        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/about" exact sensitive={false} component={About} />
          <Route path="/projects" exact sensitive={false} component={Projects} />
          <Route path="/projects/:projectId" component={ProjectView} />
          <Route path="/skills" exact sensitive={false} component={Skills} />
          <Route path="/contact" exact sensitive={false} component={Contact} />
        </div>

        <div className="contact-links">
          <a href="mailto:duha.h.153@gmail.com" target="_blank" rel="noopener noreferrer" title="email">
            <img src={require("./assets/icon_contact_2.svg")} alt=""/>
          </a>
          <a href="https://github.com/Duha-H" target="_blank" rel="noopener noreferrer" title="github">
            <img src={require("./assets/icon_github.svg")} alt=""/>
          </a>
          <a href="https://linkedin.com/in/duha-hassan/" target="_blank" rel="noopener noreferrer" title="linkedin">
            <img src={require("./assets/icon_linkedin.svg")} alt=""/>
          </a>
          <div className="line"></div>
        </div>

      </div>
    );
  }

}

export default withRouter(props => <AppContainer {...props} />);