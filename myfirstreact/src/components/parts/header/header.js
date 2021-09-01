import React, { Component } from 'react';
import NavBar from "./Navbar/Navbar";
import "./header.css"

class Header extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <NavBar data={this.props.data}/>
    );
  }
}

export default Header;
