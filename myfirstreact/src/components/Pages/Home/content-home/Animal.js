import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardImg, CardBody, CardTitle, CardText, CardDeck, Container } from 'reactstrap';
import CardItems from './carditem.js';
import './cards-home.css'

class Animal extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class= "Animal">
      <h2 className="text-center">{this.props.head}</h2>
                <div className="card-deck car">
                  {CardItems.map((item) => {
                     return(
                        <Card className="my-10 p-1" id="card-about">
                        <CardImg  src={item.img} alt="Card image cap"></CardImg>
                          <CardBody className= "test stext-dark">
                            <CardTitle tag="h3">{item.title}</CardTitle>
                            <CardText>
                               {item.body}
                            </CardText>
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


export default Animal;
