import React from "react";
import { NavItem } from "./types";
import "./Nav.css";
import { Link } from "react-router-dom";

interface NavProps {
  items: NavItem[];
}

interface NavState {
  items: NavItem[];
  mobile?: boolean;
}

class Nav extends React.Component<NavProps, NavState> {

  items: NavItem[] = [];

  constructor(props: { items: NavItem[] }) {
    super(props);
    this.items = props.items;
    this.displayItemText = this.displayItemText.bind(this);
    this.state = {
      items: props.items,
      mobile: false,
    };
  }

  displayItemText(index: number, state: boolean) {
    this.items[index].display = state;
    this.setState({ items: this.items });    
  }

  render() {
    return (
      <div>
        <div className="parent">
          <div className="line"></div>
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
        </div>

        <div className="parent-mobile">
          <img src={require('../assets/icon_nav.svg')} alt="navigation"
            onClick={ () => { this.setState({mobile: !this.state.mobile }) }}
          />
          { this.state.mobile && <ul className="nav" >
            {this.state.items.map((item, index) =>
              <li>
                <Link
                  to={item.link}
                  onClick={ () => this.setState({ mobile: false, }) }
                >
                  <img src={ item.iconSrc } alt={ item.text } />
                  <p>{ item.text }</p>
                </Link>
              </li>
            )}
          </ul> }
        </div>
      </div>
    );
  }
}

export default Nav;