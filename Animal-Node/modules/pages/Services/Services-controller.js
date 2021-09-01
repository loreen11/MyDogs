const servicesdb = require('./Services-db.js')


module.exports.ServicesPage = async (req, res) => {
   res.json(await servicesdb.ServicesPage());
}
module.exports.ServicesVeterinariansPage = async (req, res) => {
   res.json(await servicesdb.ServicesVeterinariansPage());
}
module.exports.ServicesPsychologistPage = async (req, res) => {
   res.json(await servicesdb.ServicesPsychologistPage());
}
module.exports.ServicesTrainersPage = async (req, res) => {
   res.json(await servicesdb.ServicesTainersPage());
}