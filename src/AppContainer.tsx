import React from "react";
import { NavLink, Redirect, Route, Switch, withRouter } from "react-router-dom";
import NotFound from "./404-component/NotFound";
import About from "./about/About";
import Contact from "./contact/Contact";
import Home from "./home/Home";
import Projects from "./projects/Projects";
import Nav from "./reusable-components/Nav";
import ProjectView from "./reusable-components/ProjectView";
import Skills from "./skills/Skills";
import { navItems, contactLinks } from "./reusable-components/constants";

interface StateType {
  theme: 'dark' | 'light';
  mobileNav: boolean;
  showNav: boolean;
}

class AppContainer extends React.Component<any, StateType> {
  
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
    this.onRouteChange();
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
        <div className="sidebar"></div>
        
        <div className="spanning-content header"
            data-aos="fade-down"
            data-aos-easing="ease-in-back"
            data-aos-delay={ this.state.showNav ? "0" : "2200" }
            data-aos-offset="0">
          <a href="/" className="logo" id="logo-home"><h2 className="logo">DH</h2></a>
          <div className="spacer"></div>
          <button
            onClick={ () => { this.setState({ mobileNav: !this.state.mobileNav, }) }}
            id="button-navigation"
            aria-label="Navigation menu button">
            <img
              src={ this.state.mobileNav ? require('./assets/icon_clear.svg') : require('./assets/icon_nav.svg')}
              alt="navigation button"
              className="nav-toggle icon"
            />
          </button>
          <button
            className="theme-toggle"
            onClick={ () => this.toggleTheme() }
            id="toggle-theme"
            aria-label="Light/Dark theme toggle">
            <img src={require(`./assets/icon_bulb_${this.state.theme}.svg`)} alt="theme toggle" className="theme-toggle"/>
            <img src={require(`./assets/icon_switch_${this.state.theme}.svg`)} alt="theme toggle" className="theme-toggle switch"/>
          </button>
        </div>


        <div className="content">
          <Nav navItems={navItems} contactItems={contactLinks} display={this.state.mobileNav} onHideClick={ () => this.hideMobileNav() } />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact sensitive={false} component={About} />
            <Route path="/projects" exact sensitive={false} component={Projects} />
            <Route path="/projects/:projectId" render={(props) => <ProjectView {...props} /> } />
            <Route path="/skills" exact sensitive={false} component={Skills} />
            <Route path="/contact" exact sensitive={false} component={Contact} />
            <Route path="/404" component={NotFound} exact />
            <Redirect path="*" to="/404"/>
            <Redirect path="/projects/*" to="/404"/>
          </Switch>
        </div>

        <div className="contact spanning-content" style={{ width: '100%', }}
          data-aos="fade-up"
          data-aos-delay={ this.state.showNav ? "0" : "2200" }
          data-aos-mirror="false"
          data-aos-once="true">
          <p className="prompt" style={{ justifyContent: 'center', }}>
            Check out this portfolio's &nbsp;
            <a href="https://github.com/Duha-H/website" rel="noopener noreferrer" target="_blank" id="link-repository">repository on github</a>
            <img className="icon" src={require('./assets/icon_github.svg')} alt="github icon"/>!
          </p>
          <div className="spacer"></div>
          <ul className="nav contact">
            { contactLinks.map(item => {
              return <li>
                <a href={item.link} rel="noopener noreferrer" target="_blank" id={`link-${item.text}`}>
                  <img src={ item.iconSrc } alt={`${item.text} icon`} className="icon" />
                </a>
              </li>
            }) }
          </ul>
        </div>

      </div>
    );
  }

}

export default withRouter(props => <AppContainer {...props} />);