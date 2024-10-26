import React from 'react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import ServiceSection from './components/ServiceSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import '@fontsource/nunito-sans'; // Importa a fonte padrão
import "slick-carousel/slick/slick.css"; // carousel services
import "slick-carousel/slick/slick-theme.css"; // carousel services


import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Services />
      <ServiceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
