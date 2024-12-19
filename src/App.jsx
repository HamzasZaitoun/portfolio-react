import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <div className="container flex">
      <NavBar />
      <main>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      </main>
     
    </div>
  );
}

export default App;
