import React from 'react';

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero" id="inicio">
      <h2>Jhon Alexander García Sierra</h2>
      <p>Ingeniero de Sistemas y Telecomunicaciones | Desarrollador Full Stack | Especialista en Seguridad Informática</p>
      <a href="#contacto" className="btn" onClick={scrollToContact}>Contáctame</a>
    </section>
  );
};

export default Hero;