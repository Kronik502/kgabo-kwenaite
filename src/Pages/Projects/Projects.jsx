import React, { useState } from 'react'; 
import { 
  FaReact, 
  FaNodeJs, 
  FaCss3Alt, 
  FaFigma,
  FaGitAlt,
  FaNpm
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiMongodb, 
  SiFirebase, 
  SiRedux,
  SiVite,
  SiTailwindcss,
  SiExpress,
  SiVercel,
  SiTypescript
} from 'react-icons/si';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import './Projects.css';
// Import images
import ProfileAppImage from '../../assets/Apps/Profile-App.jpg';
import RecipeAppImage from '../../assets/Apps/Recipe-App.jpg';
import MortgageCalculatorImage from '../../assets/Apps/Mortgage-App.jpg';
import WeatherAppImage from '../../assets/Apps/Weather-App.jpg';
import NodeCardGameImage from '../../assets/Apps/Card-Game.jpg';
import HotelImage from '../../assets/Apps/Hotel.png';
import Default from '../../assets/Apps/Default.png';
import Math from '../../assets/Apps/Math.png';
import ToDo from '../../assets/Apps/To-Do.png';
import Employee from '../../assets/Apps/Employees.png';
import Fipas from '../../assets/Apps/Fipas.jpg';
import DandH from '../../assets/Apps/DandH.jpg';
import DemoBakery from '../../assets/Apps/DemoB.jpg';
import Grey from '../../assets/Apps/Grey.jpg';
import JandL from '../../assets/Apps/JL.jpg';
import Starland from '../../assets/Apps/Starland.jpg';
import Tipsy from '../../assets/Apps/Tipsy.jpg';
import Bulk from '../../assets/Apps/bulk.jpg';
import Cargo from '../../assets/Apps/cargo.jpg';
import Manga from '../../assets/Apps/Manga.jpg';
import Puur from '../../assets/Apps/puur.jpg';
import Wings from '../../assets/Apps/wings.jpg';


