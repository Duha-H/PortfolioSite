import React from "react";
import { Route, withRouter } from "react-router-dom";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import MobileNav from "./reusable-components/MobileNav";
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
  ];
  contactLinks: NavItemData[] = [
    { text: 'resume', iconSrc: require('./assets/icon_document.svg'), link: '/skills' },
    { text: 'email', iconSrc: require('./assets/icon_contact.svg'), link: 'mailto:duha.h.153@gmail.com' },
    { text: 'github', iconSrc: require('./assets/icon_github.svg'), link: 'https://github.com/Duha-H' },
    { text: 'linkedin', iconSrc: require('./assets/icon_linkedin.svg'), link: 'https://github.com/Duha-H' },
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
      document.documentElement.style.setProperty('--nav-slide-duration', '1000s');
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
        <div className="nav-links">
          <div className="line"></div>
          <Nav items={ this.navItems } onHideClick={ () => this.hideMobileNav() } />
        </div>
        
        <div className="spanning-content header"
            data-aos="fade-down"
            data-aos-easing="ease-in-back"
            data-aos-delay={ this.state.showNav ? "0" : "2200" }
            data-aos-offset="0">
          <h2 className="logo">DH</h2>
          <div className="spacer"></div>
          <img
            src={ this.state.mobileNav ? require('./assets/icon_clear.svg') : require('./assets/icon_nav.svg')}
            alt="navigation"
            className="nav-toggle icon"
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

          <MobileNav navItems={this.navItems} contactItems={this.contactLinks} mobile={this.state.mobileNav} onHideClick={ () => this.hideMobileNav() } />
        </div>

        <div className="contact-links">
          <Nav items={ this.contactLinks } onHideClick={ () => this.hideMobileNav() } />
          <div className="line"></div>
        </div>

      </div>
    );
  }

}

export default withRouter(props => <AppContainer {...props} />);