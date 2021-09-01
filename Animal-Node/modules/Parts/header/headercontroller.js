const express = require('express')
const HeaderDB = require('./headerdb')



module.exports.Header = async (req,res)=>{
  return(await HeaderDB.HeaderPages());
}
