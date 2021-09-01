import React from 'react';
import Cards from '../../../general/Card/Card.js';
// import './cards-home.css'

class ContentServicese extends React.Component{
  constructor(props) {
    super(props);
  }

    render(){
        return(
          <div className="container">
            <h2 className="text-center">שירותים</h2>
          <Cards data = {this.props.data} />
           
            </div>
        )
    }
}
export default ContentServicese;
