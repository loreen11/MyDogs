const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

// const login = require('./modules/pages/LogIn/LogIn-controller');
const home = require('./modules/pages/Home/Home-controller.js');
const animalsForAdoption = require('./modules/pages/Animals-for-adoption/Animals-for-adoption-controller.js');
const services = require('./modules/pages/Services/Services-controller.js');
const whyoushouldadopt = require('./modules/pages/Why-you-should-adopt/Why-you-should-adopt-controller.js');
// const guidance_for_adoptation = require('./modules/pages/Guidance-For-Adoption/Guidance-For-Adoption-controller.js');
// const aboutus = require('./modules/pages/aboutUs/AboutUScontroller');
const servicesRoutes = require('./modules/pages/Services/Services-route.js');
const contactusRoutes = require('./modules/pages/Contact-us/ContactUs-route.js');
const test = require('./db')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// GET method route
app.get('/home', home.HomePage);
app.get('/Animals-for-adoption', animalsForAdoption.AnimalForAdoptionPage)
app.get('/Why-you-should-adopt',whyoushouldadopt.WhyShouldAdoptPage)
app.use('/Services?', servicesRoutes.Router);
app.use('/contact(us)?', contactusRoutes.Router)

// app.get('/Guidance-For-Adoption', guidance_for_adoptation.GuidanceForAdoptionPage)

// app.get('/about(us)?', aboutus.AboutusPage)
// app.get('/contact(us)?', contactus.ContactusPage)
//app.get('/login', login.LoginPage)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
