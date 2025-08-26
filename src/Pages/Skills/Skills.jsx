import React from 'react';
import './Skills.css';


import JavaScriptLogo from '../../assets/images/Javascript-Logo.png';
import ReactLogo from '../../assets/images/React-Logo.png';
import ReduxLogo from '../../assets/images/Redux-Logo.png';
import NodeLogo from '../../assets/images/Node-Logo.png';
import ExpressLogo from '../../assets/images/Express-Logo.jpg';
import MongoDBLogo from '../../assets/images/Mongo-Logo.png';
import FirebaseLogo from '../../assets/images/Firebase-Logo.png';
import GitLogo from '../../assets/images/Git-Logo.png';
import GitHubLogo from '../../assets/images/Github-Logo.png';
import VercelLogo from '../../assets/images/Vercel-Logo.png';
import HtmlLogo from '../../assets/images/Html-Logo.png';
import CssLogo from '../../assets/images/Css-Logo.png';
import Figma from '../../assets/images/figma.png';
import Sqlite from '../../assets/images/sqlite.jpg';
import Json from '../../assets/images/JSON.png';
import Office from '../../assets/images/office.png';
import Delphi from '../../assets/images/delphi.png';
import Vb from '../../assets/images/vb.jpeg';
import Pc from '../../assets/images/pcbuild.webp';
import Tech from '../../assets/images/Tech.webp';
import Cisco from '../../assets/images/cisco.png';
import Sdlc from '../../assets/images/sdlc.png';





const defaultLogo = "https://via.placeholder.com/30x30?text=Logo";

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'HTML', rating: 95, note: 'Advanced', description: 'Semantic HTML & accessibility.', logo: HtmlLogo || defaultLogo },
      { name: 'CSS & Tailwind', rating: 96, note: 'Advanced', description: 'Responsive design & utility-first CSS.', logo: CssLogo || defaultLogo },
      { name: 'JavaScript (ES6+)', rating: 95, note: 'Intermediate', description: 'Core JS concepts & modern features.', logo: JavaScriptLogo || defaultLogo },
      { name: 'ReactJS', rating: 95, note: 'Advanced', description: 'Dynamic SPAs with React.', logo: ReactLogo || defaultLogo },
      { name: 'Redux', rating: 70, note: 'Intermediate', description: 'Global state management.', logo: ReduxLogo || defaultLogo },
      { name: 'React Native', rating: 80, note: 'Intermediate', description: 'Cross-platform mobile apps.', logo: ReactLogo || defaultLogo },
      { name: 'Figma', rating: 65, note: 'Intermediate', description: 'UI/UX wireframing & prototyping.', logo: Figma || defaultLogo },
    ],
    backend: [
      { name: 'NodeJS', rating: 75, note: 'Intermediate', description: 'RESTful APIs & server logic.', logo: NodeLogo || defaultLogo },
      { name: 'ExpressJS', rating: 60, note: 'Intermediate', description: 'Backend routes & middleware.', logo: ExpressLogo || defaultLogo },
      { name: 'MongoDB', rating: 70, note: 'Intermediate', description: 'Document-based NoSQL database.', logo: MongoDBLogo || defaultLogo },
      { name: 'Firebase', rating: 95, note: 'Semi-Advanced', description: 'Backend services, hosting & auth.', logo: FirebaseLogo || defaultLogo },
      { name: 'SQLite3', rating: 50, note: 'Basic', description: 'Lightweight SQL engine.', logo: Sqlite || defaultLogo },
      { name: 'JSON', rating: 85, note: 'Intermediate', description: 'Data interchange & APIs.', logo: Json || defaultLogo },
    ],
    tools: [
      { name: 'Git', rating: 95, note: 'Intermediate', description: 'Version control workflows.', logo: GitLogo || defaultLogo },
      { name: 'GitHub', rating: 90, note: 'Intermediate', description: 'Code hosting & collaboration.', logo: GitHubLogo || defaultLogo },
      { name: 'Vercel', rating: 90, note: 'Intermediate', description: 'Modern deployment pipeline.', logo: VercelLogo || defaultLogo },
      { name: 'Microsoft Office', rating: 99, note: 'Proficient', description: 'Docs, spreadsheets, presentations.', logo: Office || defaultLogo },
    ],
    languages: [
      { name: 'Delphi', rating: 50, note: 'Basic', description: 'Legacy programming and UI forms.', logo: Delphi || defaultLogo },
      { name: 'Visual Basic', rating: 89, note: 'Basic', description: 'Basic automation and UI apps.', logo: Vb || defaultLogo },
    ],
    other: [
      { name: 'PC Building & Troubleshooting', rating: 80, note: 'Advanced', description: 'Hardware assembly, diagnostics.', logo: Pc || defaultLogo },
      { name: 'Tech Machinery Ops', rating: 85, note: 'Proficient', description: 'POS, printers, laminators, etc.', logo: Tech || defaultLogo },
      { name: 'Networking & Cisco', rating: 75, note: 'Intermediate', description: 'Packet Tracer & LAN setup.', logo: Cisco || defaultLogo },
      { name: 'System Analysis & SDLC', rating: 90, note: 'Intermediate', description: 'Planning & documenting software.', logo: Sdlc || defaultLogo },
    ],
  };

  const renderSkill = (skill, index) => (
    <div key={index} className="skill">
      <div className="skill-header">
        <img src={skill.logo || defaultLogo} alt={`${skill.name} logo`} className="skill-logo" />
        <h4>{skill.name}</h4>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${skill.rating}%` }}></div>
      </div>
      <div className="rating-note">{skill.note}</div>
      <p className="skill-description">{skill.description}</p>
    </div>
  );

  return (
<section id="skills" className="skills-section">
<h2 className="section-title">My Technical Skills</h2>
{Object.entries(skills).map(([category, skillList]) => (
<div key={category} className="skills-category">
<h3 className="category-title">{category.replace(/([a-z])([A-Z])/g, '$1 $2')}</h3>
<div className="skills-list">
{skillList.map(renderSkill)}
</div>
</div>
))}
</section>
);
};

export default Skills;
