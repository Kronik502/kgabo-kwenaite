// src/pages/Detail.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaCode, FaCogs, FaUsers, FaSearch, FaArrowRight, FaDownload } from 'react-icons/fa';
import './Details.css';

import photo1 from '../../assets/mypic2.jpg';
import photo2 from '../../assets/mypic1.jpg';

const Detail = () => {
  const navigate = useNavigate();
  const [currentPhoto, setCurrentPhoto] = useState(photo1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on component mount
    setIsVisible(true);
    
    // Photo rotation interval
    const interval = setInterval(() => {
      setCurrentPhoto(prev => (prev === photo1 ? photo2 : photo1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <FaCode className="service-icon" />,
      title: "Full SDLC Approach",
      description: "Build, maintain, and improve web applications from requirements gathering to deployment and ongoing maintenance, ensuring quality at every stage."
    },
    {
      icon: <FaCogs className="service-icon" />,
      title: "Problem-Solving Expertise",
      description: "Solve complex performance, usability, and architectural challenges using agile methodologies, test-driven development, and user-centered design principles."
    },
    {
      icon: <FaUsers className="service-icon" />,
      title: "Business-Focused Development",
      description: "Transform client requirements and user needs into scalable, reliable, and maintainable solutions through comprehensive SDLC implementation."
    },
    {
      icon: <FaSearch className="service-icon" />,
      title: "Root Cause Analysis",
      description: "Analyze and resolve web application issues systematically by applying industry best practices and thorough debugging techniques at each SDLC stage."
    }
  ];

  const stats = [
    { number: "25+", label: "Projects Completed" },
    { number: "2+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="detail-page">
      {/* Hero Section */}
      <div className="detail-hero">
        <div className="detail-photo-container">
          <div className="photo-wrapper">
            <img 
              src={currentPhoto} 
              alt="Professional Developer Portrait" 
              className="detail-photo" 
            />
            <div className="photo-overlay"></div>
            <div className="photo-indicator">
              <span className={currentPhoto === photo1 ? 'active' : ''}></span>
              <span className={currentPhoto === photo2 ? 'active' : ''}></span>
            </div>
          </div>
        </div>

        <div className="detail-intro">
          <div className="intro-badge">
            <FaCode className="badge-icon" />
            <span>Full-Stack Developer</span>
          </div>
          <h1 className={`detail-title ${isVisible ? 'animate-in' : ''}`}>
            What I Do
          </h1>
          <p className="detail-subtitle">
            Transforming ideas into powerful, scalable web solutions through comprehensive 
            development expertise and innovative problem-solving approaches.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2 className="services-title">Core Expertise</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className={`service-card ${isVisible ? 'animate-in' : ''}`}>
              <div className="service-header">
                {service.icon}
                <h3 className="service-title">{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              <div className="service-indicator"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Work Together?</h2>
          <p className="cta-description">
            Let's discuss how I can help bring your project to life with cutting-edge 
            development solutions and exceptional attention to detail.
          </p>
          
          <div className="cta-buttons">
            <button 
              className="detail-button primary" 
              onClick={() => navigate('/about')}
            >
              <span>Learn More About Me</span>
              <FaArrowRight className="button-icon" />
            </button>
            
           
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="bg-decoration decoration-1"></div>
      <div className="bg-decoration decoration-2"></div>
      <div className="bg-decoration decoration-3"></div>
    </div>
  );
};

export default Detail;