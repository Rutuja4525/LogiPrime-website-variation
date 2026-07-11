import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from "../assets/logo.png";

export default function Footer({ activeLayout }) {
  const getFooterStyle = () => {
    switch (activeLayout) {
      case 'tech':
        return {
          backgroundColor: '#07080f',
          color: '#94a3b8',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          padding: '80px 0 40px 0',
          fontFamily: 'var(--font-tech)'
        };
      case 'minimalist':
        return {
          backgroundColor: '#faf9f6',
          color: '#1c1c1c',
          borderTop: '2px solid #1c1c1c',
          padding: '80px 0 40px 0',
          fontFamily: 'var(--font-serif)'
        };
      case 'fintech':
        return {
          backgroundColor: '#020306',
          color: '#94a3b8',
          borderTop: '1px solid rgba(0, 242, 254, 0.3)',
          padding: '60px 0 30px 0',
          fontFamily: 'var(--font-mono)'
        };
      case 'purple':
        return {
          backgroundColor: '#f5f3ff',
          color: '#4c4765',
          borderTop: '1px solid rgba(124, 58, 237, 0.2)',
          padding: '80px 0 40px 0',
          fontFamily: 'var(--font-tech)'
        };
      case 'corporate':
      default:
        return {
          backgroundColor: '#0a192f',
          color: '#cbd5e1',
          borderTop: 'none',
          padding: '80px 0 40px 0',
          fontFamily: 'var(--font-sans)'
        };
    }
  };

  const getColTitleStyle = () => {
    const isDark = activeLayout === 'tech' || activeLayout === 'fintech' || activeLayout === 'corporate' || activeLayout === 'purple';
    return {
      fontWeight: activeLayout === 'minimalist' ? '600' : '700',
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: activeLayout === 'minimalist' ? '#1c1c1c' : activeLayout === 'fintech' ? '#00f2fe' : activeLayout === 'purple' ? '#6d28d9' : '#ffffff',
      marginBottom: '20px'
    };
  };

  const getLinkStyle = () => {
    return {
      color: 'inherit',
      textDecoration: 'none',
      fontSize: '0.88rem',
      transition: 'color 0.2s ease',
      display: 'inline-block',
      marginBottom: '10px'
    };
  };

  const isDark = activeLayout === 'tech' || activeLayout === 'fintech' || activeLayout === 'corporate';

  return (
    <footer style={getFooterStyle()} className="footer-section">
      <Container>
        <Row className="gy-4">
          <Col lg={5} md={12}>
            <div className="footer-brand mb-4">
              <a href="index.html" className="d-flex align-items-center gap-2 mb-3" style={{ textDecoration: 'none' }}>
                <img 
                  src={logo} 
                  alt="LogiPrime Solutions Logo" 
                  height="32" 
                  style={{ filter: isDark ? 'brightness(1.2)' : 'none' }}
                />
                <span style={{ 
                  fontWeight: activeLayout === 'minimalist' ? '400' : '700',
                  fontSize: '1.2rem',
                  color: isDark ? '#ffffff' : '#0f294a',
                  textTransform: activeLayout === 'minimalist' ? 'uppercase' : 'none',
                  letterSpacing: activeLayout === 'minimalist' ? '0.5px' : '0'
                }}>
                  LogiPrime Solutions
                </span>
              </a>
              <p style={{ 
                fontSize: '0.9rem', 
                color: activeLayout === 'minimalist' ? '#4a4a4a' : '#94a3b8',
                maxWidth: '400px',
                lineHeight: '1.6'
              }}>
                Enterprise payment automation and fraud prevention solutions for Yardi and J.P. Morgan customers.
              </p>
            </div>
          </Col>

          <Col lg={3} md={6} sm={6}>
            <h5 style={getColTitleStyle()}>Solutions &amp; Services</h5>
            <ul className="list-unstyled p-0 m-0">
              <li>
                <a href="services.html#detail-wire-validation" style={getLinkStyle()} className="footer-hover-link">
                  Wire Validation
                </a>
              </li>
              <li>
                <a href="services.html#detail-h2h" style={getLinkStyle()} className="footer-hover-link">
                  Host-to-Host Payments
                </a>
              </li>
              <li>
                <a href="services.html" style={getLinkStyle()} className="footer-hover-link">
                  Yardi Consulting &amp; Support
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={4} md={6} sm={6}>
            <h5 style={getColTitleStyle()}>Company</h5>
            <ul className="list-unstyled p-0 m-0">
              <li>
                <a href="about.html" style={getLinkStyle()} className="footer-hover-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="contact.html" style={getLinkStyle()} className="footer-hover-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="my-4" style={{ borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }} />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3" style={{ fontSize: '0.82rem', color: activeLayout === 'minimalist' ? '#666' : '#64748b' }}>
          <p className="m-0">
            &copy; 2026 LogiPrime Solutions. All rights reserved. Confidential.
          </p>
          <div className="d-flex gap-3">
            <span style={{
              color: activeLayout === 'minimalist' ? '#2a4b3d' : activeLayout === 'fintech' ? '#39ff14' : activeLayout === 'tech' ? '#d63384' : activeLayout === 'purple' ? '#a78bfa' : '#0d6efd',
              fontWeight: '600'
            }}>
              Yardi Consultancy
            </span>
          </div>
        </div>
      </Container>
      
      <style>{`
        .footer-hover-link:hover {
          color: ${activeLayout === 'tech' ? '#d63384' : activeLayout === 'minimalist' ? '#2a4b3d' : activeLayout === 'fintech' ? '#00f2fe' : activeLayout === 'purple' ? '#a78bfa' : '#ffffff'} !important;
          transform: translateX(4px);
        }
        .footer-hover-link {
          transition: all 0.2s ease !important;
        }
      `}</style>
    </footer>
  );
}
