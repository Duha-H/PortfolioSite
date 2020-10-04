import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import homeIcon from "../assets/IconHome";
import { NavItemData } from "./types";

interface NavItemProp {
  data: NavItemData;
}

interface NavItemState {
  item: NavItemData;
}

class NavItem extends React.Component<NavItemProp, NavItemProp> {

  item: NavItemData;
  constructor(props: NavItemProp) {
    super(props);
    this.item = props.data;
    this.state = {
      data: props.data,
    };
  }

  displayItemText(state: boolean) {
    this.item.display = state;
    this.setState({ data: this.item });    
  }

  render() {
    return (
      <li
        onMouseEnter={ () => this.displayItemText(true) }
        onMouseLeave={ () => this.displayItemText(false) }
      >
        <NavLink to={this.state.data.link} activeClassName="active-link" >
          {/* { homeIcon() } */}
          <img src={ this.state.data.iconSrc } alt={ this.state.data.text } />
          { this.state.data.display && <p>{ this.state.data.text }</p> }
        </NavLink>
      </li>
    );
  }
}

export default NavItem;