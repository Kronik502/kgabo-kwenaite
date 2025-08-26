import React, { useState, useEffect } from 'react';
import './Home.css';
import { Typewriter } from 'react-simple-typewriter';
import codingGif from '../../assets/Coding.gif'; // adjust path if needed

const translations = {
  en: {
    greeting: 'Hi There',
    welcome: 'Welcome to my Portfolio',
    statement: 'I build solutions that empower businesses and communities.',
    button: 'Get In Touch',
  },
  af: {
    greeting: 'Hallo Daar',
    welcome: 'Welkom by my Portefeulje',
    statement: 'Ek bou oplossings wat besighede en gemeenskappe bemagtig.',
    button: 'Kontak My',
  },
  zu: {
    greeting: 'Sawubona',
    welcome: 'Siyakwamukela ku-Portfolio yami',
    statement: 'Ngakha izixazululo ezinamandla ebhizinisini nasemphakathini.',
    button: 'Xhumana Nami',
  },
  xh: {
    greeting: 'Molo',
    welcome: 'Wamkelekile kwi-Portfolio yam',
    statement: 'Ndakha izisombululo ezomeleza amashishini noluntu.',
    button: 'Qhagamshelana Nam',
  },
  st: {
    greeting: 'Lumela',
    welcome: 'Rea u amohela ho Portfolio ea ka',
    statement: 'Ke haha litharollo tse matlafatsang likhoebo le sechaba.',
    button: 'Ikopanye le ’na',
  },
  tn: {
    greeting: 'Dumela',
    welcome: 'Re a go amogela mo Portfolio ya me',
    statement: 'Ke aga ditharabololo tse nonotshang dikgwebo le setšhaba.',
    button: 'Ikgokaganye le nna',
  },
  ve: {
    greeting: 'Ndaa',
    welcome: 'Ri a ni amukela kha Portfolio yanga',
    statement: 'Ndi fha dzidziso dzine dza thusa mabindu na miphakathi.',
    button: 'Bvuma na Nne',
  },
  ts: {
    greeting: 'Avuxeni',
    welcome: 'Amukelekile eka Portfolio ya mina',
    statement: 'Ndzi aka switirhisiwa leswi pfuxaka mabindzu na vaakindhawu.',
    button: 'Tivani na Mina',
  },
  ss: {
    greeting: 'Sawubona',
    welcome: 'Wemukelekile ku-Portfolio yami',
    statement: 'Ngakha tikhono letiphakamisako emabhizinisi nemiphakatsi.',
    button: 'Xhumana Nami',
  },
  nr: {
    greeting: 'Ukhulume Kanjani',
    welcome: 'Uyamukelwa ku-Portfolio yami',
    statement: 'Ngakha izisombululo eziqinisa ibhizinisi lomphakathi.',
    button: 'Thintana Nami',
  },
  nso: {
    greeting: 'Dumela',
    welcome: 'Re a go amogela mo Portfolio ya me',
    statement: 'Ke aga ditharabololo tšeo di matlafatšago dikgwebo le setšhaba.',
    button: 'Ikopanye le nna',
  },
  nbl: {
    greeting: 'Ukhulume Kanjani',
    welcome: 'Uyamukelwa ku-Portfolio yami',
    statement: 'Ngakha izixazululo eziqinisa amabhizinisi nemiphakathi.',
    button: 'Xhumana Nami',
  }
};
const languageCodes = Object.keys(translations);

const Home = () => {
  const [langIndex, setLangIndex] = useState(0);
  const lang = languageCodes[langIndex];
  const { greeting, welcome, statement, button } = translations[lang];

  useEffect(() => {
    const interval = setInterval(() => {
      setLangIndex((prevIndex) => (prevIndex + 1) % languageCodes.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-container">
      <div className="home-content">
        <p className="greeting">{greeting}</p>

        <h1 className="welcome-message">
          <Typewriter
            key={`welcome-${lang}`}
            words={[welcome]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>

        <h2 className="name">Kgabo Kwenaite</h2>
        <h3 className="role">Full Stack Web & Mobile App Developer</h3>

        <p className="statement">{statement}</p>

        <button
          className="contact-button"
          onClick={() => window.location.href = 'mailto:your.email@example.com'}
          aria-label={button}
        >
          {button}
        </button>
      </div>

      <div className="home-image">
        <img src={codingGif} alt="Coding animation" />
      </div>
    </section>
  );
};

export default Home;