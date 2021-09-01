import React from 'react';
import Header from "../../parts/header/header";
import ContentHome from "./Content/content-home/content-home";
import Footer from "../../parts/footer/footer";
import { Form } from 'reactstrap';
import Contact from '../Contact-Us/Contact-Us';
import AdoptionQuestions from './AdoptionQuestions';



class AnimalsForAdoption extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('/Animals-for-adoption')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render() {
    if (this.state.data.length===0)
        return (<p>ops</p>);
    return(
      <div id="Home">
            <Header data={this.state.data.Header.Navbar} />
            <AdoptionQuestions/>
        <ContentHome data={this.state.data.Content.Card} />
        <Footer data = {this.state.data.Footer.Footer}/>
      </div>
      )
  }
}


export default AnimalsForAdoption;
