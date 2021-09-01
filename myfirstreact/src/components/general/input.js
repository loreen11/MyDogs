import React from 'react';

class Input extends React.Component{

    render() {
      const {item, ...rest} = this.props
      return (
        <div className={item.dclass}>
          <input
            name={item.name}
            className={item.inclass}
            placeholder={item.placeholder}
            type={item.type}
            {...rest}
          />
        </div>
      )
    }
}
export default Input
