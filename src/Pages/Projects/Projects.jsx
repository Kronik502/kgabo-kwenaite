import React from 'react';
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

function Projects() {
  const allProjects = [
    {
      title: 'UI Portfolio',
      description: 'A beautifully designed portfolio showcasing my UI/UX skills.',
      thumbnail: ProfileAppImage,
      demoLink: 'https://kronikprofile.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Kronikprofile',
    },
    {
      title: 'FIPAS',
      description: 'A professional website for a forensic investigation and assurance consulting company.',
      thumbnail: Fipas,
      demoLink: 'https://fipas.vercel.app/',
      isPrivate: true,
    },
    {
      title: 'D&H Driving School',
      description: 'An informational website for a certified driving school offering various training packages.',
      thumbnail: DandH,
      demoLink: 'https://dand-h-driving-school.vercel.app/',
      isPrivate: true,
    },
    {
      title: 'J&L Upholstery',
      description: 'A sleek showcase site for a local upholstery business highlighting their services and work.',
      thumbnail: JandL,
      demoLink: 'https://j-l-upholstery.vercel.app/',
      isPrivate: true,
    },
    {
      title: 'Tipsy Turvy Nails',
      description: 'A stylish site for a nail salon featuring services, gallery, and booking contact info.',
      thumbnail: Tipsy,
      demoLink: 'https://kronikprofile.vercel.app/',
      isPrivate: true,
    },
    {
      title: 'Demo Baker',
      description: 'A bakery app demo that displays a list of products, offers, and interactive UI elements.',
      thumbnail: DemoBakery,
      demoLink: 'https://bakery2-chjk.vercel.app/',
      isPrivate: true,
    },
    {
      title: 'Starland Bakery',
      description: 'A professional website for a local bakery featuring their menu, products, and contact info.',
      thumbnail: Starland,
      demoLink: 'https://starland-bakery.vercel.app/',
      isPrivate: true,
    },
    {
      title: 'The Grey Exchange',
      description: 'An online fashion and accessories shop with a clean, user-friendly interface.',
      thumbnail: Grey,
      demoLink: 'https://the-grey-exchange.vercel.app/',
      isPrivate: true,
    },
    {
      title: 'Math Market',
      description: 'A marketplace app designed to showcase products using basic e-commerce concepts.',
      thumbnail: Math,
      demoLink: 'https://math-market-ixiv.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Math-Market',
    },
    {
      title: 'Mortgage Calculator',
      description: 'A tool to calculate mortgage payments based on loan amount, interest rate, and loan term.',
      thumbnail: MortgageCalculatorImage,
      demoLink: 'https://mortgage-calculator-beta-one.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Mortgage-Calculator',
    },
    {
      title: 'Node Card Game',
      description: 'A card game built with Node.js and Socket.IO for real-time multiplayer.',
      thumbnail: NodeCardGameImage,
      demoLink: 'https://card-game-gilt.vercel.app/',
      githubLink: 'https://github.com/Kronik502/CardGame',
    },
    {
      title: 'Hotel App',
      description: 'Hotel booking application with room listings and availability.',
      thumbnail: HotelImage,
      demoLink: 'https://hotel-app-sigma.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Quiz-App',
    },
    {
      title: 'Weather App',
      description: 'An app that provides weather forecasts for any location.',
      thumbnail: WeatherAppImage,
      demoLink: 'https://weatherapplication-seven.vercel.app',
      githubLink: 'https://github.com/Kronik502/weatherapplication',
    },
    {
      title: 'Recipe App',
      description: 'An app that allows users to add, find, edit, and update recipes.',
      thumbnail: RecipeAppImage,
      demoLink: 'https://recipes-self-alpha.vercel.app/',
      githubLink: 'https://github.com/Kronik502/Recipes',
    },
    {
      title: 'To Do List',
      description: 'A to-do list app with priority levels and login functionality.',
      thumbnail: ToDo,
      demoLink: 'https://to-do-app-fawn-three.vercel.app/home',
      githubLink: 'https://github.com/Kronik502/ToDoApp',
    },
    {
      title: 'Employees App',
      description: 'An employee management system with admin features to add, update, or delete employees.',
      thumbnail: Employee,
      demoLink: 'https://employee-myjltw6jk-kgabo-kwenaites-projects.vercel.app/login',
      githubLink: 'https://github.com/Kronik502/Employee',
    },
    {
      title: 'A basic Node server',
      description: 'A simple Node.js server setup.',
      thumbnail: Default,
      githubLink: 'https://github.com/Kronik502/NodeServer',
    },
    {
      title: 'Node Quiz server game',
      description: 'A server-hosted quiz game that tracks answers and time.',
      thumbnail: Default,
      githubLink: 'https://github.com/Kronik502/CardGame',
    },
    {
      title: 'Node Quiz server',
      description: 'A backend server for a quiz game application.',
      thumbnail: Default,
      githubLink: 'https://github.com/Kronik502/CardGame',
    },
    {
      title: 'React Native Shopping List',
      description: 'A React Native app for managing shopping lists.',
      thumbnail: Default,
      githubLink: 'https://github.com/Kronik502/RNShoppingList',
    },
    {
      title: 'Restaurant App',
      description: 'A mobile restaurant reservation app made with React Native.',
      thumbnail: Default,
      githubLink: 'https://github.com/Cornel-MIT/Reservation-App',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="h2">Projects</h2>
      <div className="project-grid">
        {allProjects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.thumbnail} alt={`${project.title} thumbnail`} className="project-image" />
            <h3 className="ptitle">{project.title}</h3>
            <p className="ptitle">{project.description}</p>
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
