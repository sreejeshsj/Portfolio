import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Skills from './components/Skills';
import AboutMe from './components/AboutMe';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe/>
      <Education />
      <Skills/>
      <Projects />
      <Contact />
    </>
  );
}

export default App;