import React from 'react';
import ReactDOM from 'react-dom';
import IconJson from './IconJson';
import IconItem from './iconitem';

class IconItems extends React.Component {
  render() {
    const IconItems = IconJson.map((jsonpart) =>(
      <IconItem item={jsonpart}/>
    ));
    return(
      <ul className="icon-items">{IconItems}</ul>
    );
  }
}

export default IconItems;
