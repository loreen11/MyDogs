const whyAdoptiondb = require('./Why-you-should-adopt-db.js')


module.exports.WhyShouldAdoptPage = async (req, res) => {
   res.json(await  whyAdoptiondb.WhyShouldAdoptPage());
}
