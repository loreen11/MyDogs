const express = require('express')
const services = require('./Services-controller.js');

const router = express.Router();
router.get('/', services.ServicesPage)
router.get('/Veterinarians', services.ServicesVeterinariansPage)
router.get('/Psychologist', services.ServicesPsychologistPage)
router.get('/Trainers', services.ServicesTrainersPage)

module.exports.Router = router;
