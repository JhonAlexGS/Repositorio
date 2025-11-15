import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
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

  const projects = [
    {
      title: 'Sistema de Autenticación Seguro',
      description: 'Implementación de sistema de autenticación con JWT, 2FA y encriptación avanzada.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      tags: ['Node.js', 'MongoDB', 'JWT'],
      link: '#'
    },
    {
      title: 'Plataforma E-commerce',
      description: 'Desarrollo completo de plataforma de comercio electrónico con carrito, pagos y panel administrativo.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop',
      tags: ['React', 'PostgreSQL', 'AWS'],
      link: '#'
    },
    {
      title: 'Herramienta de Pentesting',
      description: 'Desarrollo de herramienta automatizada para auditorías de seguridad web.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      tags: ['Python', 'Security', 'OWASP'],
      link: '#'
    }
  ];

  return (
    <section id="proyectos" ref={sectionRef}>
      <h2>Proyectos Destacados</h2>
      <div className={`projects-grid-modern ${isVisible ? 'fade-in' : ''}`}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card-modern"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
              <div className="project-overlay">
                <a href={project.link} className="project-link">Ver Proyecto</a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;