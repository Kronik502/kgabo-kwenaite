import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  nso: {
    greeting: 'Dumela',
    welcome: 'Re a go amogela mo Portfolio ya me',
    statement: 'Ke aga ditharabololo tšeo di matlafatšago dikgwebo le setšhaba.',
    button: 'Ikopanye le nna',
  }
};

const languageCodes = Object.keys(translations);

const Home = () => {
  const [langIndex, setLangIndex] = useState(0);
  const [currentLang, setCurrentLang] = useState(languageCodes[0]);
  const [showTypewriter, setShowTypewriter] = useState(true);
  const navigate = useNavigate(); // ✅ Navigation hook

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTypewriter(false);
      setTimeout(() => {
        setLangIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % languageCodes.length;
          setCurrentLang(languageCodes[nextIndex]);
          setShowTypewriter(true);
          return nextIndex;
        });
      }, 100);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const { greeting, welcome, statement, button } = translations[currentLang];

  return (
    <section className="home-container">
      <div className="home-content">
        <p className="greeting">{greeting}</p>

        <h1 className="welcome-message">
          {showTypewriter ? (
            <Typewriter
              words={[welcome]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={0}
              delaySpeed={10000}
            />
          ) : (
            welcome
          )}
        </h1>

        <h2 className="name">Kgabo Kwenaite</h2>
        <h3 className="role">Full Stack Web & Mobile App Developer</h3>

        <p className="statement">{statement}</p>

        {/* ✅ Updated Button to Navigate to /contact */}
        <button
          className="contact-button"
          onClick={() => navigate('/contact')}
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
