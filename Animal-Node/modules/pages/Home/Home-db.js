const express = require('express');
const db = require('../../../db.js');
const header = require('../../parts/header/headercontroller');
const footer = require('../../parts/footer/footercontroller');
const homecarousel= require('./carouselJ.json');
const homecard= require('./cardJ.json');

// const footer = require('../../parts/footer/footercontroller.js');
//let Carousel =async ()=>{
//  return await db.DBquery("SELECT * FROM `gallerylist` INNER JOIN `galleryitems` on `gallerylist`.`gallerylist-id`=`galleryitems`.`gallerylist-id` AND `gallerylist`.`gallerylist-id`=2")
//}
let AdoptionCard =async ()=>{
  return await db.DBquery("SELECT * FROM `gallerylist` INNER JOIN `galleryitems` on `gallerylist`.`gallerylist-id`=`galleryitems`.`gallerylist-id` AND `gallerylist`.`gallerylist-id`=1")
}
let ServicesCard =async ()=>{
  return await db.DBquery("SELECT * FROM `servicesfordogs`")
}
//'{"Carousel":'+JSON.stringify(await Carousel())+',
let AdoptionHomeContent =async ()=>{
  console.log(JSON.parse('{"Card":'+JSON.stringify(await AdoptionCard())+'}'));
  return JSON.parse('{"Card":'+JSON.stringify(await AdoptionCard())+'}');
}
let ServicesHomeContent =async ()=>{
  console.log(JSON.parse('{"Card":'+JSON.stringify(await ServicesCard())+'}'));
  return JSON.parse('{"Card":'+JSON.stringify(await ServicesCard())+'}');
}
module.exports.HomePageJson = async() => {
  return JSON.parse('{"AdoptionContent":' + JSON.stringify(await AdoptionHomeContent())
      +',"ServicesContent":'+JSON.stringify(await ServicesHomeContent())
  +',"Header":'+JSON.stringify(await header.Header())
  +',"Footer":'+JSON.stringify(await footer.Footer())+'}');
}
