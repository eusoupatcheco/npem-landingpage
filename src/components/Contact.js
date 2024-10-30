import React from 'react';
// Importando os ícones das redes sociais
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'; // Ícone do TikTok

const Contact = React.forwardRef((props, ref) => {
  return (
    <section id="contact" ref={ref}>
      <h2>Entre em Contato</h2>
      <p>Pronto para agendar sua higienização? Fale conosco via WhatsApp!</p>
      
      {/* Botão do WhatsApp com ícone */}
      <a 
        href="https://wa.me/5527995899801?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20higienização%20de%20estofados!" 
        className="whatsapp-btn" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={20} /> Fale pelo WhatsApp
      </a>

      {/* Seção de links das redes sociais */}
      <div className="social-links">
        <h3>Siga-nos nas redes sociais:</h3>
        <a 
          href="https://www.facebook.com/seu-negocio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon facebook"
        >
          <FaFacebook size={30} /> {/* Ícone do Facebook */}
        </a>
        <a 
          href="https://www.instagram.com/seu-negocio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon instagram"
        >
          <FaInstagram size={30} /> {/* Ícone do Instagram */}
        </a>
        <a 
          href="https://www.tiktok.com/@seu-negocio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon tiktok"
        >
          <SiTiktok size={30} /> {/* Ícone do TikTok */}
        </a>
      </div>
    </section>
  );
});

export default Contact;
