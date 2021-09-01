const express = require('express');
const db = require('../../../db.js');
const header = require('../../parts/header/Headercontroller');

let Form =async()=>{
  return await db.DBquery("SELECT * FROM `formlist` fl INNER JOIN `formitems` fi ON fl.`formList-id`=fi.`formlist_id` WHERE fl.`formList-id`=1" )
}


module.exports.ContactUsPageJson = async ()=>{
return JSON.parse('{"Header":'+JSON.stringify(await header.Header())+',"Content":'+JSON.stringify(await Form())+'}')
}

let FormSave = async(data) => {
  console.log(`insert into \`technical_failure\`(uname, text) values("${data.uname}", "${data.text}");`)
  return await db.DBquery(`insert into \`technical_failure\`(uname, text) values("${data.uname}", "${data.text}");`);
}

module.exports.ContactUsTechnicalFailurePageJson = async (data)=>{
  await FormSave(data);
}
