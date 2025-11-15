import React, { useEffect, useRef, useState } from 'react';

const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    technologies: 0,
    experience: 0,
    certifications: 0
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
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

  const animateCounters = () => {
    const targets = {
      projects: 15,
      technologies: 20,
      experience: 2,
      certifications: 6
    };

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    Object.keys(targets).forEach(key => {
      let current = 0;
      const increment = targets[key] / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targets[key]) {
          current = targets[key];
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepDuration);
    });
  };

  const achievements = [
    {
      icon: '🏆',
      title: 'Proyectos Completados',
      count: counters.projects,
      suffix: '+',
      color: '#f39c12'
    },
    {
      icon: '💻',
      title: 'Tecnologías Dominadas',
      count: counters.technologies,
      suffix: '+',
      color: '#3498db'
    },
    {
      icon: '📅',
      title: 'Años de Experiencia',
      count: counters.experience,
      suffix: '',
      color: '#2ecc71'
    },
    {
      icon: '📜',
      title: 'Certificaciones',
      count: counters.certifications,
      suffix: '+',
      color: '#9b59b6'
    }
  ];

  const highlights = [
    {
      icon: '🎯',
      title: 'Desarrollo Full Stack',
      description: 'Experiencia completa en frontend y backend con tecnologías modernas'
    },
    {
      icon: '🔐',
      title: 'Seguridad Avanzada',
      description: 'Especialización en hacking ético y auditorías de seguridad'
    },
    {
      icon: '⚡',
      title: 'Optimización de Rendimiento',
      description: 'Mejora del rendimiento de aplicaciones hasta un 60%'
    },
    {
      icon: '🚀',
      title: 'Implementación Cloud',
      description: 'Despliegue y gestión de aplicaciones en AWS y servicios cloud'
    }
  ];

  return (
    <section id="logros" ref={sectionRef}>
      <h2>Logros y Reconocimientos</h2>
      
      <div className={`achievements-stats ${isVisible ? 'fade-in' : ''}`}>
        {achievements.map((achievement, index) => (
          <div 
            key={index} 
            className="achievement-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="achievement-icon" style={{ color: achievement.color }}>
              {achievement.icon}
            </div>
            <div className="achievement-count" style={{ color: achievement.color }}>
              {achievement.count}{achievement.suffix}
            </div>
            <div className="achievement-title">{achievement.title}</div>
          </div>
        ))}
      </div>

      <div className={`achievements-highlights ${isVisible ? 'fade-in' : ''}`}>
        {highlights.map((highlight, index) => (
          <div 
            key={index} 
            className="highlight-card"
            style={{ animationDelay: `${(index + 4) * 0.1}s` }}
          >
            <div className="highlight-icon">{highlight.icon}</div>
            <div className="highlight-content">
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;