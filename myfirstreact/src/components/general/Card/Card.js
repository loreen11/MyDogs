import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardImg, CardBody, CardTitle, CardText, CardDeck, Container } from 'reactstrap';


class Cards extends React.Component{
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
                                    {console.log(item.type)}
                                    <a href={item.type}>
                                            <CardImg  src={process.env.PUBLIC_URL + item.img}  alt="Card image cap"></CardImg>
                                            <CardBody>
                                                 <CardTitle tag="h3">{item.title}</CardTitle>
                                                 <CardText>
                                                        {item.body}
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
export default Cards;
