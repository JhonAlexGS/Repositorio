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
            tags: ['Node.js', 'MongoDB', 'JWT']
        },
        {
            title: 'Plataforma E-commerce',
            description: 'Desarrollo completo de plataforma de comercio electrónico con carrito, pagos y panel administrativo.',
            tags: ['React', 'PostgreSQL', 'AWS']
        },
        {
            title: 'Herramienta de Pentesting',
            description: 'Desarrollo de herramienta automatizada para auditorías de seguridad web.',
            tags: ['Python', 'Security', 'OWASP']
        }
    ];




    return (
        <section id="proyectos" ref={sectionRef}>
            <h2>Proyectos Destacados</h2>
            <div className={`projects-grid ${isVisible ? 'fade-in' : ''}`}>
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-card-header">
                            <h3>{project.title}</h3>
                        </div>
                        <div className="project-card-body">
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