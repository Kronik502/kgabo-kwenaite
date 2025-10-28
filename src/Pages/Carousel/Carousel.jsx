import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';
import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaServer,
  FaCode,
  FaLaptopCode,
  FaArrowRight,
} from 'react-icons/fa';

const techStack = [
  { icon: FaReact, name: 'React.js', color: '#61DBFB' },
  { icon: FaNodeJs, name: 'Node.js', color: '#68A063' },
  { icon: FaMobileAlt, name: 'React Native', color: '#0066ff' },
  { icon: FaServer, name: 'Express.js', color: '#1a73e8' },
  { icon: FaCode, name: 'JavaScript', color: '#F7DF1E' },
   { icon: FaMobileAlt, name: 'Flutter', color: '#0066ff' },
];

const Carousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate(); // ✅ For routing

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSeeProjects = () => {
    navigate('/projects'); // ✅ Route to /projects
  };

  return (
    <div className="carousel-section">
      {/* Background Effects */}
      <div className="background-overlay" />

      <div className="carousel-container">
        {/* Header Section */}
        <header className={`header-section ${isVisible ? 'animate-in' : ''}`}>
          <h1 className="main-title">
            <FaLaptopCode className="title-icon" />
            Full Stack Developer Portfolio
          </h1>
          <div className="title-underline" />
        </header>

        {/* Introduction Section */}
        <section className={`intro-section ${isVisible ? 'animate-in' : ''}`}>
          <div className="intro-content">
            <p className="intro-paragraph">
              With a diverse portfolio of projects spanning full-stack web applications, mobile apps,
              and static business websites, I bring strong, real-world experience in frontend and backend
              development, UI/UX design, and API integration using modern technologies.
            </p>

            <p className="intro-paragraph">
              My work demonstrates proficiency in building visually polished, responsive interfaces using
              <span className="tech-highlight react"> React.js</span>
              with state management, form handling, and component architecture. I've also extended my expertise into
              <span className="tech-highlight mobile"> React Native & Flutter</span>
              for mobile development, delivering cross-platform apps.
            </p>

            <p className="intro-paragraph">
              On the backend, I've implemented
              <span className="tech-highlight node"> Node.js</span>
              servers, real-time applications using Socket.IO, and RESTful APIs for dynamic data handling.
            </p>

            <p className="intro-paragraph">
              Additionally, I've built professional websites for real businesses—from bakeries to
              consulting firms—highlighting clean UX, accessibility, and mobile-first design.
            </p>

            <div className="tech-stack-list">
              <h4 className="tech-title">
                <FaCode className="tech-icon" /> Tech Stack:
              </h4>
              <ul className="tech-list">
                <li><strong>Frontend:</strong> React.js, CSS Modules, HTML5, JavaScript (ES6+),Flutter, Dart</li>
                <li><strong>Backend:</strong> Node.js, Express.js</li>
                <li><strong>Real-time:</strong> Socket.IO</li>
                <li><strong>Mobile:</strong> React Native</li>
                <li><strong>Deployment:</strong> Vercel, GitHub Pages</li>
                <li><strong>Version Control:</strong> Git, GitHub</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack Icons */}
        <section className={`tech-stack-section ${isVisible ? 'animate-in' : ''}`}>
          <div className="tech-stack-grid">
            {techStack.map(({ icon: Icon, name, color }, idx) => (
              <div key={idx} className="tech-item">
                <Icon size={40} style={{ color }} className="tech-icon" />
                <span className="tech-name">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`cta-section ${isVisible ? 'animate-in' : ''}`}>
          <button 
            className="see-projects-btn"
            onClick={handleSeeProjects} // ✅ Now routes to /projects
            aria-label="See all my projects"
          >
            <span>See All My Projects</span>
            <FaArrowRight className="btn-icon" />
          </button>
        </section>
      </div>
    </div>
  );
};

export default Carousel;
