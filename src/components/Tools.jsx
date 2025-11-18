import React, { useEffect, useRef, useState } from 'react';

const Tools = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const tools = [
    {
        name: 'NetBeans',
        category: 'IDE',
        description: 'Entorno de desarrollo integrado para Java y otros lenguajes',
        icon: '☕',
        color: '#1B6AC6',
        level: 85,
        url: 'https://netbeans.apache.org'
    },
    {
        name: 'Visual Studio Code',
        category: 'IDE',
        description: 'Editor de código fuente ligero y potente',
        icon: '💻',
        color: '#007ACC',
        level: 95,
        url: 'https://code.visualstudio.com'
    },
    {
        name: 'MongoDB Compass',
        category: 'Base de Datos',
        description: 'GUI para explorar y manipular bases de datos MongoDB',
        icon: '🍃',
        color: '#13AA52',
        level: 80,
        url: 'https://www.mongodb.com/products/compass'
    },
    {
        name: 'Postman',
        category: 'API',
        description: 'Plataforma para desarrollo y testing de APIs',
        icon: '📮',
        color: '#FF6C37',
        level: 90,
        url: 'https://www.postman.com'
    },
    {
        name: 'Insomnia',
        category: 'API',
        description: 'Cliente REST para diseño y testing de APIs',
        icon: '💤',
        color: '#5849BE',
        level: 85,
        url: 'https://insomnia.rest'
    },
    {
        name: 'n8n',
        category: 'Automatización',
        description: 'Herramienta de automatización de workflows con nodos visuales',
        icon: '⚡',
        color: '#EA4B71',
        level: 75,
        url: 'https://n8n.io'
    },
    {
        name: 'Docker Desktop',
        category: 'DevOps',
        description: 'Plataforma para desarrollo y despliegue de contenedores',
        icon: '🐳',
        color: '#2496ED',
        level: 80,
        url: 'https://www.docker.com/products/docker-desktop'
    },
    {
        name: 'Git',
        category: 'Control de Versiones',
        description: 'Sistema de control de versiones distribuido',
        icon: '🔧',
        color: '#F05032',
        level: 90,
        url: 'https://git-scm.com'
    },
    {
        name: 'Figma',
        category: 'Diseño',
        description: 'Herramienta colaborativa de diseño de interfaces',
        icon: '🎨',
        color: '#F24E1E',
        level: 70,
        url: 'https://www.figma.com'
    },
    {
        name: 'pgAdmin',
        category: 'Base de Datos',
        description: 'Herramienta de administración para PostgreSQL',
        icon: '🐘',
        color: '#336791',
        level: 75,
        url: 'https://www.pgadmin.org'
    }
    ];

  const categories = ['Todas', 'IDE', 'Base de Datos', 'API', 'Automatización', 'DevOps', 'Control de Versiones', 'Diseño'];
  const [activeCategory, setActiveCategory] = useState('Todas');

  const filteredTools = activeCategory === 'Todas' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <section id="herramientas" ref={sectionRef}>
      <h2>Herramientas y Software</h2>
      <p className="tools-subtitle">
        Software y herramientas que utilizo en mi desarrollo diario
      </p>

      <div className="tools-categories">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={`tools-grid ${isVisible ? 'fade-in' : ''}`}>
        {filteredTools.map((tool, index) => (
          <a
            key={index}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tool-card"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              '--tool-color': tool.color
            }}
          >
            <div className="tool-header">
              <div className="tool-icon" style={{ background: tool.color }}>
                {tool.icon}
              </div>
              <span className="tool-category">{tool.category}</span>
            </div>
            
            <div className="tool-content">
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>

            <div className="tool-footer">
              <div className="tool-level">
                <span className="level-label">Dominio</span>
                <div className="level-bar">
                  <div 
                    className="level-progress"
                    style={{ 
                      width: isVisible ? `${tool.level}%` : '0%',
                      background: tool.color
                    }}
                  ></div>
                </div>
                <span className="level-percentage">{tool.level}%</span>
              </div>
            </div>

            <div className="tool-link-indicator">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>
        ))}
      </div>

      {filteredTools.length === 0 && (
        <div className="no-results">
          <p>No hay herramientas en esta categoría</p>
        </div>
      )}
    </section>
  );
};

export default Tools;