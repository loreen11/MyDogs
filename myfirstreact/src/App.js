import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home.js';
import Services from './components/Pages/Services/Services.js'
import Contact from './components/Pages/Contact-Us/Contact-Us.js'
import AnimalsForAdoption from './components/Pages/Animals-for-adoption/AnimalsForAdoption';
import ServicesVeterinarians from './components/Pages/Services/ServicesVeterinarians';
import ServicesPsychologist from './components/Pages/Services/ServicesPsychologist';
import ServicesTrainers from './components/Pages/Services/ServicesTrainers';
import WhyShouldAdopt from './components/Pages/Why-should-adopt/WhyShouldAdopt';


class App extends React.Component{
  render() {
  return (

      <main>
          <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Animals-for-adoption" component={AnimalsForAdoption} exact />
        <Route path="/Services" component={Services} exact />
        <Route path="/Services/Veterinarians" component={ServicesVeterinarians} exact />
        <Route path="/Services/Psychologist" component={ServicesPsychologist} exact />
        <Route path="/Services/Trainers" component={ServicesTrainers} exact />
         <Route path="/Why-you-should-adopt" component={WhyShouldAdopt} exact/>
           <Route path="/ContactUs" component={Contact} exact/>

         </Switch>
      </main>

  );
}
}


export default App;
