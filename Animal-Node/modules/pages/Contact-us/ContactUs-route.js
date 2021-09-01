const express = require('express')
const contactus = require('./Contact-us-controller.js');

const router = express.Router();

router.get('/', contactus.ContactUsPage)
router.get('/adoptionQuestions',contactus.AdotionQuestionsPage)
router.post('/', contactus.CreateTechnicalFailure)

module.exports.Router = router;
