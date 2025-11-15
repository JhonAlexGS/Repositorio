import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
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

  const skillsData = [
    {
      category: 'Frontend',
      icon: '🎨',
      color: '#374151',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      color: '#1f2937',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'APIs']
    },
    {
      category: 'Bases de Datos',
      icon: '🗄️',
      color: '#4b5563',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      color: '#6b7280',
      skills: ['AWS', 'Docker', 'Git', 'CI/CD']
    },
    {
      category: 'Inteligencia Artificial',
      icon: '🤖',
      color: '#111827',
      skills: ['MLflow', 'Evidently', 'TensorFlow', 'Scikit-learn', 'PyTorch']
    },
    {
      category: 'Seguridad',
      icon: '🔒',
      color: '#374151',
      skills: ['Hacking Ético', 'Pentesting', 'OWASP', 'Seguridad Web']
    }
  ];

  return (
    <section id="habilidades" ref={sectionRef}>
      <h2>Habilidades Técnicas</h2>
      <div className={`skills-grid-compact ${isVisible ? 'fade-in' : ''}`}>
        {skillsData.map((category, index) => (
          <div 
            key={index} 
            className="skill-card-compact"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-header-compact">
              <span className="skill-icon-compact">{category.icon}</span>
              <h3 style={{ color: category.color }}>{category.category}</h3>
            </div>
            <div className="skill-tags-compact">
              {category.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="skill-tag-compact"
                  style={{ 
                    borderColor: category.color,
                    color: category.color 
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;