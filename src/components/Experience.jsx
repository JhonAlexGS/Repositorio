import React, { useEffect, useRef, useState } from 'react';

const Experience = () => {
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

  const experiences = [
    {
      company: 'Coally',
      period: '2024 - 2025',
      position: 'Full Stack Developer',
      responsibilities: [
        'Diseño de un sistema CRUD para la gestión de vehículos de una concesionaria, utilizando JavaScript en el backend con Express.js usando MongoDB como base de datos.',
        'Configuración e integración de endpoints API RESTful usando un sistema de autenticación basado en tokens JWT.',
        'Gestión de flujo de archivos integrando HubSpot.',
        'Implementación de un proyecto que unifica los sistemas de OAuth2 de distintas plataformas.'
      ],
      technologies: ['JavaScript', 'Express.js', 'MongoDB', 'JWT', 'OAuth2', 'HubSpot'],
      icon: '💼'
    },
    {
      company: 'BookLick',
      period: '2023 - 2024',
      position: 'Full Stack Developer',
      responsibilities: [
        'Programador y desarrollador en diferentes plataformas de bases de datos como MongoDB, PhpMyAdmin, MySQLProssgres usando lenguajes Python o JavaScript empleando el framework ReactJS.',
        'Gestor estadístico de bases de datos que mediante el uso de Power BI fomentaba el uso que tenían los usuarios frente a los servicios que ofrecía la plataforma BookLick.',
        'Gestionar e integrar recursos al buscador usando Postgress, Elastic Search.'
      ],
      technologies: ['MongoDB', 'MySQL', 'PostgreSQL', 'Python', 'JavaScript', 'React', 'Power BI', 'Elasticsearch'],
      icon: '📚'
    },
    {
      company: 'Mintic',
      period: '2022 - 2023',
      position: 'Monitor y Centro de Apoyo',
      responsibilities: [
        'Asistencia de programación y desarrollo en proyectos de máquinas virtuales de oracle, páginas web, como Monitor de MisiónTIC.'
      ],
      technologies: ['Oracle', 'JavaScript', 'HTML', 'CSS', 'Python'],
      icon: '🎓'
    },
    {
      company: 'NTT Data',
      period: '2022',
      position: 'Programador Junior',
      responsibilities: [
        'Desarrollo, revisión y supervisión de la funcionalidad y entrenamiento de las nuevas funcionalidades que ofrece el Chatbot de la compañía Zurich.'
      ],
      technologies: ['JavaScript', 'Chatbot', 'NLP', 'Node.js'],
      icon: '🏢'
    }
  ];

  return (
    <section id="experiencia" ref={sectionRef}>
      <h2>Experiencia Profesional</h2>
      <div className={`experience-timeline ${isVisible ? 'fade-in' : ''}`}>
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="experience-item"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="experience-icon">{exp.icon}</div>
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3>{exp.company}</h3>
                  <h4>{exp.position}</h4>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              
              <div className="experience-section">
                <h5 className="experience-subtitle">Responsabilidades</h5>
                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="experience-section">
                <h5 className="experience-subtitle">Tecnologías Implementadas</h5>
                <div className="experience-technologies">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="experience-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;