import React from "react";
import { navItems } from "../reusable-components/constants";
import NavItem from "../reusable-components/NavItem";
import "./NotFound.css";

class NotFound extends React.Component {
  render() {
    return (
      <div className="page-content center">
        <h2>404 - Not Found</h2>
        <p>Yikes, it looks like the page you're trying to access does not exist or has been removed</p>
        <img src={require('../assets/placeholder_tumble.svg')} alt="Desert clip art with tumbling weeds" className="placeholder"/>
        <p>Try one of these instead</p>
        <div className="alt-links spanning-content">
          <ul className="nav" >
            {navItems.map(item =>
              <NavItem data={ item } textAlwaysVisible={ true } onHideClick={ () => {} } />
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default NotFound;
