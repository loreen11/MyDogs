import React, { Component } from 'react';



class Formitems extends Component{
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('/formitems')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }


    render() {
      return(
       this.state.data.map((singleItem)=>
       (
        <div id="content" class="container">
          // <h2 class="welcome">{singleItem.name}</h2>
          <form action="/action_page.php" class="needs-validation" novalidate>
            <div class="form-group text-right">
              <input type="text" class="form-control" id="uname" placeholder={singleItem.placeholder} name="uname" required/>
            </div>
            <div class="form-group text-right">
              <textarea class="form-control" rows="5" id="comment" placeholder={singleItem.placeholder}name="text"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">{singleItem.placeholder}</button>
          </form>
        </div>
      )
      ));
    }
  }

  export default Formitems;
