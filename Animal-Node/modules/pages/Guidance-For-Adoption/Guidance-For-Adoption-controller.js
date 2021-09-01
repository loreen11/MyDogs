const gfadopt = require('./GuidanceForAdoption-db.js')


module.exports.GuidanceForAdoptionPage = async (req, res) => {
   res.json(await gfadopt.GuidanceForAdoptionPageJson());
}
