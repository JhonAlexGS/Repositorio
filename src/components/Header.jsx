import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav>
        <h1>JAG</h1>
        <ul>
          <li><a href="#inicio" onClick={(e) => scrollToSection(e, 'inicio')}>Inicio</a></li>
          <li><a href="#sobre-mi" onClick={(e) => scrollToSection(e, 'sobre-mi')}>Sobre Mí</a></li>
          <li><a href="#habilidades" onClick={(e) => scrollToSection(e, 'habilidades')}>Habilidades</a></li>
          <li><a href="#experiencia" onClick={(e) => scrollToSection(e, 'experiencia')}>Experiencia</a></li>
          <li><a href="#proyectos" onClick={(e) => scrollToSection(e, 'proyectos')}>Proyectos</a></li>
          <li><a href="#contacto" onClick={(e) => scrollToSection(e, 'contacto')}>Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;