function Projects() {
  const allProjects = [
    {
      title: 'MangaNola Trading',
      description: 'Professional website designed for a trading company to showcase their services and business offerings. Built with modern web technologies featuring responsive design and clean user interface for optimal user experience.',
      thumbnail: Manga,
      demoLink: 'https://https:/manga-nola.vercel.app/',
      isPrivate: true,
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> }
      ]
    },
    {
      title: 'Puur Waste Management',
      description: 'Corporate website developed for an environmental waste management company. Features detailed service information, company profile, and contact sections with modern, professional design to effectively communicate their sustainability mission.',
      thumbnail: Puur,
      demoLink: 'https://puur-waste-management.vercel.app/',
      isPrivate: true,
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> }
      ]
    },
    {
      title: 'Bulk Basket',
      description: 'E-commerce web application for bulk shopping platform featuring product catalog, shopping cart functionality, and user-friendly interface. Integrated with Firebase for data management and authentication capabilities.',
      thumbnail: Bulk,
      demoLink: 'https://bulkbasket.vercel.app/',
      isPrivate: true,
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Firebase', icon: <SiFirebase /> }
      ]
    },
    {
      title: 'Wings Of Hope Pre-School',
      description: 'Educational web application for pre-school facility enabling online applications from parents. Includes application forms, school information sections, and Firebase integration for form submissions and data storage.',
      thumbnail: Wings,
      demoLink: 'https://wings-of-hope-pi.vercel.app/',
      isPrivate: true,
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Firebase', icon: <SiFirebase /> }
      ]
    },
    {
      title: 'Cargo-Connect',
      description: 'Transportation and logistics web platform connecting customers with transportation services. Features service information, quote request forms, and contact functionality with Firebase backend for managing customer inquiries and data.',
      thumbnail: Cargo,
      demoLink: 'https://cargo-connect-mu.vercel.app/',
      isPrivate: true,
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Firebase', icon: <SiFirebase /> }
      ]
    },
    {
      title: 'UI Portfolio',
      description: 'Personal portfolio website showcasing UI/UX design skills and projects. Features responsive design, smooth animations, and modern aesthetic with clean navigation to effectively present design work and professional profile.',
      thumbnail: ProfileAppImage,
      demoLink: 'https://kronikprofile.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Kronikprofile',
      tools: [
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> }
      ]
    },
    {
      title: 'FIPAS',
      description: 'Professional corporate website for forensic investigation and assurance consulting company. Features detailed service descriptions, company information, contact forms, and professional layout designed to establish credibility and trust.',
      thumbnail: Fipas,
      demoLink: 'https://fipas.vercel.app/',
      isPrivate: true,
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> }
      ]
    },
    {
      title: 'D&H Driving School',
      description: 'Informational website for certified driving school showcasing various training packages and services. Includes course information, pricing details, instructor profiles, and contact forms with modern, accessible design.',
      thumbnail: DandH,
      demoLink: 'https://dand-h-driving-school.vercel.app/',
      isPrivate: true,
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> }
      ]
    },
    {
      title: 'J&L Upholstery',
      description: 'Business showcase website for local upholstery service highlighting their craftsmanship and services. Features work gallery, service descriptions, contact information, and responsive design for mobile and desktop viewing.',
      thumbnail: JandL,
      demoLink: 'https://j-l-upholstery.vercel.app/',
      isPrivate: true,
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> }
      ]
    },
    {
      title: 'Tipsy Turvy Nails',
      description: 'Stylish website for nail salon featuring service menu with pricing, gallery of nail art work, business hours, location information, and contact details. Integrated with Firebase for potential booking and inquiry management.',
      thumbnail: Tipsy,
      demoLink: 'https://tipsy-turvy-nails.vercel.app/',
      isPrivate: true,
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Firebase', icon: <SiFirebase /> }
      ]
    },
    {
      title: 'Demo Baker',
      description: 'Demonstration bakery application showcasing product catalog with items, special offers section, and interactive UI elements. Built with Firebase backend for product data management and features modern e-commerce design patterns.',
      thumbnail: DemoBakery,
      demoLink: 'https://bakery2-chjk.vercel.app/',
      isPrivate: true,
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Firebase', icon: <SiFirebase /> }
      ]
    },
    {
      title: 'Starland Bakery',
      description: 'Professional website for local bakery business featuring product menu, pricing information, business hours, location details, and contact form. Clean, appetizing design with responsive layout for all devices.',
      thumbnail: Starland,
      demoLink: 'https://starland-bakery.vercel.app/',
      isPrivate: true,
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Firebase', icon: <SiFirebase /> }
      ]
    },
    {
      title: 'The Grey Exchange',
      description: 'Fashion and accessories e-commerce website with product catalog, shopping cart functionality, and clean, user-friendly interface. Firebase integration for product management and order data handling.',
      thumbnail: Grey,
      demoLink: 'https://the-grey-exchange.vercel.app/',
      isPrivate: true,
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Firebase', icon: <SiFirebase /> }
      ]
    },
    {
      title: 'Math Market',
      description: 'Educational marketplace demonstration showcasing fundamental e-commerce concepts including product listings, shopping cart, and basic checkout flow. Firebase backend for data storage with responsive design implementation.',
      thumbnail: Math,
      demoLink: 'https://math-market-ixiv.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Math-Market',
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Firebase', icon: <SiFirebase /> }
      ]
    },
    {
      title: 'Mortgage Calculator',
      description: 'Financial calculation tool for computing mortgage payments based on loan amount, interest rate, and loan term. Features clear input forms, instant calculation results, and user-friendly interface for financial planning.',
      thumbnail: MortgageCalculatorImage,
      demoLink: 'https://mortgage-calculator-beta-one.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Mortgage-Calculator',
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> }
      ]
    },
    {
      title: 'Node Card Game',
      description: 'Multiplayer card game application built with Node.js backend and React frontend. Features real-time gameplay, player interactions, game state management, and responsive design for engaging card game experience.',
      thumbnail: NodeCardGameImage,
      demoLink: 'https://card-game-gilt.vercel.app/',
      githubLink: 'https://github.com/Kronik502/CardGame',
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> }
      ]
    },
    {
      title: 'Hotel App',
      description: 'Hotel management application featuring room listings, availability display, and booking interface. Built with Node.js backend for handling reservations and room data management with clean, intuitive user experience.',
      thumbnail: HotelImage,
      demoLink: 'https://hotel-app-sigma.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Quiz-App',
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Node.js', icon: <FaNodeJs /> }
      ]
    },
    {
      title: 'Weather App',
      description: 'Weather forecasting application providing current conditions and forecasts for user-specified locations. Integrates with weather API to fetch real-time data with clear, visual presentation of meteorological information.',
      thumbnail: WeatherAppImage,
      demoLink: 'https://weatherapplication-seven.vercel.app',
      githubLink: 'https://github.com/Kronik502/weatherapplication',
      tools: [
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> }
      ]
    },
    {
      title: 'Recipe App',
      description: 'Full-stack recipe management application with CRUD operations allowing users to add, view, edit, and delete recipes. MongoDB database for recipe storage, Node.js/Express backend, and React frontend with organized recipe display.',
      thumbnail: RecipeAppImage,
      demoLink: 'https://recipes-self-alpha.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Recipes',
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Express', icon: <SiExpress /> }
      ]
    },
    {
      title: 'To Do List',
      description: 'Productivity application with user authentication, priority-based task management, Redux state management, deadline tracking, category organization, and progress visualization to enhance workflow efficiency.',
      thumbnail: ToDo,
      demoLink: 'https://to-do-app-fawn-three.vercel.app/home',
      githubLink: 'https://github.com/Kronik502/ToDoApp',
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'Express', icon: <SiExpress /> }
      ]
    },
    {
      title: 'Employees App',
      description: 'Enterprise-grade employee management system with role-based access control, CRUD operations, department management, payroll integration, performance tracking, and comprehensive admin dashboard for HR operations.',
      thumbnail: Employee,
      demoLink: 'https://employee-myjltw6jk-kgabo-kwenaites-projects.vercel.app/login',
      githubLink: 'https://github.com/Kronik502/Employee',
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Express', icon: <SiExpress /> }
      ]
    },
    {
      title: 'Basic Node Server',
      description: 'Fundamental Node.js server implementation demonstrating RESTful API design, middleware integration, routing architecture, error handling, and backend development best practices for scalable applications.',
      thumbnail: Default,
      githubLink: 'https://github.com/Kronik502/NodeServer',
      tools: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> }
      ]
    },
    {
      title: 'Node Quiz Server Game',
      description: 'Backend server architecture for quiz game with real-time score tracking, timed question delivery, leaderboard functionality, session management, and WebSocket communication for interactive gameplay.',
      thumbnail: Default,
      githubLink: 'https://github.com/Kronik502/CardGame',
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> }
      ]
    },
    {
      title: 'Node Quiz Server',
      description: 'Robust backend infrastructure for quiz applications featuring question database management, API endpoints, authentication middleware, and scalable architecture for educational platforms.',
      thumbnail: Default,
      githubLink: 'https://github.com/Kronik502/CardGame',
      tools: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Express', icon: <SiExpress /> }
      ]
    },
    {
      title: 'React Native Shopping List',
      description: 'Cross-platform mobile application for shopping list management with offline capability, item categorization, quantity tracking, and synchronization features built with React Native.',
      thumbnail: Default,
      githubLink: 'https://github.com/Kronik502/RNShoppingList',
      tools: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'React Native', icon: <FaReact /> }
      ]
    },
    {
      title: 'Restaurant App',
      description: 'Mobile restaurant reservation system built with React Native, featuring table booking, menu browsing, order placement, reservation management, and push notifications for enhanced dining experience.',
      thumbnail: Default,
      githubLink: 'https://github.com/Cornel-MIT/Reservation-App',
      tools: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'React Native', icon: <FaReact /> }
      ]
    }
  ];

  const calculateToolStats = () => {
    const toolCount = {};
    allProjects.forEach(project => {
      project.tools.forEach(tool => {
        toolCount[tool.name] = (toolCount[tool.name] || 0) + 1;
      });
    });
    const total = Object.values(toolCount).reduce((sum, count) => sum + count, 0);
    return Object.entries(toolCount)
      .map(([name, count]) => ({
        name,
        value: count,
        percentage: ((count / total) * 100).toFixed(1)
      }))
      .sort((a, b) => b.value - a.value);
  };

  const toolStats = calculateToolStats();

  const COLORS = [
    '#61DAFB', '#68A063', '#F7DF1E', '#1572B6', '#FFCA28', '#764ABC', '#47A248', '#646CFF', '#06B6D4', '#000000', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'
  ];

  const renderCustomLabel = (entry) => `${entry.percentage}%`;

  return (
    <section id="projects" className="projects">
      <h2 className="h2">Projects & Technology Stack</h2>
      <div className="tools-analytics">
        <h3 className="analytics-title">Technology Distribution Across Projects</h3>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={toolStats}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {toolStats.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value, name, props) => [`${props.payload.percentage}% (${value} projects)`, name]} />
            <Legend verticalAlign="bottom" height={36} formatter={(value, entry) => `${value}: ${entry.payload.percentage}%`} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="project-grid">
        {allProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="project-image" />
            <h3 className="ptitle">{project.title}</h3>
            <p className="ptitle">{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="tool-icon" title={tool.name}>
                  {tool.icon}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
              )}
              {project.isPrivate ? (
                <span className="btn btn-disabled">Private Repo</span>
              ) : (
                project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">GitHub Repo</a>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
