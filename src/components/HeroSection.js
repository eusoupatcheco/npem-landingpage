import React from 'react';

const HeroSection = React.forwardRef((props, ref) => {
  return (
    <header className="hero-section" ref={ref}>
      <div className="hero-content">
        <h1>Higienização Profissional de Estofados</h1>
        <p>Deixe seus estofados como novos com nossos serviços especializados.</p>
        <a href="#contato" className="cta-btn">Agende agora</a>
      </div>
    </header>
  );
});

export default HeroSection;
