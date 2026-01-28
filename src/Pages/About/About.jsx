import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-container">
      <h1>About Me</h1>

      <div className="about-section">
        <h2>Professional Summary</h2>
        <p>
          I am a creative and innovative web developer with a strong foundation in front-end technologies, 
          dedicated to enhancing user experience through efficient and visually appealing designs. Skilled in ReactJS, Redux, NodeJS, Firebase, and MongoDB, 
          I have developed interactive web applications, including hotel and marketplace platforms. 
          I specialize in crafting professional, user-centric interfaces with unique CSS, Bootstrap, and Tailwind styles, 
          ensuring responsive and accessible layouts. I have proven experience managing complex projects, collaborating effectively, 
          and delivering high-quality code with features like user authentication, product management, and custom search functionalities.
        </p>
      </div>

      <div className="about-section">
        <h2>Professional Experience</h2>
        <p>
          Completed an intensive full-stack web development trainee program at MLab Codetribe, focusing on hands-on projects 
          using ReactJS, Redux, NodeJS, and related technologies to build real-world web applications.
        </p>
      </div>


      <div className="about-section">
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages & Frameworks: JavaScript, ReactJS, Redux, NodeJS, Express, HTML, CSS, Visual Basic, Delphi</li>
          <li>Databases: MongoDB, Firebase, SQLite3, JSON</li>
          <li>Version Control & Deployment: Git, GitHub, Slack, Vercel</li>
          <li>Design Tools: Figma</li>
          <li>Office Tools: Microsoft Office</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Languages</h2>
        <p>English (Fluent, C2), Sepedi (Mother Tongue)</p>
      </div>

      <div className="about-section">
        <h2>Hobbies & Interests</h2>
        <p>
          Passionate about technology and innovation, I enjoy exploring new tools and frameworks like React, Firebase, and Redux 
          to improve project quality and user experience. I experiment with creative design and CSS styling for modern applications. 
          Gaming, especially retro platforms and game design, excites me, alongside continuous learning in advanced JavaScript, backend architecture, and design software like Figma. 
          I also enjoy rap and creative writing, refining lyrics and developing unique flows and rhymes.
        </p>
      </div>
    </section>
  );
};

export default About;
