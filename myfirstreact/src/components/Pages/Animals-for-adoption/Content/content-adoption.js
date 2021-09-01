import React from 'react';
import ReactDOM from 'react-dom';
import HomeCard from './cards-home';


class ContentHome extends React.Component{
  constructor(props) {
    super(props);
  }

    render(){
        return(
            <div className="container">
              <HomeCard data = {this.props.data} />
            </div>
        )
    }
}
export default ContentHome;
