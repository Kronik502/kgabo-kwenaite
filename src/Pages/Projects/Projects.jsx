import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaCss3Alt
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiMongodb, 
  SiFirebase, 
  SiRedux,
  SiVite,
  SiTailwindcss,
  SiExpress
} from 'react-icons/si';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

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
import './Projects.css';

function Projects() {
  const allProjects = [
    {
      title: 'MangaNola Trading',
      description: 'Professional website designed for a trading company to showcase their services and business offerings. Built with modern web technologies featuring responsive design and clean user interface for optimal user experience.',
      thumbnail: ProfileAppImage,
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
      title: 'Puur Waste Management',
      description: 'Corporate website developed for an environmental waste management company. Features detailed service information, company profile, and contact sections with modern, professional design.',
      thumbnail: ProfileAppImage,
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
      description: 'E-commerce platform for bulk shopping featuring product catalog, cart functionality, and Firebase integration for authentication and data management.',
      thumbnail: ProfileAppImage,
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
      description: 'Educational web app for pre-school allowing online applications. Includes Firebase integration for form submissions and data storage.',
      thumbnail: ProfileAppImage,
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
      description: 'Transportation and logistics web platform with Firebase backend for managing customer inquiries and data.',
      thumbnail: ProfileAppImage,
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
      title: 'FIPAS',
      description: 'Corporate website for forensic investigation and assurance consulting company.',
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
      title: 'Math Market',
      description: 'Educational marketplace demonstrating e-commerce concepts with Firebase backend.',
      thumbnail: Math,
      demoLink: 'https://math-market-ixiv.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Math-Market',
      tools: [
        { name: 'Vite', icon: <SiVite /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Firebase', icon: <SiFirebase /> }
      ]
    },
    {
      title: 'Mortgage Calculator',
      description: 'Financial calculator for computing mortgage payments with responsive UI.',
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
      title: 'Recipe App',
      description: 'Full-stack recipe management app with CRUD operations and MongoDB database.',
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
      description: 'Task management app with login, CRUD, and Redux state management.',
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
      description: 'Employee management system with CRUD operations and MongoDB backend.',
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
    }
  ];

  // Calculate tool usage stats
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
    '#61DAFB', '#68A063', '#F7DF1E', '#1572B6', '#FFCA28', 
    '#764ABC', '#47A248', '#646CFF', '#06B6D4', '#000000',
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'
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
            <Tooltip 
              formatter={(value, name, props) => [`${props.payload.percentage}% (${value} uses)`, name]} 
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              formatter={(value, entry) => `${value}: ${entry.payload.percentage}%`} 
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="project-grid">
        {allProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.thumbnail} alt={project.title} className="project-image" />
            <h3 className="ptitle">{project.title}</h3>
            <p className="pdesc">{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool, idx) => (
                <span key={idx} className="tool-icon" title={tool.name}>
                  {tool.icon}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn">
                  Live Demo
                </a>
              )}
              {project.isPrivate ? (
                <span className="btn btn-disabled">Private Repo</span>
              ) : (
                project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                    GitHub Repo
                  </a>
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
