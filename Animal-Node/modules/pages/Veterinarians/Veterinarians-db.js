const express = require('express');
const db = require('../../../db.js');
const header = require('../../parts/header/headercontroller');
// const servicesjson = require('./Services-json.json');
const footer = require('../../parts/footer/footercontroller');

let Card =async ()=>{
  return await db.DBquery("SELECT * FROM `servicesfordog`")
}
// '{"Carousel":'+JSON.stringify(await Carousel())+',
// let Content =async ()=>{
//   console.log(JSON.parse('{"Card":'+JSON.stringify(await Card())+'}'));
//   return JSON.parse('{"Card":'+JSON.stringify(await Card())+'}');
// }
// module.exports.ServicesPageJson = async ()=>{
// return JSON.parse('{"Header":'+JSON.stringify(await header.Header())+',"Card":'+JSON.stringify(await Card())+',"Footer":'JSON.stringify(await footer.Footer())+'}');
// }

module.exports.VeterinariansPage = async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header())
  +',"Card":'+JSON.stringify(await Card())
  +',"Footer":'+JSON.stringify(await footer.Footer())+'}');
}
