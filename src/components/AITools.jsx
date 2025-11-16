import React, { useEffect, useRef, useState } from 'react';

const AITools = () => {
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

  const aiTools = [
    {
      name: 'ChatGPT',
      category: 'Conversacional',
      description: 'Asistente de IA para generación de texto, código y análisis',
      icon: '💬',
      color: '#10a37f',
      level: 90
    },
    {
      name: 'Claude',
      category: 'Conversacional',
      description: 'IA avanzada de Anthropic para análisis y desarrollo',
      icon: '🤖',
      color: '#CC785C',
      level: 85
    },
    {
      name: 'GitHub Copilot',
      category: 'Código',
      description: 'Asistente de programación impulsado por IA',
      icon: '👨‍💻',
      color: '#24292e',
      level: 80
    },
    {
      name: 'Midjourney',
      category: 'Imagen',
      description: 'Generación de imágenes mediante IA',
      icon: '🎨',
      color: '#FF6F61',
      level: 70
    },
    {
      name: 'Gemini',
      category: 'Conversacional',
      description: 'IA multimodal de Google para texto, código e imágenes',
      icon: '✨',
      color: '#4285F4',
      level: 75
    },
    {
      name: 'Perplexity',
      category: 'Búsqueda',
      description: 'Motor de búsqueda potenciado por IA',
      icon: '🔍',
      color: '#20808D',
      level: 65
    }
  ];

  const categories = ['Todas', 'Conversacional', 'Código', 'Imagen', 'Búsqueda'];
  const [activeCategory, setActiveCategory] = useState('Todas');

  const filteredTools = activeCategory === 'Todas' 
    ? aiTools 
    : aiTools.filter(tool => tool.category === activeCategory);

  return (
    <section id="ai-tools" ref={sectionRef}>
      <h2>Inteligencias Artificiales</h2>
      <p className="ai-tools-subtitle">
        Herramientas de IA que domino y utilizo en mi flujo de trabajo diario
      </p>

      <div className="ai-categories">
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

      <div className={`ai-tools-grid ${isVisible ? 'fade-in' : ''}`}>
        {filteredTools.map((tool, index) => (
          <div 
            key={index} 
            className="ai-tool-card"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              '--tool-color': tool.color
            }}
          >
            <div className="ai-tool-header">
              <div className="ai-tool-icon" style={{ background: tool.color }}>
                {tool.icon}
              </div>
              <span className="ai-tool-category">{tool.category}</span>
            </div>
            
            <div className="ai-tool-content">
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
            </div>

            <div className="ai-tool-footer">
              <div className="ai-tool-level">
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
          </div>
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

export default AITools;