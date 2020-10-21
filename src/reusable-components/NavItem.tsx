import React from "react";
import { NavLink } from "react-router-dom";
import { NavItemData } from "./types";
import "./NavItem.css";

interface NavItemProp {
  data: NavItemData;
  reverse?: boolean;
  textAlwaysVisible?: boolean;
  onHideClick: () => void;
}

interface NavItemState {
  data: NavItemData;
  reverse?: boolean;
}

class NavItem extends React.Component<NavItemProp, NavItemState> {

  item: NavItemData;
  constructor(props: NavItemProp) {
    super(props);
    this.item = props.data;
    this.state = {
      data: props.data,
      reverse: false,
    };
  }

  displayItemText(state: boolean) {
    if (this.props.textAlwaysVisible) {
      return;
    }
    this.item.display = state;
    this.setState({ data: this.item });    
  }

  render() {
    return (
      <li
        onMouseEnter={ () => this.displayItemText(true) }
        onMouseLeave={ () => this.displayItemText(false) }
        onClick={ () => this.props.onHideClick() }
        className={this.props.reverse ? 'reverse' : ''}
      >
        { this.props.data.external
          ? <a href={this.state.data.link} target="_blank" rel="noopener noreferrer">
              <img src={ this.state.data.iconSrc } alt={ this.state.data.text } className="icon" />
              { (this.state.data.display || this.props.textAlwaysVisible ) && <p>{ this.state.data.text }</p> }
            </a>
          : <NavLink to={this.state.data.link} activeClassName="active-link" exact>
              <img src={ this.state.data.iconSrc } alt={ this.state.data.text } className="icon" />
              { (this.state.data.display || this.props.textAlwaysVisible ) && <p>{ this.state.data.text }</p> }
            </NavLink>
        }
      </li>
    );
  }
}

export default NavItem;