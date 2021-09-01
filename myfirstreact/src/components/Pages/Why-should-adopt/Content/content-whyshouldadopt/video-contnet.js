import React from 'react';
import './video.css'

class VideoContent extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div class= "animal">
      <h2 className="text-center">הסבר מדוע כדאי לאמץ כלבים</h2>
        <div>
         
                  {this.props.data.map((item) => {
                    return (
         <iframe width="560" height="500" src={item.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                     
                    )
    
                          }
                          )
                    }
                </div>
      </div>
    )
  }
}


export default VideoContent;
