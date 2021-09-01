import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardImg, CardBody, CardTitle, CardText, CardDeck, Container } from 'reactstrap';


class CardsServices extends React.Component{
  constructor(props) {
      super(props)};
  render(){
    if (!this.props.data){
         return("");

      };
    return(
            <Container>
                <div className="card-deck car">
                        {this.props.data.map((item => {
                            return (
                                <Card className="my-4 p-3" id="card-about">
                                    <a href={item.type}>
                                            <CardImg  src={process.env.PUBLIC_URL + item.img} height="250" width="250"  alt="Card image cap"></CardImg>
                                            <CardBody className="text-center" >
                                                 <CardTitle tag="h3">{item.name}</CardTitle>
                                                 <CardText tag="h4">
                                                        {item.location}
                                            </CardText>
                                                 <CardText>
                                                        {item.description}
                                            </CardText>
                                                    <CardText >
                                                         איכות:{item.quality}, זמינות:{item.availability},יחס:{item.attitude}
                                                 </CardText>
                                    </CardBody>
                                    </a>
                                        </Card>
                           
                               
                                    )
                                }
                            )
                        )
                    }
                </div>
            </Container>
      )
    }
}
export default CardsServices;
