import React from 'react';
import Form from './form.js'

class Content extends React.Component {
  constructor(props) {
    super(props);
  }
    render(){
      return(
        <div className="container">
          <Form form={this.props.content} />
        </div>
      )
    }
}
export default Content
