import React, { Component } from 'react';
import Input from '../../../general/input.js';
import TextArea from './textarea.js';
import Button from '../../../general/button.js'
// import "./Navbar.css";



class Form extends Component{
  constructor() {
    super()
    this.state = { uname: "", text: "" }
  }

  onSubmit = (event) =>
  {

    event.preventDefault();
    fetch('/contactus', {
      // Adding method type
      method: "POST",
      // Adding body or contents to send
      body: JSON.stringify({
          uname: this.state.uname,
          text: this.state.text,
        }),
        // Adding headers to the request
      headers: {
          "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(res => res.json())
    .then(json => {
      alert(json.message)
      this.setState({ uname: "", text: "" })
    })
  }

  onChangeInput  = (event) => {
    this.setState({ uname: event.target.value })
  }
  onChangeText  = (event) => {
    this.setState({ text: event.target.value })
  }


    render() {
      const data = this.props.form


      const Items=data.map((singleItem)=>{
          if (singleItem.element==="input")
            return <Input onChange={this.onChangeInput} value={this.state.uname} key={singleItem.id} item={singleItem} />
          if(singleItem.element==="textarea")
            return <TextArea onChange={this.onChangeText} value={this.state.text} key={singleItem.id} item={singleItem} />
          if(singleItem.element==="button")
            return <Button key={singleItem.id} item={singleItem} />
      }
        // <div className={singleItem.dclass} >
        //    <input className={singleItem.inclass}/>
        // </div>
      );

      return(
        <form onSubmit={this.onSubmit} class="needs-validation" novalidate>
            {Items}
        </form>
      );
    }
}

export default Form;
