import React, { useRef } from "react";
import HeroSection from "./HeroSection";
import ContactSection from "./ContactSection";

const LandingPage = () => {
  // Refs para as seções
  const heroSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  // Função para scroll suave
  const smoothScroll = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      {/* Menu de navegação com links para rolagem suave */}
      <nav>
        <button onClick={() => smoothScroll(heroSectionRef)}>Hero Section</button>
        <button onClick={() => smoothScroll(contactSectionRef)}>Contato</button>
      </nav>

      {/* Hero Section */}
      <HeroSection ref={heroSectionRef} />

      {/* Seção de Contato */}
      <ContactSection ref={contactSectionRef} />
    </div>
  );
};

export default LandingPage;
