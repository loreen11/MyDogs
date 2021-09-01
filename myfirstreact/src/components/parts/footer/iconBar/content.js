import React from "react";
import '../footer.css';
import IconItems from './iconItems';

class Content extends React.Component{
  render() {
    return (
      <div className="footer-content">
        <IconItems/>
        <div className="footer-contact">
          <div className="footer-about">
            <span className="footer-about-header"> מספרי טלפון: </span>
            <span> 050-778-9435</span>
            <span> 054-695-6672</span>
            <span> 04-998-7652</span>
          </div>
          <div className="footer-about">
            <span className="footer-about-header"> כתובות מייל: </span>
            <span> animals112@gmail.com</span>
            <span> dogs100@hotmail.com</span>
          </div>
        </div>
      </div>
    );
  }
}


export default Content;
