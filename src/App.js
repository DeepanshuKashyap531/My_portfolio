import React from 'react';
import NavBar from './components/navbar';
import Intro from './components/Intro';
import About from './components/About'; 
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => (
  <div className="relative min-h-screen font-inter">
    <NavBar />
    <Intro />
    <About />
    <Education />
    <Skills />
    <Projects />
    <Contact />
  </div>
);

export default App;
