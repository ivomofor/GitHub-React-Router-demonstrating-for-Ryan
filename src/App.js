import React from 'react';
import './App.css';
import './components/contact';
import './components/home';
import './components/nav';
import './components/services';
import Nav from './components/nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
const About = React.lazy(()=> import('./components/about'));
const Contact = React.lazy(()=> import('./components/contact'));
const Home = React.lazy(()=> import('./components/home'));
//const Nav = React.lazy(()=> import('./components/nav'));
const Services = React.lazy(()=> import('./components/services'));


function App(){
  return(
    <Router>
      <div className="App">
      <Nav/>
      <React.Suspense fallback={<p>Please wait...</p>}>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/services" component={Services}/>
        </Switch>
      </React.Suspense> 
    </div>
    </Router>
  );
}

export default App;