const express = require('express');
const db = require('../../../db.js');
const header = require('../../parts/header/headercontroller');
const footer = require('../../parts/footer/footercontroller');
const homecarousel= require('../Home/carouselJ.json');
const homecard= require('../Home/cardJ.json');


let Video =async ()=>{
  return await db.DBquery("SELECT * FROM `whyshouldadoptdog`")
}
//'{"Carousel":'+JSON.stringify(await Carousel())+',
let Content =async ()=>{
  // console.log(JSON.parse('{"Card":'+JSON.stringify(await Card())+'}'));
  return JSON.parse('{"Video":'+JSON.stringify(await Video())+'}');
}



module.exports.WhyShouldAdoptPage = async() => {
  return JSON.parse('{"Content":'+JSON.stringify(await Content())
  +',"Header":'+JSON.stringify(await header.Header())
  +',"Footer":'+JSON.stringify(await footer.Footer())+'}');
}

