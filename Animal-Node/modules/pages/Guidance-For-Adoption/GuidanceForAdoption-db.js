const express = require('express');
const db = require('../../../db.js');
const header = require('../../parts/header/headercontroller');
const footer = require('../../parts/footer/footercontroller');


// const footer = require('../../parts/footer/footercontroller.js');
//let Carousel =async ()=>{
//  return await db.DBquery("SELECT * FROM `gallerylist` INNER JOIN `galleryitems` on `gallerylist`.`gallerylist-id`=`galleryitems`.`gallerylist-id` AND `gallerylist`.`gallerylist-id`=2")
//}
let Video =async ()=>{
  return await db.DBquery("SELECT * FROM `videos` WHERE id = 2")
}
//'{"Carousel":'+JSON.stringify(await Carousel())+',
let Content =async ()=>{
  console.log('test' + JSON.parse('{"Vedio":'+JSON.stringify(await link())+'}'));
  return JSON.parse('{"Video":'+JSON.stringify(await link())+'}');
}

module.exports.GuidanceForAdoptionPageJson = async() => {
  return JSON.parse('{"Content":'+JSON.stringify(await Content())
  +',"Header":'+JSON.stringify(await header.Header())
  +',"Footer":'+JSON.stringify(await footer.Footer())+'}');
}
