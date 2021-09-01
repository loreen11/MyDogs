import React from 'react';
import Video from './video-contnet';


class Content extends React.Component{
  constructor(props) {
    super(props);
  }

    render(){
        return(
            <div className="container">
              <Video data = {this.props.data} />
            </div>
        )
    }
}
export default Content;
