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
      color: '#e74c3c',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 85 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      color: '#3498db',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 82 },
        { name: 'Python', level: 80 },
        { name: 'Django', level: 75 },
        { name: 'RESTful APIs', level: 88 }
      ]
    },
    {
      category: 'Bases de Datos',
      icon: '🗄️',
      color: '#2ecc71',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MySQL', level: 78 },
        { name: 'Redis', level: 70 }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      color: '#f39c12',
      skills: [
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 78 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 72 }
      ]
    },
    {
      category: 'Seguridad',
      icon: '🔒',
      color: '#9b59b6',
      skills: [
        { name: 'Hacking Ético', level: 80 },
        { name: 'Pentesting', level: 75 },
        { name: 'OWASP', level: 85 },
        { name: 'Seguridad Web', level: 82 }
      ]
    }
  ];

  return (
    <section id="habilidades" ref={sectionRef}>
      <h2>Habilidades Técnicas</h2>
      <div className={`skills-grid-modern ${isVisible ? 'fade-in' : ''}`}>
        {skillsData.map((category, index) => (
          <div 
            key={index} 
            className="skill-card-modern"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-card-header">
              <span className="skill-icon">{category.icon}</span>
              <h3 style={{ color: category.color }}>{category.category}</h3>
            </div>
            <div className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        backgroundColor: category.color,
                        transitionDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;