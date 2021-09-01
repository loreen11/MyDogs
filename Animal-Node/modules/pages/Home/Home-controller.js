const homedb = require('./Home-db.js')


module.exports.HomePage = async (req, res) => {
   res.json(await homedb.HomePageJson());
}
