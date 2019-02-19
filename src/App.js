import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav'
import About from './components/about'
import Skills from './components/skills'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />,
        <About />
        <Skills />
        <Contact />
      </div>
    );
  }
}

export default App;
