import React from 'react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Services />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
