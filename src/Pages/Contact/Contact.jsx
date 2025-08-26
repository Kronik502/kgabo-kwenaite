import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';


import { faPhone as faPhoneSolid, faEnvelope as faEnvelopeSolid, faMapMarkerAlt as faMapMarkerAltSolid, faPaperPlane as faPaperPlaneSolid } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    try {
 const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const userID = import.meta.env.VITE_EMAILJS_USER_ID;


      await emailjs.send(serviceID, templateID, formData, userID);
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    } catch (error) {
      setStatus('error');
      console.error('Email sending error:', error);
    }
  };

  const contactInfo = [
    {
      icon: faPhoneSolid,
      label: 'Phone',
      value: '(+27) 69 653 2031',
      href: 'tel:+27696532031',
    },
    {
      icon: faEnvelopeSolid,
      label: 'Email',
      value: 'kronikwenaite@gmail.com',
      href: 'mailto:kronikwenaite@gmail.com',
    },
    {
      icon: faMapMarkerAltSolid,
      label: 'Location',
      value: 'Johannesburg, South Africa',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: faWhatsapp,
      label: 'WhatsApp',
      href: 'https://wa.me/27663275611',
      color: '#25D366',
    },
    {
      icon: faFacebook,
      label: 'Facebook',
      href: 'https://www.facebook.com/kgabo.kwenaite.35',
      color: '#1877F2',
    },
    {
      icon: faInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/kronik50two',
      color: '#E4405F',
    },
    {
      icon: faGithub,
      label: 'GitHub',
      href: 'https://github.com/Kronik502',
      color: '#333',
    },
    {
      icon: faLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kgabo-kwenaite-567244223/',
      color: '#0077B5',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-title">Contact Information</h3>
              <p className="info-description">
                Feel free to reach out through any of these channels
              </p>
              
              <div className="contact-details">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      <FontAwesomeIcon icon={item.icon} />
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">{item.label}</span>
                      <a href={item.href} className="contact-value">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-section">
                <h4 className="social-title">Follow Me</h4>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <h3 className="form-title">Send a Message</h3>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="Enter your full name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <span id="name-error" className="error-text">
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="Enter your email address"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <span id="email-error" className="error-text">
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  placeholder="What's this about?"
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <span id="subject-error" className="error-text">
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Tell me about your project or inquiry..."
                  rows="6"
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <span id="message-error" className="error-text">
                    {errors.message}
                  </span>
                )}
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={status === 'sending'}
                aria-label={status === 'sending' ? 'Sending message' : 'Send message'}
              >
                <span className="button-text">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </span>
                <FontAwesomeIcon 
                  icon={faPaperPlaneSolid} 
                  className="button-icon"
                />
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="status-message success" role="alert">
                  <strong>Success!</strong> Your message has been sent successfully. 
                  I'll get back to you soon!
                </div>
              )}
              
              {status === 'error' && (
                <div className="status-message error" role="alert">
                  <strong>Oops!</strong> Something went wrong. Please try again or 
                  contact me directly via email.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;