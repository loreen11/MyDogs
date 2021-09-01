import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardText,ListGroup, ListGroupItem } from 'reactstrap';
import './cards-home.css'

class HomeCard extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class= "animal">
      <h2 className="text-center">מסכנים!! כלבים חמודים לאימוץ</h2>
                <div className="card-deck car">
                  {this.props.data.map((item) => {
                     return(
                        <Card className="my-10 p-1" id="card-about">
                        <CardImg  src={process.env.PUBLIC_URL + item.img} alt="Card image cap"></CardImg>
                          <CardBody className= "test stext-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                          </svg>
                           <CardTitle tag="h3">{item.title}</CardTitle>
                            <CardText >
                             {item.body}
                           </CardText>
                           <ul>
                             <li>{item.age}</li>
                             <br/>
                             <li>{item.sex}</li>
                           </ul>
                          </CardBody>
                        </Card>
                            )
                          }
                          )
                    }
                </div>
      </div>
    )
  }
}


export default HomeCard;
