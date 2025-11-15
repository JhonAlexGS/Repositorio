import React, { useEffect, useRef, useState } from 'react';

const AcademicProjects = () => {
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

  const academicProjects = [
    {
      year: '2020',
      title: 'Desarrollo Inicial',
      description: 'Agentes inteligentes en Python, desarrollo web y Back-end en Java para tienda virtual',
      icon: '💡'
    },
    {
      year: '2020-2022',
      title: 'Semillero IoT',
      description: 'Investigación en aplicación de señales IEEE 802.11 A en plataformas SDR',
      icon: '🔬'
    },
    {
      year: '2022',
      title: 'DataFest & Misión TIC',
      description: 'Monitor de Misión Tic - Repositorio de seguridad informática y GNSS SDR',
      icon: '🎯'
    },
    {
      year: '2023',
      title: 'Proyecto de Grado',
      description: 'Metodología para adquisición de señales GNSS - Estimación espectral',
      icon: '📚'
    }
  ];

  return (
    <section id="proyectos-academicos" ref={sectionRef}>
      <h2>Proyectos y Logros Académicos</h2>
      <div className={`timeline-academic ${isVisible ? 'fade-in' : ''}`}>
        <div className="timeline-line"></div>
        {academicProjects.map((project, index) => (
          <div 
            key={index} 
            className="timeline-point"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-card-academic">
              <div className="timeline-year">{project.year}</div>
              <div className="timeline-icon-academic">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicProjects;