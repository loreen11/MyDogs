import React from 'react';
import CardsServices from '../../../general/Card/CardServices.js';
// import './cards-home.css'

class ContentSubServices extends React.Component{
  constructor(props) {
    super(props);
  }

    render(){
        return(
          <div className="container">
            <h2 className="text-center">שירותים</h2>
          <CardsServices data = {this.props.data} />
           
            </div>
        )
    }
}
export default ContentSubServices;
