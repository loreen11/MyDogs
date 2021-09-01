import React from 'react';
import Header from "../../parts/header/header";
import Content from "./content/contentSubServices";
import Footer from "../../parts/footer/footer";



class ServicesVeterinarians extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('/Services/Veterinarians')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render() {
    if (this.state.data.length===0)
        return (<p>ops home</p>);
    return(
      <div id="Services">
        <Header data={this.state.data.Header.Navbar} />
        <Content data = {this.state.data.Card}/>
        <Footer data = {this.state.data.Footer.Footer}/>
      </div>
      )
  }
}


export default ServicesVeterinarians;
