const DB = require('../../../db.js')
const footerJson = require('./footerJson.json');
let FooterJson = async()=> {
  return await DB.DBquery("SELECT * FROM `menulist` INNER JOIN `menuitems` on `menulist`.`id`=`menuitems`.`menuList-id` AND `menulist`.`id`=2");
}

module.exports.FooterPage= async ()=>{
  return JSON.parse('{"Footer":'+JSON.stringify(await FooterJson())+'}')
}
