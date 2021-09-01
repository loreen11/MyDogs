import React from 'react';
import ReactDOM from 'react-dom';
import {CarouselItems} from './carouseljson';
import Carousel from '../../../../general/Carousel/carousel.js'

class MyCarousel extends React.Component {
  constructor(props) {
      super(props)};
render(){

  return(
    <Carousel CarouselItems={CarouselItems} />
  );
 }
}

export default MyCarousel
