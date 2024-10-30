import React from 'react';

// Importar prints das conversas
import whatsappPrint1 from './images/print.jpg';

const TestimonialsSection = () => {
  return (
    <section id="testimonials">
      <h2>O que nossos clientes estão dizendo</h2>

      <div className="testimonials-container">
        {/* Depoimento 1 */}
        <div className="testimonial-item">
          <img src={whatsappPrint1} alt="Depoimento de cliente 1" />
          <p>"Sofá ficou impecável, parecia novo! Atendimento rápido e de qualidade. Super recomendo!"</p>
        </div>

        {/* Depoimento 2 */}
        <div className="testimonial-item">
          <img src={whatsappPrint1} alt="Depoimento de cliente 2" />
          <p>"Higienizaram meu colchão e a diferença foi enorme. Trabalho super profissional."</p>
        </div>

        {/* Depoimento 3 */}
        <div className="testimonial-item">
          <img src={whatsappPrint1} alt="Depoimento de cliente 3" />
          <p>"O estofado do carro ficou como novo! Com certeza farei mais vezes."</p>
        </div>
        {/* para adicionar novos depoimentos, é so descomentar essa parte de codigo*/}
        {/* Depoimento 4 */}
        <div className="testimonial-item">
          <img src={whatsappPrint1} alt="Depoimento de cliente 4" />
          <p>"Minha cadeira ficou como nova após a higienização. Atendimento excelente!"</p>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
