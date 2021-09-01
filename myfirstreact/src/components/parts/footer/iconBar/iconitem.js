import React from 'react';
import '../footer.css';
import ReactDOM from 'react-dom';

class IconItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="icon-item">
        <a href={this.props.item.link}>
          <i className={this.props.item.icon}>
          </i>
        </a>
      </div>
    );
  }
}

export default IconItem;
