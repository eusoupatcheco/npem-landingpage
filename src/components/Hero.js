import React from 'react';

const Hero = React.forwardRef((props, ref) => {
  return (
    <header className="hero-header" ref={ref}>
      <div className="hero-content">
        <h1>Higienização Profissional de Estofados</h1>
        <p>Deixe seus estofados como novos com nossos serviços especializados.</p>
        <a href="#contact" className="call-to-action-btn">Agende agora</a>
      </div>
    </header>
  );
});

export default Hero;
