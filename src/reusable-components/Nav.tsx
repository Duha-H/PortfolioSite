import React from "react";
import { NavItem } from "./types";
import "./Nav.css";
import { Link } from "react-router-dom";

interface NavProps {
  items: NavItem[];
}

class Nav extends React.Component<NavProps, NavProps> {

  items: NavItem[] = [];

  constructor(props: { items: NavItem[] }) {
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

  render() {
    return (
      <ul className="nav">
        {this.state.items.map((item, index) =>
          <li
            onMouseEnter={ () => this.displayItemText(index, true) }
            onMouseLeave={ () => this.displayItemText(index, false) }
          >
            <Link to={item.link} >
              <img src={ item.iconSrc } alt={ item.text } />
              { item.display && <p>{ item.text }</p> }
            </Link>
            
          </li>
        )}
      </ul>
    );
  }
}

export default Nav;