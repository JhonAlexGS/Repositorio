import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
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

  const contactItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      title: 'Email',
      subtitle: 'Escríbeme directamente',
      value: 'alexgsierra22@gmail.com',
      link: 'mailto:alexgsierra22@gmail.com',
      color: '#1f2937',
      bgColor: 'rgba(31, 41, 55, 0.05)'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      title: 'Teléfono',
      subtitle: 'Hablame por WhatsApp',
      value: '+57 318 211 1063',
      link: 'tel:+573182111063',
      color: '#374151',
      bgColor: 'rgba(55, 65, 81, 0.05)'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      subtitle: 'Revisa mis proyectos',
      value: 'github.com/JhonAlexGS',
      link: 'https://github.com/JhonAlexGS',
      color: '#4b5563',
      bgColor: 'rgba(75, 85, 99, 0.05)'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      title: 'LinkedIn',
      subtitle: 'Contactame',
      value: 'jhonalexandergarciasierra',
      link: 'https://linkedin.com/in/jhonalexandergarciasierra',
      color: '#6b7280',
      bgColor: 'rgba(107, 114, 128, 0.05)'
    }
  ];

  const socialLinks = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ), 
      link: 'mailto:alexgsierra22@gmail.com', 
      name: 'Email' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ), 
      link: 'https://github.com/JhonAlexGS', 
      name: 'GitHub' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ), 
      link: 'https://linkedin.com/in/jhonalexandergarciasierra', 
      name: 'LinkedIn' 
    }
  ];

  return (
    <section id="contacto" ref={sectionRef}>
      <div className="contact-container">
        <div className="contact-intro">
          {/* <span className="contact-label">Contáctame</span> */}
          <h2>¿Hablamos de tu próximo proyecto?</h2>
          <p className="contact-description">
            Estoy disponible para colaborar en proyectos innovadores, desarrollar soluciones tecnológicas 
            o simplemente conversar sobre oportunidades. No dudes en ponerte en contacto conmigo.
          </p>
        </div>

        <div className={`contact-methods ${isVisible ? 'fade-in' : ''}`}>
          {contactItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : undefined}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact-method-card"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--hover-color': item.color,
                '--bg-color': item.bgColor
              }}
            >
              <div className="contact-method-icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              <div className="contact-method-content">
                <h3>{item.title}</h3>
                <p className="contact-method-subtitle">{item.subtitle}</p>
                <p className="contact-method-value">{item.value}</p>
              </div>
              <div className="contact-method-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className={`contact-footer ${isVisible ? 'fade-in' : ''}`} style={{ animationDelay: '0.5s' }}>
          <div className="contact-cta-box">
            <div className="cta-content">
              <h3>¿Listo para comenzar?</h3>
              <p>Construyamos algo increíble juntos. Estoy a un mensaje de distancia.</p>
              <div className="cta-buttons">
                <a href="mailto:alexgsierra22@gmail.com" className="cta-btn-primary">
                  <span>Enviar Email</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/jhonalexandergarciasierra" target="_blank" rel="noopener noreferrer" className="cta-btn-secondary">
                  <span>Ver LinkedIn</span>
                </a>
              </div>
            </div>
            <div className="cta-social">
              <p>O encuéntrame en:</p>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    target={social.link.startsWith('http') ? '_blank' : undefined}
                    rel={social.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="social-icon"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="contact-location">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span>Bogotá, Colombia 🇨🇴</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;