const animalAdoptiondb = require('./Animals-for-adoption-db.js')


module.exports.AnimalForAdoptionPage = async (req, res) => {
   res.json(await animalAdoptiondb.AnimalForAdoptionPageJson());
}
