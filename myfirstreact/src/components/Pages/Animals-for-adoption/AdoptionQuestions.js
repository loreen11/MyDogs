import React from 'react';
import Header from '../../parts/header/header.js';
import Content from '../Contact-Us/Content/content.js';

class AdoptionQuestions extends React.Component{
  constructor() {
    super();
    this.state = { data: null };
  }

  componentDidMount() {
    fetch('/contact/adoptionQuestions')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render(){

    if(!this.state.data){
      return <div>loading...</div>
    }
    return(
      <div id="adoptionquestions">
       <h1 className="text-center">אמצו כלב</h1>
        <Content content={this.state.data.Content} />
      </div>
    )
  }



}
export default AdoptionQuestions
