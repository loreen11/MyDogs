const DB = require('../../../db.js')
const navbar = require('./navbar.json');

let Navbar = async()=> {
  return await DB.DBquery("SELECT * FROM `menulist` INNER JOIN `menuitems` on `menulist`.`id`=`menuitems`.`menuList-id` AND `menulist`.`id`=1");
}

module.exports.HeaderPages= async ()=>{
  return JSON.parse('{"Navbar":'+JSON.stringify(await Navbar())+'}')
}
