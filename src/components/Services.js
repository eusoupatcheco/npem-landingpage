import React from 'react';
import Slider from "react-slick";

// Importando as imagens dos serviços
import serviceImage1 from './images/service-01.webp';
import serviceImage2 from './images/service-02.webp';
import serviceImage3 from './images/service-03.webp';

const Services = () => {
  // Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <section id="servicos">
      <h2>Nossos Serviços</h2>

      {/* Carrossel de Serviços */}
      <Slider {...settings}>
        <div className="service-item">
          <img src={serviceImage1} alt="Higienização de Sofás" />
          <h3>Higienização de Sofás</h3>
          <p>Deixe seu sofá livre de manchas e ácaros com nossos serviços especializados.</p>
        </div>

        <div className="service-item">
          <img src={serviceImage2} alt="Higienização de Colchões" />
          <h3>Higienização de Colchões</h3>
          <p>Garanta noites de sono mais tranquilas com colchões higienizados e sem odores.</p>
        </div>

        <div className="service-item">
          <img src={serviceImage3} alt="Higienização de Estofados de Carro" />
          <h3>Higienização de Estofados de Carro</h3>
          <p>Mantenha seu carro limpo e cheiroso com a higienização profissional de estofados.</p>
        </div>
      </Slider>
    </section>
  );
};

export default Services;
