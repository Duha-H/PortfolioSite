import React from "react";
import { NavItemData } from "./types";
import "./Nav.css";
import "./MobileNav.css";
import NavItem from "./NavItem";

interface NavProps {
  navItems: NavItemData[];
  contactItems: NavItemData[];
  mobile: boolean;
  onHideClick: () => void;
}

interface NavState {
  items: NavItemData[];
}

class MobileNav extends React.Component<NavProps, NavState> {


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
      <div className={this.props.mobile ? 'mobile-nav visible' : 'mobile-nav'}>
        <div className="parent-mobile top">
          <ul className="nav" >
            {this.props.navItems.map(item =>
              <NavItem data={ item } textAlwaysVisible={ true } onHideClick={ () => this.props.onHideClick() } />
            )}
          </ul>
        </div>

        <div className="parent-mobile bottom">
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

export default MobileNav;