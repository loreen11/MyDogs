import React from 'react';
import Header from "../../parts/header/header";
import Footer from "../../parts/footer/footer";
import Content from "./Content/content-whyshouldadopt/content";



class WhyShouldAdopt extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('/Why-you-should-adopt')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }
  render() {
    if (this.state.data.length===0)
        return (<p>ops why-should-adopt</p>);
    return(
      <div id="Why-you-should-adopt">
        <Header data={this.state.data.Header.Navbar} />
        <Content data = {this.state.data.Content.Video}/>
        <Footer data = {this.state.data.Footer.Footer}/>
      </div>
      )
  }
}


export default WhyShouldAdopt;
