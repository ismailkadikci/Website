import React from 'react';
import Navbar from './layout/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Footer from './layout/Footer';

function App() 
{
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}></Route>
        <Route path='/projects' component={Projects}></Route>
        <Route path='/contact' component={Contact}></Route>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
