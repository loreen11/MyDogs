const express = require('express')
const FooterDB = require('./footerdb')

module.exports.Footer = async (req,res)=>{
  return(await FooterDB.FooterPage());
}
