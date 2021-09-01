const veterinariansdb = require('./Veterinarians-db.js')


module.exports.VeterinariansPage = async (req, res) => {
   res.json(await veterinariansdb.VeterinariansPage());
}