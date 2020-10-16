import React from "react";
import { NavItemData } from "./types";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import NavItem from "./NavItem";

interface NavProps {
  items: NavItemData[];
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
          <ul className="nav">
            { this.state.items.map((item, index) =>
              <NavItem data={ item } onHideClick={ () => { } } />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;