import React from 'react';
import ReactDOM from 'react-dom';

class Video extends React.Component{
  constructor(props){
    super(props);
    console.log('props in video: ', props);
  }
  render(){
    return(
      <div>
      <h2>test</h2>
                <div>
                  {this.props.data.map((item) => {
                     return(
                       <img href={item}></img>
                        // <Card className="my-10 p-1" id="card-about">
                        // <CardImg  src={process.env.PUBLIC_URL + item.img} alt="Card image cap"></CardImg>
                        //   <CardBody className= "test stext-dark">
                        //   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        //   <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        //   </svg>
                        //     <CardTitle tag="h3">{item.title}</CardTitle>
                        //     <CardText>
                        //        {item.body}
                        //     </CardText>
                        //   </CardBody>
                        // </Card>
                            )
                          }
                          )
                    }
                </div>
      </div>
    )
  }
}


export default Video;
