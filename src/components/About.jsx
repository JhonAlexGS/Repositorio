import React, { useEffect, useRef, useState } from 'react';

const About = () => {
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

  return (
    <section id="sobre-mi" ref={sectionRef} className={isVisible ? 'fade-in' : ''}>
      <h2>Sobre Mí</h2>
      <div className="about-content">
        <p>
          Soy un ingeniero apasionado por la tecnología con 2 años de experiencia en desarrollo full stack. 
          Mi enfoque principal está en crear soluciones robustas y seguras, combinando mi expertise en desarrollo 
          web con un profundo interés en seguridad informática y hacking ético.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Especializado en arquitecturas escalables, bases de datos y servicios en la nube, siempre busco 
          implementar las mejores prácticas de seguridad en cada proyecto que desarrollo.
        </p>
      </div>
    </section>
  );
};

export default About;