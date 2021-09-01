var mysql = require('mysql');
var config = require('./config/config.json');
const util = require('util');



connection = mysql.createConnection({
  host: config.DB_USER_CREDENTIALS.HOST,
  user: config.DB_USER_CREDENTIALS.USERNAME,
  password: config.DB_USER_CREDENTIALS.PASSWORD,
  database: config.DB_USER_CREDENTIALS.DBNAME
});



connection.connect(function(err){
  if (err) {throw err};
  console.log("Connected!");
   // connection.query("CREATE DATABASE resturants", function (err, result) {
   // if (err) {throw err};
   // console.log("Database created");
 });

const DBquery = util.promisify (connection.query).bind(connection);

module.exports = {
  DBquery
};
