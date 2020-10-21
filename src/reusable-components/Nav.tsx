import React from "react";
import { NavItemData } from "./types";
import "./Nav.css";
import NavItem from "./NavItem";

interface NavProps {
  navItems: NavItemData[];
  contactItems: NavItemData[];
  display: boolean;
  onHideClick: () => void;
}

interface NavState {
  items: NavItemData[];
}

class Nav extends React.Component<NavProps, NavState> {


  constructor(props: NavProps) {
    super(props);
    this.state = {
      items: props.navItems,
    };
  }

  hideNav() {

  }

  render() {
    return (
      <div className={this.props.display ? 'nav visible' : 'nav'} >
        <div className="parent top">
          <div className="spacer"></div>
          <ul className="nav" >
            {this.props.navItems.map(item =>
              <NavItem data={ item } textAlwaysVisible={ true } onHideClick={ () => this.props.onHideClick() } />
            )}
          </ul>
        </div>

        <div className="parent bottom">
          <ul className="nav">
            {this.props.contactItems.map(item =>
              <NavItem data={ item } textAlwaysVisible={ true } onHideClick={ () => this.props.onHideClick() } />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;