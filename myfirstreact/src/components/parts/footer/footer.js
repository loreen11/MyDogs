import React from "react";
import './footer.css';
import  IconJson from './iconBar/IconJson.js';
import Content from './iconBar/content.js';


class Footer extends React.Component{
  render() {

    return (
        <div className="footer">
         <h1> lorin <span> {'\u00A9'} </span> </h1>
         <Content/>
        </div>
    );
  }
}


export default Footer;
