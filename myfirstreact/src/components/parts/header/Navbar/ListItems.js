import react from 'react';
import ReactDOM from 'react-dom';
import MenuItem from './menuitem.js'
import ListItems from 'listitem.js';


class ListItems extends React.Component{

  render(){
    const ListItems= MenuItem.map((jsonpart) =>(
      <ListItems Item= {jsonpart} />));
  return (
           <ul className= "Navbar-nav col-lg-10 col-md-7 bg-dark text-center">{ListItems}</ul>
      );
    )
  }


export default ListItems;
