import React from 'react';
import Navbar from './layout/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home.js';
import About from './pages/about/About.js';
import Projects from './pages/projects/Projects.js';
import Contact from './pages/contact/Contact.js';
import Footer from './layout/Footer.js';

function App() 
{
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/contact' component={Contact} />
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
