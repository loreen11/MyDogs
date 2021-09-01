import React from 'react';

class TextArea extends React.Component{
  render() {
    const {item, ...rest} = this.props
    return (
      <div className={item.dclass}>
        <textarea
          name={item.name}
          className={item.inclass}
          placeholder={item.placeholder}
          type={item.type}
          {...rest}
        ></textarea>
      </div>
    )
  }
}
export default TextArea
