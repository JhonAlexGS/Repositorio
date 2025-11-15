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
      title: 'Desarrollador Full Stack',
      date: '2023 - Presente',
      description: 'Desarrollo de aplicaciones web completas utilizando stack MERN/PERN, implementando medidas de seguridad y optimización de rendimiento.'
    },
    {
      title: 'Desarrollador Backend',
      date: '2022 - 2023',
      description: 'Diseño y desarrollo de APIs RESTful, gestión de bases de datos relacionales y no relacionales, implementación de arquitecturas escalables en AWS.'
    }
  ];

  return (
    <section id="experiencia" ref={sectionRef}>
      <h2>Experiencia Profesional</h2>
      <div className={`timeline ${isVisible ? 'fade-in' : ''}`}>
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <div className="date">{exp.date}</div>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;