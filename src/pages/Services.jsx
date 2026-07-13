import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Shield, Zap, Users, Database, Link, Activity, ChevronRight, Check } from 'lucide-react';

export default function Services() {
  const layout = 'corporate';
  const isDark = false;

  useEffect(() => {
    document.body.className = 'layout-corporate';
  }, []);

  const handleLayoutChange = (newLayout) => {
    // Layout is locked to corporate as requested
  };

  const getServicesHeroStyle = () => {
    switch (layout) {
      case 'tech':
        return {
          background: 'linear-gradient(135deg, #0e1227 0%, #07080f 100%)',
          color: '#ffffff',
          padding: '100px 0 60px 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          fontFamily: 'var(--font-tech)'
        };
      case 'minimalist':
        return {
          backgroundColor: '#faf9f6',
          color: '#1c1c1c',
          padding: '120px 0 60px 0',
          borderBottom: '1px solid #e5e5e0',
          fontFamily: 'var(--font-serif)'
        };
      case 'fintech':
        return {
          backgroundColor: '#05070f',
          color: '#e2e8f0',
          padding: '100px 0 50px 0',
          borderBottom: '1px solid rgba(0, 242, 254, 0.15)',
          fontFamily: 'var(--font-mono)'
        };
      case 'purple':
        return {
          background: 'linear-gradient(135deg, #f5f3ff 0%, #fae8ff 100%)',
          color: '#1e1b4b',
          padding: '100px 0 60px 0',
          borderBottom: '1px solid rgba(124, 58, 237, 0.15)',
          fontFamily: 'var(--font-tech)'
        };
      case 'corporate':
      default:
        return {
          background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
          color: '#0f294a',
          padding: '80px 0 50px 0',
          borderBottom: '1px solid #cbd5e1',
          fontFamily: 'var(--font-sans)'
        };
    }
  };

  const getCardStyle = () => {
    return {
      borderRadius: layout === 'minimalist' ? '0' : '16px',
      backgroundColor: layout === 'tech' ? 'rgba(255,255,255,0.02)' : layout === 'fintech' ? '#090d16' : layout === 'purple' ? '#ffffff' : '#ffffff',
      border: isDark ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(0,0,0,0.06)',
      boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
      height: '100%'
    };
  };

  const getButtonVariant = () => {
    if (layout === 'minimalist') return 'outline-dark';
    if (layout === 'fintech') return 'outline-info';
    return 'secondary';
  };

  const getButtonStyle = () => {
    if (layout === 'fintech') {
      return {
        color: '#00f2fe',
        borderColor: '#00f2fe',
        backgroundColor: 'transparent'
      };
    }
    if (layout === 'tech') {
      return {
        backgroundColor: '#7000ff',
        borderColor: '#7000ff',
        color: '#ffffff'
      };
    }
    if (layout === 'purple') {
      return {
        background: 'linear-gradient(135deg, #7c3aed 0%, #db2777 100%)',
        border: 'none',
        color: '#ffffff',
        boxShadow: '0 4px 15px rgba(124, 58, 237, 0.2)'
      };
    }
    return {};
  };

  return (
    <div className="app-container">
      <Header activeLayout={layout} onChangeLayout={handleLayoutChange} />

      <main className="services-content">
        {/* Services Hero */}
        <section style={getServicesHeroStyle()} className="services-hero-section">
          <Container>
            <span className="text-uppercase fw-bold tracking-wider mb-2 d-block" style={{ 
              fontSize: '0.75rem', 
              color: layout === 'tech' ? '#f472b6' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0284c7' 
            }}>
              Enterprise Capabilities
            </span>
            <h1 className="display-4 fw-bold mb-3" style={{ 
              fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit',
              letterSpacing: layout === 'minimalist' ? '0' : '-1px'
            }}>
              Comprehensive Yardi Solutions
            </h1>
            <p className="lead mb-0" style={{ maxWidth: '750px', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '300', color: isDark ? '#cbd5e1' : '#64748b' }}>
              From flat-fee banking integrations to custom scripting, reporting, and hands-on system administration, we optimize your property management ecosystem.
            </p>
          </Container>
        </section>

        {/* Detailed Services Grid */}
        <section className="py-5" style={{ backgroundColor: layout === 'purple' ? '#faf9ff' : isDark ? '#0b0d19' : '#ffffff', color: isDark ? '#f1f5f9' : '#1e293b' }}>
          <Container className="py-4">
            <Row className="g-4">
              
              {/* Service 1: Wire Validation */}
              <Col md={6} lg={4} id="detail-wire-validation">
                <Card style={getCardStyle()} className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="small text-uppercase tracking-wider fw-bold" style={{ color: layout === 'tech' ? '#f472b6' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#64748b' }}>Fraud Prevention</span>
                      <div style={{ color: layout === 'tech' ? '#f472b6' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0284c7' }}><Shield size={24} /></div>
                    </div>
                    <h3 className="h5 fw-bold mb-3" style={{ color: isDark ? '#ffffff' : '#1e1b4b', fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit' }}>AVS Wire Validation</h3>
                    <p className="small mb-4" style={{ color: isDark ? '#94a3b8' : '#4a5568', lineHeight: '1.6' }}>Direct account ownership validation queried in real time via J.P. Morgan Chase's Account Validation Service (AVS) to prevent AP fraud.</p>
                    
                    <ul className="list-unstyled mb-4 d-flex flex-column gap-2 p-0" style={{ fontSize: '0.85rem' }}>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>Natively integrates inside Yardi vendor workflows</span>
                      </li>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>Automated validation under 15 minutes</span>
                      </li>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>Reduces compliance and treasury risk profiles</span>
                      </li>
                    </ul>
                  </div>
                  <Button href="contact.html?product=wire-validation" variant={getButtonVariant()} style={getButtonStyle()} className={layout === 'minimalist' ? 'rounded-0' : ''}>
                    Get Started
                  </Button>
                </Card>
              </Col>

              {/* Service 2: Host to Host */}
              <Col md={6} lg={4} id="detail-h2h">
                <Card style={getCardStyle()} className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="small text-uppercase tracking-wider fw-bold" style={{ color: layout === 'tech' ? '#f472b6' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#64748b' }}>Treasury Automation</span>
                      <div style={{ color: layout === 'tech' ? '#f472b6' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#d97706' }}><Zap size={24} /></div>
                    </div>
                    <h3 className="h5 fw-bold mb-3" style={{ color: isDark ? '#ffffff' : '#1e1b4b', fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit' }}>Host-to-Host Payments</h3>
                    <p className="small mb-4" style={{ color: isDark ? '#94a3b8' : '#4a5568', lineHeight: '1.6' }}>Direct ISO 20022 payments (pain.001/pain.002 status files) connecting Yardi Core directly to J.P. Morgan Chase pay source.</p>
                    
                    <ul className="list-unstyled mb-4 d-flex flex-column gap-2 p-0" style={{ fontSize: '0.85rem' }}>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>No middleware, transaction, or portal fees</span>
                      </li>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>PGP-encrypted, direct SFTP connection</span>
                      </li>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>Automates ACH, domestic wires, and checks</span>
                      </li>
                    </ul>
                  </div>
                  <Button href="contact.html?product=h2h-payments" variant={getButtonVariant()} style={getButtonStyle()} className={layout === 'minimalist' ? 'rounded-0' : ''}>
                    Get Started
                  </Button>
                </Card>
              </Col>

              {/* Service 3: Yardi Consulting */}
              <Col md={6} lg={4} id="detail-consulting">
                <Card style={getCardStyle()} className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="small text-uppercase tracking-wider fw-bold" style={{ color: layout === 'tech' ? '#f472b6' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#64748b' }}>System Consulting</span>
                      <div style={{ color: layout === 'tech' ? '#f472b6' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0284c7' }}><Users size={24} /></div>
                    </div>
                    <h3 className="h5 fw-bold mb-3" style={{ color: isDark ? '#ffffff' : '#1e1b4b', fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit' }}>Yardi Consulting</h3>
                    <p className="small mb-4" style={{ color: isDark ? '#94a3b8' : '#4a5568', lineHeight: '1.6' }}>Full-scale consulting for module deployment, custom configurations, workflow optimization, and Yardi database health audits.</p>
                    
                    <ul className="list-unstyled mb-4 d-flex flex-column gap-2 p-0" style={{ fontSize: '0.85rem' }}>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>Voyager module setups (Job Cost, Asset Mgmt)</span>
                      </li>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>Chart of accounts and workflow restructuring</span>
                      </li>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>Platform health audits and process reviews</span>
                      </li>
                    </ul>
                  </div>
                  <Button href="contact.html?product=yardi-consulting" variant={getButtonVariant()} style={getButtonStyle()} className={layout === 'minimalist' ? 'rounded-0' : ''}>
                    Get Started
                  </Button>
                </Card>
              </Col>

              {/* Service 4: Custom Reporting */}
              <Col md={6} lg={4} id="detail-reporting">
                <Card style={getCardStyle()} className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="small text-uppercase tracking-wider fw-bold" style={{ color: layout === 'tech' ? '#f472b6' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#64748b' }}>Custom Development</span>
                      <div style={{ color: layout === 'tech' ? '#f472b6' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#db2777' }}><Database size={24} /></div>
                    </div>
                    <h3 className="h5 fw-bold mb-3" style={{ color: isDark ? '#ffffff' : '#1e1b4b', fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit' }}>Yardi Custom Reporting</h3>
                    <p className="small mb-4" style={{ color: isDark ? '#94a3b8' : '#4a5568', lineHeight: '1.6' }}>Custom financial, operational, and billing reports engineered using Yardi's native data structures and reporting protocols.</p>
                    
                    <ul className="list-unstyled mb-4 d-flex flex-column gap-2 p-0" style={{ fontSize: '0.85rem' }}>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>YSR (Yardi Spreadsheet Reporting) setups</span>
                      </li>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>SSRS (SQL Server Reporting Services) layout designs</span>
                      </li>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>High-performance stored procedures (SQL/SPs)</span>
                      </li>
                    </ul>
                  </div>
                  <Button href="contact.html?product=yardi-consulting" variant={getButtonVariant()} style={getButtonStyle()} className={layout === 'minimalist' ? 'rounded-0' : ''}>
                    Get Started
                  </Button>
                </Card>
              </Col>

              {/* Service 5: Custom Interfaces */}
              <Col md={6} lg={4} id="detail-interfaces">
                <Card style={getCardStyle()} className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="small text-uppercase tracking-wider fw-bold" style={{ color: layout === 'tech' ? '#f472b6' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#64748b' }}>System Interfaces</span>
                      <div style={{ color: layout === 'tech' ? '#f472b6' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#10b981' }}><Link size={24} /></div>
                    </div>
                    <h3 className="h5 fw-bold mb-3" style={{ color: isDark ? '#ffffff' : '#1e1b4b', fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit' }}>Building Custom Interfaces</h3>
                    <p className="small mb-4" style={{ color: isDark ? '#94a3b8' : '#4a5568', lineHeight: '1.6' }}>Integrations and interfaces linking Yardi Voyager with external corporate applications to remove manual data duplication.</p>
                    
                    <ul className="list-unstyled mb-4 d-flex flex-column gap-2 p-0" style={{ fontSize: '0.85rem' }}>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>Bi-directional SAP Concur Expense/Invoice sync</span>
                      </li>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>External CRM platforms and billing links</span>
                      </li>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>Custom secure REST APIs and file imports</span>
                      </li>
                    </ul>
                  </div>
                  <Button href="contact.html?product=yardi-interfaces" variant={getButtonVariant()} style={getButtonStyle()} className={layout === 'minimalist' ? 'rounded-0' : ''}>
                    Get Started
                  </Button>
                </Card>
              </Col>

              {/* Service 6: Regular Support */}
              <Col md={6} lg={4} id="detail-support">
                <Card style={getCardStyle()} className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="small text-uppercase tracking-wider fw-bold" style={{ color: layout === 'tech' ? '#f472b6' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#64748b' }}>Managed Support</span>
                      <div style={{ color: layout === 'tech' ? '#f472b6' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0284c7' }}><Activity size={24} /></div>
                    </div>
                    <h3 className="h5 fw-bold mb-3" style={{ color: isDark ? '#ffffff' : '#1e1b4b', fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit' }}>Regular Support Work</h3>
                    <p className="small mb-4" style={{ color: isDark ? '#94a3b8' : '#4a5568', lineHeight: '1.6' }}>Ongoing helpdesk assistance, troubleshooting configuration errors, user provisioning, database tune-ups, and minor setups.</p>
                    
                    <ul className="list-unstyled mb-4 d-flex flex-column gap-2 p-0" style={{ fontSize: '0.85rem' }}>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>Reliable technical support desk assistance</span>
                      </li>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>Routine database optimization and cleanups</span>
                      </li>
                      <li className="d-flex align-items-start gap-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>
                        <span className="text-success mt-0.5"><Check size={14} /></span>
                        <span>User access management and role security settings</span>
                      </li>
                    </ul>
                  </div>
                  <Button href="contact.html?product=yardi-support" variant={getButtonVariant()} style={getButtonStyle()} className={layout === 'minimalist' ? 'rounded-0' : ''}>
                    Get Started
                  </Button>
                </Card>
              </Col>

            </Row>
          </Container>
        </section>

        {/* How We Work */}
        <section className="py-5" style={{ backgroundColor: layout === 'purple' ? '#f5f3ff' : isDark ? '#05070f' : '#f8fafc', color: isDark ? '#e2e8f0' : '#1e293b', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <Container className="py-4" style={{ maxWidth: '800px' }}>
            <div className="text-center mb-5">
              <span className="text-uppercase fw-bold small tracking-wider" style={{ color: layout === 'tech' ? '#f472b6' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0284c7' }}>How We Work</span>
              <h2 className="display-6 fw-bold mt-2" style={{ fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit', color: isDark ? '#ffffff' : '#0f294a' }}>Straightforward Implementation</h2>
              <p className="small mt-2" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>We build custom interfaces and integrations with transparent pricing and direct collaboration. No long-term support lock-ins, no markup fees—just reliable expert engineering.</p>
            </div>

            <div className="d-flex flex-column gap-4 text-start">
              <div className={`p-4 d-flex gap-3 align-items-start ${layout === 'tech' ? 'glass-panel' : 'bg-white border'}`} style={{ borderRadius: layout === 'minimalist' ? '0' : '12px', backgroundColor: layout === 'fintech' ? '#090d16' : '', borderColor: layout === 'fintech' ? 'rgba(0, 242, 254, 0.15)' : layout === 'purple' ? 'rgba(124, 58, 237, 0.15)' : '' }}>
                <div style={{ 
                  width: '36px', height: '36px', borderRadius: '50%', 
                  backgroundColor: layout === 'tech' ? '#7000ff' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0284c7', 
                  color: layout === 'fintech' ? '#05070f' : 'white', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 
                }}>1</div>
                <div>
                  <h4 className="h6 fw-bold mb-1" style={{ color: isDark ? '#ffffff' : '#1e1b4b' }}>Discovery &amp; Scope Definition</h4>
                  <p className="small mb-0" style={{ color: isDark ? '#94a3b8' : '#4a5568', lineHeight: '1.6' }}>We evaluate your current Yardi Voyager setup, custom database schemas, and banking or external software endpoints to draw up a clear statement of work.</p>
                </div>
              </div>

              <div className={`p-4 d-flex gap-3 align-items-start ${layout === 'tech' ? 'glass-panel' : 'bg-white border'}`} style={{ borderRadius: layout === 'minimalist' ? '0' : '12px', backgroundColor: layout === 'fintech' ? '#090d16' : '', borderColor: layout === 'fintech' ? 'rgba(0, 242, 254, 0.15)' : layout === 'purple' ? 'rgba(124, 58, 237, 0.15)' : '' }}>
                <div style={{ 
                  width: '36px', height: '36px', borderRadius: '50%', 
                  backgroundColor: layout === 'tech' ? '#d63384' : layout === 'minimalist' ? '#d4af37' : layout === 'fintech' ? '#39ff14' : layout === 'purple' ? '#db2777' : '#0f294a', 
                  color: layout === 'fintech' ? '#05070f' : 'white', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 
                }}>2</div>
                <div>
                  <h4 className="h6 fw-bold mb-1" style={{ color: isDark ? '#ffffff' : '#1e1b4b' }}>Flat-Fee Custom Development</h4>
                  <p className="small mb-0" style={{ color: isDark ? '#94a3b8' : '#4a5568', lineHeight: '1.6' }}>Our architects write clean stored procedures, configure Voyager interfaces, build API connections, and run files through rigorous quality checks.</p>
                </div>
              </div>

              <div className={`p-4 d-flex gap-3 align-items-start ${layout === 'tech' ? 'glass-panel' : 'bg-white border'}`} style={{ borderRadius: layout === 'minimalist' ? '0' : '12px', backgroundColor: layout === 'fintech' ? '#090d16' : '', borderColor: layout === 'fintech' ? 'rgba(0, 242, 254, 0.15)' : layout === 'purple' ? 'rgba(124, 58, 237, 0.15)' : '' }}>
                <div style={{ 
                  width: '36px', height: '36px', borderRadius: '50%', 
                  backgroundColor: layout === 'tech' ? '#0ea5e9' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#10b981' : '#16a34a', 
                  color: layout === 'fintech' ? '#05070f' : 'white', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 
                }}>3</div>
                <div>
                  <h4 className="h6 fw-bold mb-1" style={{ color: isDark ? '#ffffff' : '#1e1b4b' }}>Client Review &amp; Launch</h4>
                  <p className="small mb-0" style={{ color: isDark ? '#94a3b8' : '#4a5568', lineHeight: '1.6' }}>We conduct detailed end-to-end sandbox tests, move configurations to production environments, and transition control directly to your finance/operations teams.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Banner */}
        <section id="call-to-action" className="py-5" style={{ backgroundColor: isDark ? '#0b0d19' : '#ffffff' }}>
          <Container>
            <div className={`p-5 text-center ${layout === 'tech' ? 'glass-panel' : 'bg-light'} border`} style={{ 
              borderRadius: layout === 'minimalist' ? '0' : '16px',
              backgroundColor: layout === 'fintech' ? '#090d16' : layout === 'purple' ? '#ffffff' : '',
              borderColor: layout === 'fintech' ? 'rgba(0, 242, 254, 0.2)' : layout === 'purple' ? 'rgba(124, 58, 237, 0.2)' : ''
            }}>
              <h2 className="display-6 fw-bold mb-3" style={{ 
                fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit',
                color: isDark ? '#ffffff' : '#0f294a'
              }}>
                Ready to Optimize Your Yardi Platform?
              </h2>
              <p className="lead mb-4 mx-auto" style={{ maxWidth: '700px', fontSize: '1.02rem', fontWeight: '300', color: isDark ? '#cbd5e1' : '#64748b' }}>
                Schedule a live consultation with our integration architects to map out custom reporting, Concur interfaces, or treasury workflows.
              </p>
              <Button href="contact.html" size="lg" style={{ 
                backgroundColor: layout === 'tech' ? '#7000ff' : layout === 'minimalist' ? '#1c1c1c' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0284c7', 
                borderColor: layout === 'tech' ? '#7000ff' : layout === 'minimalist' ? '#1c1c1c' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0284c7', 
                color: layout === 'fintech' ? '#05070f' : 'white',
                borderRadius: layout === 'minimalist' ? '0' : '4px',
                padding: '12px 30px'
              }}>
                Book a Consultation
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer activeLayout={layout} />
    </div>
  );
}
