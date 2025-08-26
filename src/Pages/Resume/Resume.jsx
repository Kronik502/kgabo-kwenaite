import React from 'react';
import './Resume.css';
import r from '../../../public/resume.pdf';

const Resume = () => {
  // Path to your resume PDF in public folder
  const resumeUrl = r;

  return (
    <section className="resume-container">
      <header className="resume-header">
        <h1>Kgabo Kwenaite</h1>
        <h2>Full-stack Web and Mobile App Developer</h2>
      </header>

      <button 
        className="download-btn" 
        onClick={() => window.open(resumeUrl, '_blank')}
        aria-label="Download Resume"
      >
        Download Resume
      </button>

      <section className="resume-objective">
        <h3>Objective</h3>
        <p>
          Passionate junior full-stack developer with a strong foundation in the MERN stack, eager to build scalable and user-friendly applications. 
          I thrive on solving real-world problems through code, with a keen interest in both software and hardware. Looking for an opportunity to contribute to innovative projects while continuously learning and growing as a developer.
        </p>
      </section>

      <section className="resume-links">
        <h3>Links</h3>
        <ul>
          <li><a href="https://www.github.com/Kronik502" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/kgabo-kwenaite-567244223/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://kronikprofile.vercel.app/" target="_blank" rel="noopener noreferrer">Social App</a></li>
          <li><a href="https://portfolio-sage-nine-63.vercel.app/" target="_blank" rel="noopener noreferrer">Personal Portfolio</a></li>
        </ul>
      </section>

      <section className="resume-skills">
        <h3>Software Stack</h3>
        <ul className="stack-list">
          <li>Node.js</li>
          <li>Express</li>
          <li>JavaScript</li>
          <li>Delphi</li>
          <li>Visual Basic</li>
          <li>JSON</li>
          <li>Redux</li>
          <li>SQLite3</li>
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>Git & GitHub</li>
          <li>Payment Gateways</li>
          <li>Vercel Deployment</li>
          <li>Office365</li>
        </ul>

        <h4>Front-End</h4>
        <ul className="stack-list">
          <li>ReactJS</li>
          <li>React Native</li>
          <li>HTML</li>
          <li>CSS and Tailwind</li>
          <li>Figma Design</li>
        </ul>
      </section>

      <section className="resume-experience">
        <h3>Experience</h3>
        <div className="job">
          <h4>Full Stack Developer Trainee</h4>
          <p><em>MLab Southern Africa</em> | March 2024 – March 2025</p>
          <p>
            Completed an intensive training program at MLab Southern Africa (Code Tribe), gaining hands-on full-stack development experience focused on the MERN stack. 
            Worked on real-world projects optimizing web applications for performance, scalability, and user experience. Collaborated with a team to design dynamic solutions, integrate APIs, manage databases, and improve UI/UX.
          </p>
        </div>
        <div className="job">
          <h4>Local Internet Café Manager</h4>
          <p><em>Lubo Cafe</em> | December 2021 – August 2023</p>
        </div>
        <div className="job">
          <h4>Casual Worker</h4>
          <p><em>Vikela Logistics</em> | November 2023 – December 2023</p>
        </div>
      </section>

      <section className="resume-education">
        <h3>Education</h3>
        <p><strong>Ekurhuleni West TVET College</strong></p>
        <p>NCV LEVEL 4 - Information Technology & Computer Science</p>
      </section>

      <section className="resume-references">
        <h3>References</h3>
        <ul>
          <li>Nokwanda Maranjane – Nokwanda@mlab.co.za (MLab)</li>
          <li>Edmond Sadiki – edmond@mlab.co.za (MLab)</li>
          <li>Lubobob Mulamuleli – Lubobotrading@gmail.com (Lubo Café)</li>
        </ul>
      </section>

      <section className="resume-technical-skills">
        <h3>Technical Skills</h3>
        <ul>
          <li>PC Building & Hardware Troubleshooting</li>
          <li>Technical Machinery Operations (T-shirt & Mug Printers, Laminators, POS)</li>
          <li>Technical Support & Computer Tutoring</li>
          <li>Networking & Cisco Packet Tracer</li>
          <li>System Analysis and Design</li>
          <li>SDLC (Software Development Life Cycle)</li>
          <li>Computer Administration & Word Processing</li>
        </ul>
      </section>
    </section>
  );
};

export default Resume;
