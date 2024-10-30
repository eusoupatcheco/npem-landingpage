import React from 'react';

import serviceImage4 from './images/service-image4.jpg';

const Description = () => {
  return (
    <section id="description">
      <h2>Sobre Nosso Serviço</h2>
      <div className="description-content">
        
        {/* Benefícios do serviço */}
        <div className="description-item">
          <img src={serviceImage4} alt="Benefícios de Não Fazer" />
          <h3>Benefícios do Serviço</h3>
          <p>Nosso serviço de higienização traz benefícios como a remoção de alérgenos, melhora na qualidade do ar e aumento da vida útil dos estofados.</p>
        </div>
        
        {/* Malefícios de não realizar o serviço */}
        <div className="description-item">
        <img src={serviceImage4} alt="Malefícios de Não Fazer" />
          <h3>Malefícios de Não Fazer</h3>
          <p>Sem uma higienização regular, há o acúmulo de ácaros, sujeira e fungos, que podem causar problemas de saúde e reduzir a vida útil do seu estofado.</p>
        </div>
        
        {/* Qualidade do serviço */}
        <div className="description-item">
        <img src={serviceImage4} alt="Qualidade do serviço" />  
          <h3>Qualidade do Serviço</h3>
          <p>Utilizamos produtos e equipamentos de alta qualidade para garantir que seu estofado fique impecável e livre de agentes nocivos à saúde.</p>
        </div>
      </div>
    </section>
  );
};

export default Description;