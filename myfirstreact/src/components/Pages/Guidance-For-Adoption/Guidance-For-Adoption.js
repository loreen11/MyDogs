import React from 'react';
import Header from "../../parts/header/header";
//import Content from "./Content/guidance-for-adoption-content"
import Footer from "../../parts/footer/footer";
import Content from "./Content/video"


class Adoption extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('/Adoption')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render() {
    if (this.state.data.length===0)
        return (<p>ops not working</p>);
    return(
      <div id="Adoption">
        <Header data = {this.state.data.Header.Navbar}/>
        <Content data = {this.state.data.Content.Video}/>
        <Footer data = {this.state.data.Footer.Footer}/>
      </div>
      )
  }
}


export default Adoption;
