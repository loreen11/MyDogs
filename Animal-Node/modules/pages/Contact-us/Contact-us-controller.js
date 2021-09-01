const contactusdb = require('./Contact-us-db.js')
const animaladoptionquestionsdb = require('../Animals-for-adoption/Animals-for-adoption-questions-db.js')

module.exports.ContactUsPage = async (req, res) => {

   res.json(await contactusdb.ContactUsPageJson());
}
module.exports.AdotionQuestionsPage = async (req, res) => {
   res.json(await animaladoptionquestionsdb.ContactUsPageJson());
}

module.exports.CreateTechnicalFailure = async (req, res) => {
  await contactusdb.ContactUsTechnicalFailurePageJson(req.body)
   res.json({ success: true, message: 'your message recevied' });
}
