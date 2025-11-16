import React, { useEffect, useRef, useState } from 'react';

const AITools = () => {
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

  const aiTools = [
    {
      name: 'ChatGPT',
      category: 'Conversacional',
      description: 'Asistente de IA para conversaciones, programación y análisis de texto',
      icon: '💬',
      color: '#10a37f',
      link: 'https://chat.openai.com'
    },
    {
      name: 'Claude',
      category: 'Conversacional',
      description: 'IA avanzada para tareas complejas, análisis y programación',
      icon: '🤖',
      color: '#d97757',
      link: 'https://claude.ai'
    },
    {
      name: 'Midjourney',
      category: 'Generación de Imágenes',
      description: 'Creación de imágenes artísticas mediante prompts',
      icon: '🎨',
      color: '#000000',
      link: 'https://midjourney.com'
    },
    {
      name: 'GitHub Copilot',
      category: 'Programación',
      description: 'Asistente de código impulsado por IA',
      icon: '⚡',
      color: '#2dba4e',
      link: 'https://github.com/features/copilot'
    },
    {
      name: 'DALL-E',
      category: 'Generación de Imágenes',
      description: 'Generación de imágenes desde descripciones de texto',
      icon: '🖼️',
      color: '#10a37f',
      link: 'https://openai.com/dall-e-3'
    },
    {
      name: 'Gemini',
      category: 'Conversacional',
      description: 'IA multimodal de Google para diversas tareas',
      icon: '✨',
      color: '#4285f4',
      link: 'https://gemini.google.com'
    }
  ];

  const