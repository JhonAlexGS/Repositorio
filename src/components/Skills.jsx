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
      gradient: 'linear-gradient(135deg, #374151, #4b5563)',
      skills: [
        { name: 'HTML5', level: 90, icon: '📄' },
        { name: 'CSS3', level: 85, icon: '🎨' },
        { name: 'JavaScript', level: 88, icon: '⚡' },
        { name: 'React', level: 85, icon: '⚛️' },
        { name: 'Vue.js', level: 75, icon: '💚' }
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      color: '#1f2937',
      gradient: 'linear-gradient(135deg, #1f2937, #374151)',
      skills: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Express', level: 82, icon: '🚂' },
        { name: 'Python', level: 80, icon: '🐍' },
        { name: 'Django', level: 75, icon: '🎸' },
        { name: 'APIs', level: 88, icon: '🔌' }
      ]
    },
    {
      category: 'Bases de Datos',
      icon: '🗄️',
      color: '#4b5563',
      gradient: 'linear-gradient(135deg, #4b5563, #6b7280)',
      skills: [
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
        { name: 'MySQL', level: 78, icon: '🐬' },
        { name: 'Redis', level: 70, icon: '🔴' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      color: '#6b7280',
      gradient: 'linear-gradient(135deg, #6b7280, #9ca3af)',
      skills: [
        { name: 'AWS', level: 75, icon: '☁️' },
        { name: 'Docker', level: 78, icon: '🐳' },
        { name: 'Git', level: 90, icon: '🔧' },
        { name: 'CI/CD', level: 72, icon: '🔄' }
      ]
    },
    {
      category: 'Inteligencia Artificial',
      icon: '🤖',
      color: '#111827',
      gradient: 'linear-gradient(135deg, #111827, #1f2937)',
      skills: [
        { name: 'MLflow', level: 75, icon: '📊' },
        { name: 'Evidently', level: 70, icon: '📈' },
        { name: 'TensorFlow', level: 78, icon: '🧠' },
        { name: 'Scikit-learn', level: 80, icon: '🔬' },
        { name: 'PyTorch', level: 75, icon: '🔥' }
      ]
    },
    {
      category: 'Seguridad',
      icon: '🔒',
      color: '#374151',
      gradient: 'linear-gradient(135deg, #374151, #4b5563)',
      skills: [
        { name: 'Hacking Ético', level: 80, icon: '🎯' },
        { name: 'Pentesting', level: 75, icon: '🔍' },
        { name: 'OWASP', level: 85, icon: '🛡️' },
        { name: 'Seguridad Web', level: 82, icon: '🔐' }
      ]
    }
  ];

  return (
    <section id="habilidades" ref={sectionRef}>
      <h2>Habilidades Técnicas</h2>
      <div className={`skills-grid-enhanced ${isVisible ? 'fade-in' : ''}`}>
        {skillsData.map((category, index) => (
          <div 
            key={index} 
            className="skill-card-enhanced"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-card-header-enhanced" style={{ background: category.gradient }}>
              <span className="skill-icon-enhanced">{category.icon}</span>
              <h3>{category.category}</h3>
            </div>
            <div className="skill-card-body-enhanced">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item-enhanced">
                  <div className="skill-item-header">
                    <div className="skill-name-container">
                      <span className="skill-tech-icon">{skill.icon}</span>
                      <span className="skill-name-enhanced">{skill.name}</span>
                    </div>
                    <span className="skill-level-enhanced">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-enhanced">
                    <div 
                      className="skill-progress-enhanced"
                      style={{ 
                        width: isVisible ? `${skill.level}%` : '0%',
                        background: category.gradient,
                        transitionDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                      }}
                    >
                      <div className="skill-progress-shine"></div>
                    </div>
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