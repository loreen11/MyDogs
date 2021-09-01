import React, { Component } from 'react';
import { MenuItems } from "./MenuItems.js";
import "./Navbar.css";

class NavBar extends Component{
  constructor(props){
    super(props);
  }

    render() {
      if (!this.props.data){
      return ("oops")
      };
      const mystyle = {
        color: "black",
        border: "1px solid black",
        fontSize: "10px",
        textAlign: "center",
        height: "60px"
      };
      const items=this.props.data.map((singleItem)=>
        <li className={singleItem.cName}>
          <a className={`menu-style ${singleItem.cLink}`} href={singleItem.url}>
              <i class={singleItem.icon}></i> &nbsp;
              {singleItem.title}
           </a>
        </li>
      )
      return(
        <nav className="p-xl navbar navbar-expand-sm bg-light navbar-light">
          <ul className="mynav navbar-nav col-8">
            {items}
          </ul>
        </nav>
      );
    }
}

export default NavBar;



//   <Navbar bg="dark" expand="lg" className="justify-content-between my-nav-bar">
//   <Navbar.Brand href="/">
//     <div className="logo">
//       <h1>{this.props.icon}Beautiful Animals</h1>
//     </div>
//   </Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//     <NavDropdown className="mynavdropdown" title="?מדוע כדאי לאמץ" id="basic-nav-dropdown">
//       <NavDropdown.Item href ="/animaladoption?id=dogs">מאמרים</NavDropdown.Item>
//       <NavDropdown.Item href="/animaladoption?id=cats">וידיואים על אנשים שאמצו בעלי חיים</NavDropdown.Item>
//       <NavDropdown.Divider />
//       <NavDropdown.Item href="#action/3.4">אנשים ממליצים</NavDropdown.Item>
//     </NavDropdown>
//       <NavDropdown className="mynavdropdown" title="בעלי חיים לאימוץ" id="basic-nav-dropdown">
//         <NavDropdown.Item href ="/animaladoption?id=dogs">כלבים לאימוץ</NavDropdown.Item>
//         <NavDropdown.Item href="/animaladoption?id=cats">חתולים לאימוץ</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">כל מה שאתם צריכים</NavDropdown.Item>
//       </NavDropdown>
//       <NavDropdown className="mynavdropdown" title="הדרכה לאימוץ" id="basic-nav-dropdown">
//         <NavDropdown.Item href="/guidance/animalmatch">התאמת בעל חיים</NavDropdown.Item>
//         <NavDropdown.Item href="/guidance/movies">סרטונים הדרכה</NavDropdown.Item>
//         <NavDropdown.Item href="/guidance/consulting">ייעוץ מורחב</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">המלצות</NavDropdown.Item>
//      </NavDropdown>
//      <NavDropdown className="mynavdropdown" title="ציוד מומלץ" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">מזון מותאם</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">משחקים</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">ביגוד</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">קולרים</NavDropdown.Item>
//       <NavDropdown.Divider />
//       <NavDropdown.Item href="#action/3.4">Online קנייה</NavDropdown.Item>
//     </NavDropdown>
//     <NavDropdown className="mynavdropdown" title="שירותים" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">וטרינרים מומחים</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">מאלפים</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">פסיכולוגיים</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">מה שאתם צריכים</NavDropdown.Item>
//     </NavDropdown>
//     <NavDropdown className="mynavdropdown" title="צרו איתנו קשר" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">מספרי טלפון</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">רשתות מידה</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">כתובות אימייל</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">מה שאתם צריכים</NavDropdown.Item>
//     </NavDropdown>
//     </Nav>
//     <NavDropdown className="mynavdropdown" title="התחברות" id="basic-nav-dropdown">
//         <NavDropdown.Item href="#action/3.1">הרשמה</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.2">כניסה</NavDropdown.Item>
//         <NavDropdown.Item href="#action/3.3">יציאה</NavDropdown.Item>
//         <NavDropdown.Divider />
//         <NavDropdown.Item href="#action/3.4">מה שאתם צריכים</NavDropdown.Item>
//     </NavDropdown>
//     <Form inline>
//       <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//       <Button variant=""></Button>
//     </Form>
//   </Navbar.Collapse>
// </Navbar>
//
//     );
//   }
// }

// export default MyNavbar;
