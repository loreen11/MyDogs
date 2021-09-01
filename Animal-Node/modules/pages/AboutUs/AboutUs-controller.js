const express = require('express');
const router = expressRouter();
const myjson = require('/aboutUs.json');




router.get('/',function(req, res){
  res.myjson(myjson)
})


module.exports=router;
