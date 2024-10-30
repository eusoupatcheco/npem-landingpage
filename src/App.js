import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Description from './components/Description';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

import '@fontsource/nunito-sans'; // Importa a fonte padrão
import "slick-carousel/slick/slick.css"; // carousel services
import "slick-carousel/slick/slick-theme.css"; // carousel services


import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <Description />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
