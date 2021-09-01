import React from 'react';
import ReactDOM from 'react-dom';
import AdoptationVideo from './Content/video';


class ContentGuidanceForAdotation extends React.Component{
  constructor(props) {
    super(props);
    console.log('props in guidance: ', props);
  }


    render(){
        return(
            <div className="container">
              <AdoptationVideo data = {this.props.data} />
            </div>
        )
    }
}
export default ContentGuidanceForAdotation;
