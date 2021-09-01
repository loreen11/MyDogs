const express = require('express');
const db = require('../../../db.js');
const header = require('../../parts/header/headercontroller');
// const servicesjson = require('./Services-json.json');
const footer = require('../../parts/footer/footercontroller');

let ServicesCard =async ()=>{
  return await db.DBquery("SELECT * FROM `servicesfordog`")
}
let ServicesVeterinarianCard =async ()=>{
  return await db.DBquery("SELECT * FROM `veterinarians` INNER JOIN `veterinarians_rating` on `veterinarians_rating`.`id` = `veterinarians`.`id`")
}
let ServicesPsychologistCard =async ()=>{
  return await db.DBquery("SELECT * FROM `psychologist` INNER JOIN `psychologist_rating` on `psychologist_rating`.`id` = `psychologist`.`id`")
}
let ServicesTrainersCard =async ()=>{
  return await db.DBquery("SELECT * FROM `trainers` INNER JOIN `trainers_rating` on `trainers_rating`.`id` = `trainers`.`id`")
}
// '{"Carousel":'+JSON.stringify(await Carousel())+',
// let Content =async ()=>{
//   console.log(JSON.parse('{"Card":'+JSON.stringify(await Card())+'}'));
//   return JSON.parse('{"Card":'+JSON.stringify(await Card())+'}');
// }
// module.exports.ServicesPageJson = async ()=>{
// return JSON.parse('{"Header":'+JSON.stringify(await header.Header())+',"Card":'+JSON.stringify(await Card())+',"Footer":'JSON.stringify(await footer.Footer())+'}');
// }

module.exports.ServicesPage = async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header())
  +',"Card":'+JSON.stringify(await ServicesCard())
  +',"Footer":'+JSON.stringify(await footer.Footer())+'}');
}

module.exports.ServicesVeterinariansPage= async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header())
  +',"Card":'+JSON.stringify(await ServicesVeterinarianCard())
  +',"Footer":'+JSON.stringify(await footer.Footer())+'}');
}
module.exports.ServicesPsychologistPage= async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header())
  +',"Card":'+JSON.stringify(await ServicesPsychologistCard())
  +',"Footer":'+JSON.stringify(await footer.Footer())+'}');
}
module.exports.ServicesTainersPage= async() => {
  return JSON.parse('{"Header":'+JSON.stringify(await header.Header())
  +',"Card":'+JSON.stringify(await ServicesTrainersCard())
  +',"Footer":'+JSON.stringify(await footer.Footer())+'}');
}