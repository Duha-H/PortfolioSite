import React from "react";
import { NavItemData } from "./types";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import NavItem from "./NavItem";

interface NavProps {
  items: NavItemData[];
  mobile?: boolean;
  onHideClick: () => void;
}

interface NavState {
  items: NavItemData[];
}

class Nav extends React.Component<NavProps, NavState> {

  items: NavItemData[] = [];

  constructor(props: any) {
    super(props);
    this.items = props.items;
    this.displayItemText = this.displayItemText.bind(this);
    this.state = {
      items: props.items,
    };
  }

  displayItemText(index: number, state: boolean) {
    this.items[index].display = state;
    this.setState({ items: this.items });    
  }

  hideNav() {

  }

  render() {
    return (
      <div>
        <div className="parent">
          <div className="line"></div>
          <ul className="nav">
            { this.state.items.map((item, index) =>
              <NavItem data={ item } />
            )}
          </ul>
        </div>

        <div className="parent-mobile">
          {/* <img src={require('../assets/icon_nav.svg')} alt="navigation"
            onClick={ () => { this.setState({mobile: !this.state.mobile }) }}
          /> */}
          { this.props.mobile && <ul className="nav" >
            {this.state.items.map((item, index) =>
              <li>
                <NavLink
                  to={item.link}
                  onClick={ () => this.props.onHideClick() }
                >
                  <img src={ item.iconSrc } alt={ item.text } />
                  <p>{ item.text }</p>
                </NavLink>
              </li>
            )}
          </ul> }
        </div>
      </div>
    );
  }
}

export default Nav;