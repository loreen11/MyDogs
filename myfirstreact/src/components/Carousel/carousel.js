import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Carousel extends React.Component{
  constructor(props) {
      super(props)};
render(){
return(
    <Carousel>
    {this.props.CarouselItems.map(item => (
      <div>
          <img src={item.imgsrc} />
          <p className={item.className}>{item.caption}</p>
      </div>
    ))}
  </Carousel>

  );
 }
}

export default Carousel
