import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Sun, Moon, Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";

export default function Header() {
  const [theme, setTheme] = useState('light');
  const [expanded, setExpanded] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    setCurrentPath(page);

    const savedTheme = localStorage.getItem('logiprime-theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('logiprime-theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const getNavLinkClass = (page) => {
    const isActive = currentPath === page || (currentPath === '' && page === 'index.html');
    return `nav-link px-3 ${isActive ? 'active-nav-link' : ''}`;
  };

  const isDarkLayout = theme === 'dark';

  return (
    <Navbar 
      expand="lg" 
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      style={{
        backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        padding: '14px 0',
        fontFamily: 'var(--font-sans)'
      }}
      className={`main-header transition-all ${isDarkLayout ? 'navbar-dark' : 'navbar-light'}`}
    >
      <Container>
        <Navbar.Brand href="index.html" className="d-flex align-items-center gap-2">
          <img 
            src={logo}
            alt="LogiPrime Solutions Logo" 
            height="36" 
            className="logo-img d-inline-block align-top"
            style={{ filter: isDarkLayout ? 'brightness(1.2)' : 'none' }}
          />
          <span style={{ 
            fontWeight: '700',
            fontSize: '1.25rem',
            color: isDarkLayout ? '#ffffff' : '#0f294a',
            letterSpacing: '-0.3px'
          }}>
            LogiPrime Solutions
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          {expanded ? <X size={24} className={isDarkLayout ? 'text-white' : 'text-dark'} /> : <Menu size={24} className={isDarkLayout ? 'text-white' : 'text-dark'} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between align-items-center">
          <Nav className="mx-auto text-center my-3 my-lg-0">
            <Nav.Link href="index.html" className={getNavLinkClass('index.html')}>Home</Nav.Link>
            <Nav.Link href="services.html" className={getNavLinkClass('services.html')}>Services</Nav.Link>
            <Nav.Link href="solutions.html" className={getNavLinkClass('solutions.html')}>Solutions</Nav.Link>
            <Nav.Link href="about.html" className={getNavLinkClass('about.html')}>About Us</Nav.Link>
            <Nav.Link href="contact.html" className={getNavLinkClass('contact.html')}>Contact Us</Nav.Link>
          </Nav>

          <div className="d-flex align-items-center justify-content-center gap-3">
            <button 
              onClick={toggleTheme} 
              className="btn border-0 p-2 d-flex align-items-center justify-content-center"
              style={{ color: isDarkLayout ? '#cbd5e1' : '#475569' }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <Button 
              href="contact.html" 
              style={{
                backgroundColor: '#0f294a',
                borderColor: '#0f294a',
                borderRadius: '4px',
                padding: '8px 20px',
                fontWeight: '500'
              }}
            >
              Request Demo
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>

      <style>{`
        .active-nav-link {
          font-weight: 700;
          color: #0f294a !important;
        }
        
        .nav-link {
          transition: color 0.2s ease;
          font-weight: 500;
        }

        .navbar-dark .nav-link {
          color: #cbd5e1;
        }
        .navbar-dark .nav-link:hover, .navbar-dark .nav-link.active-nav-link {
          color: #ffffff !important;
        }

        .navbar-light .nav-link {
          color: #475569;
        }
        .navbar-light .nav-link:hover, .navbar-light .nav-link.active-nav-link {
          color: #0f294a !important;
        }
      `}</style>
    </Navbar>
  );
}
