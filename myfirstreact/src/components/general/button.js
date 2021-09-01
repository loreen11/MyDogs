import React from 'react';

class Button extends React.Component{

    render() {
      const item = this.props.item
      return (
        <div className={item.dclass}>
          <button
            className={item.inclass}
            type={item.type}
          >{item.value}</button>
        </div>
      )
    }
}
export default Button
