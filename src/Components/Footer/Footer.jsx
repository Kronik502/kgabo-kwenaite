import React from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaCopyright,
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '(+27) 69 653 2031',
      href: 'tel:+27696532031',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'kronikwenaite@gmail.com',
      href: 'mailto:kronikwenaite@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Johannesburg, South Africa',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      href: 'https://wa.me/27663275611',
      color: '#25D366',
    },
    {
      icon: <FaFacebook />,
      label: 'Facebook',
      href: 'https://www.facebook.com/kgabo.kwenaite.35',
      color: '#1877F2',
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      href: 'https://www.instagram.com/kronik50two',
      color: '#E4405F',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/Kronik502',
      color: '#333',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kgabo-kwenaite-567244223/',
      color: '#0077B5',
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-desktop">
        <div className="contact-info">
          {contactInfo.map((item, index) => (
            <a key={index} href={item.href} className="contact-item">
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}:</span>
              <span className="value">{item.value}</span>
            </a>
          ))}
        </div>
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="social-icon"
              style={{ color: link.color }}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-mobile">
        <p className="copyright">
          <FaCopyright /> Kgabo Kwenaite {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
