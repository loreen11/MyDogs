import react, { Component } from 'react';
import { IconItems } from "./iconItems";

class IconBar extends Component {
  state = {clicked: false }
  render() {
    return(
      <nav className="NavbarItems navbar-expand-sm bg-light">
        <div className="menu-icon" onClick={this.handleClick}></div>
        <ul>
          {IconItems.map((item, index) =>{
            return(
              <li key={index} >
                 <a className={item.cName} href={item.a}>
                    {item.icon}
                 </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default IconBar
