
import React from 'react';
import './App.css';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <Hero />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
