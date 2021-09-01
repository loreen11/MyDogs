import React from 'react';
import ReactDOM from 'react-dom';

import styles from "./menuitem.css";

class MenuItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
        <li className="nav-item item">
          <a className="nav-link" href={this.props.item.url}>{this.props.item.title}<i className={this.props.item.icon}></i></a>
        </li>
    );
  }
}

export default MenuItem;
