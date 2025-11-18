import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import AITools from './components/AITools';
import Tools from './components/Tools';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import AcademicProjects from './components/AcademicProjects';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App scroll-container">
      <Header />
      <Hero />
      <div className="sections-container">
        <About />
        <Skills />
        <AITools />
        <Tools />
        <Achievements />
        <Experience />
        <AcademicProjects />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;