import React, { useState, useEffect } from 'react';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle navbar hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false);
      } else {
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // PUBLIC_INTERFACE
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // PUBLIC_INTERFACE
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // PUBLIC_INTERFACE
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
    closeMenu();
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${!isNavbarVisible ? 'navbar-hidden' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">
            <button onClick={() => scrollToSection('hero')} className="logo-btn">
              Nimisha Tripathi
            </button>
          </div>
          
          <ul className={`navbar-menu ${isMenuOpen ? 'navbar-menu-open' : ''}`}>
            <li><button onClick={() => scrollToSection('hero')} className="nav-link">Home</button></li>
            <li><button onClick={() => scrollToSection('about')} className="nav-link">About</button></li>
            <li><button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button></li>
            <li><button onClick={() => scrollToSection('blogs')} className="nav-link">Blogs</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button></li>
          </ul>
          
          <button 
            className="navbar-cta"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
          
          <button 
            className="navbar-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}></span>
          </button>
        </div>
        
        {/* Mobile menu overlay */}
        {isMenuOpen && (
          <div className="navbar-overlay" onClick={closeMenu}>
            <div className="navbar-mobile-menu">
              <button onClick={() => scrollToSection('hero')} className="mobile-nav-link">Home</button>
              <button onClick={() => scrollToSection('about')} className="mobile-nav-link">About</button>
              <button onClick={() => scrollToSection('projects')} className="mobile-nav-link">Projects</button>
              <button onClick={() => scrollToSection('blogs')} className="mobile-nav-link">Blogs</button>
              <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section section-with-waves">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-label">Hello, I'm</span>
            <h1 className="hero-title">Nimisha Tripathi</h1>
            <p className="hero-subtitle">
              MBA student at IIM Kashipur passionate about business strategy, innovation, 
              and creating meaningful impact through technology and leadership.
            </p>
            <div className="hero-cta-group">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="hero-bg-shapes">
          <div className="hero-bg-shape shape-1"></div>
          <div className="hero-bg-shape shape-2"></div>
          <div className="hero-bg-shape shape-3"></div>
        </div>

        {/* Wave divider */}
        <div className="wave-divider wave-bottom">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,20 900,100 1200,60 L1200,120 L0,120 Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section section-with-waves">
        <div className="about-container">
          <div className="about-content">
            <span className="about-label">About Me</span>
            <h2 className="about-heading">Passionate Leader & Strategic Thinker</h2>
            
            <div className="about-description">
              <p>
                I'm currently pursuing my MBA at IIM Kashipur, where I'm developing my expertise in 
                business strategy, leadership, and innovation. My passion lies in understanding complex 
                business challenges and creating solutions that drive meaningful impact.
              </p>
              
              <p>
                With a strong foundation in analytical thinking and strategic planning, I enjoy working 
                on projects that combine business acumen with technological innovation. My goal is to 
                bridge the gap between traditional business practices and modern digital solutions.
              </p>
              
              <p>
                I believe in continuous learning, collaborative leadership, and the power of diverse 
                perspectives to solve today's most pressing business challenges. Every project is an 
                opportunity to learn, grow, and make a positive difference.
              </p>
            </div>
            
            <div className="about-skills">
              <h3>What I Bring:</h3>
              <ul>
                <li>Strategic Business Planning & Analysis</li>
                <li>Leadership & Team Management</li>
                <li>Innovation & Digital Transformation</li>
                <li>Project Management & Execution</li>
                <li>Data Analysis & Market Research</li>
                <li>Cross-functional Collaboration</li>
              </ul>
            </div>
            
            <button 
              className="btn btn-secondary about-cta"
              onClick={() => scrollToSection('projects')}
            >
              View My Projects
            </button>
          </div>
          
          <div className="about-visual">
            <div className="about-image-container">
              <div className="image-placeholder">
                <div className="placeholder-content">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M20 21a8 8 0 0 0-16 0" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <p>Professional Photo</p>
                </div>
              </div>
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="wave-divider wave-bottom">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,80 C200,40 400,100 600,70 C800,40 1000,100 1200,80 L1200,120 L0,120 Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* Placeholder sections for navigation */}
      <section id="projects" className="placeholder-section">
        <div className="container">
          <h2>Projects Section</h2>
          <p>Projects content will be implemented in future iterations</p>
        </div>
      </section>

      <section id="blogs" className="placeholder-section">
        <div className="container">
          <h2>Blogs Section</h2>
          <p>Blogs content will be implemented in future iterations</p>
        </div>
      </section>

      <section id="contact" className="placeholder-section">
        <div className="container">
          <h2>Contact Section</h2>
          <p>Contact content will be implemented in future iterations</p>
        </div>
      </section>
    </div>
  );
}

export default App;
