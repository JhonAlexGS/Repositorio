import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa
      const sections = ['inicio', 'sobre-mi', 'habilidades', 'ai-tools', 'logros', 'experiencia', 'proyectos-academicos', 'proyectos', 'contacto'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Si el top de la sección está por encima del 40% de la pantalla
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    handleScroll(); // Ejecutar inmediatamente
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll); // También al cargar
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Forzar actualización después del scroll
      setTimeout(() => {
        setActiveSection(id);
      }, 100);
    }
  };

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'sobre-mi', label: 'Sobre Mí' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'ai-tools', label: 'IA Tools' },
    { id: 'logros', label: 'Logros' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'contacto', label: 'Contacto' }
  ];

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav>
        <div className="logo">
          <span className="logo-text">JAGS</span>
          <div className="logo-dot"></div>
        </div>

        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={menuOpen ? 'active' : ''}>
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
                {activeSection === item.id && <span className="active-indicator"></span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;