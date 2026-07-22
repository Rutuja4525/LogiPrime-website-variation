import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Shield, DollarSign, Users, Award, Clock, ArrowRight } from 'lucide-react';

export default function About() {
  const layout = 'corporate';
  const isDark = false;

  useEffect(() => {
    document.body.className = 'layout-corporate';
  }, []);

  const handleLayoutChange = (newLayout) => {
    // Layout is locked to corporate as requested
  };

  // Styles based on active layout
  const getAboutHeroStyle = () => {
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

  return (
    <div className="app-container">
      <Header activeLayout={layout} onChangeLayout={handleLayoutChange} />

      <main className="about-content">
        {/* About Hero */}
        <section style={getAboutHeroStyle()} className="about-hero-section">
          <Container>
            <span className="text-uppercase fw-bold tracking-wider mb-2 d-block" style={{ 
              fontSize: '0.75rem', 
              color: layout === 'tech' ? '#f472b6' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#c084fc' : '#0284c7' 
            }}>
              Who We Are
            </span>
            <h1 className="display-4 fw-bold mb-3" style={{ 
              fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit',
              letterSpacing: layout === 'minimalist' ? '0' : '-1px'
            }}>
              Bridging Yardi and Enterprise Banking
            </h1>
            <p className="lead mb-0" style={{ maxWidth: '750px', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '300', color: isDark ? '#cbd5e1' : '#64748b' }}>
              LogiPrime Solutions is a dedicated integration partner helping real estate firms automate treasury operations, reduce payment overheads, and completely eliminate vendor wire fraud.
            </p>
          </Container>
        </section>

        {/* Mission & Stand Out */}
        <section className="py-5" style={{ backgroundColor: isDark ? '#0b0d19' : '#ffffff', color: isDark ? '#f1f5f9' : '#1e293b' }}>
          <Container className="py-4">
            <Row className="align-items-center gy-5">
              <Col lg={7}>
                <div className="pe-lg-4">
                  <h2 className="h2 fw-bold mb-4" style={{ 
                    fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit',
                    color: layout === 'minimalist' ? '#1c1c1c' : layout === 'fintech' ? '#00f2fe' : '#0f294a'
                  }}>
                    Our Core Mission
                  </h2>
                  <p className="mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.7', fontWeight: '300', color: isDark ? '#cbd5e1' : '#475569' }}>
                    For real estate finance and accounts payable (AP) teams, managing enterprise property management workflows and processing payments securely has become increasingly complex. Cyber threats like Business Email Compromise (BEC) target vendor onboarding, while organizations struggle to configure Yardi Voyager, build custom interfaces like Concur, or generate critical financial reports without relying on expensive, slow-moving external vendors.
                  </p>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.7', fontWeight: '300', color: isDark ? '#cbd5e1' : '#475569' }}>
                    LogiPrime Solutions was founded to challenge this. We believe enterprise solutions should be direct, highly secure, and tailored to your specific operations. In addition to building direct payment pipelines from Yardi Voyager to J.P. Morgan Chase's API and SFTP gateways, we provide complete, full-lifecycle Yardi consulting. From setting up custom modules and interfaces to designing advanced reporting structures and offering regular daily support, we keep your systems running at peak performance.
                  </p>
                </div>
              </Col>

              <Col lg={5}>
                <div className={`p-4 ${layout === 'tech' || layout === 'purple' ? 'glass-panel' : 'bg-light'} border`} style={{ 
                  borderRadius: layout === 'minimalist' ? '0' : '16px',
                  backgroundColor: layout === 'fintech' ? '#090d16' : '',
                  borderColor: layout === 'fintech' ? 'rgba(0, 242, 254, 0.2)' : layout === 'purple' ? 'rgba(124, 58, 237, 0.2)' : ''
                }}>
                  <h3 className="h5 fw-bold mb-4" style={{ 
                    color: layout === 'tech' ? '#f472b6' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#c084fc' : '#0f294a',
                    fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit'
                  }}>
                    Why LogiPrime Solutions Stands Out
                  </h3>
                  
                  <ul className="list-unstyled d-flex flex-column gap-3 p-0 m-0" style={{ fontSize: '0.9rem' }}>
                    <li className="d-flex align-items-start gap-3">
                      <span style={{ color: layout === 'tech' ? '#f472b6' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#39ff14' : layout === 'purple' ? '#a78bfa' : '#0284c7' }}>✓</span>
                      <span><strong>No Subscription Fees:</strong> We operate on a flat, one-time implementation model, keeping your budget predictable.</span>
                    </li>
                    <li className="d-flex align-items-start gap-3">
                      <span style={{ color: layout === 'tech' ? '#f472b6' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#39ff14' : layout === 'purple' ? '#a78bfa' : '#0284c7' }}>✓</span>
                      <span><strong>Infrastructure-Light:</strong> Runs natively inside Yardi using standard PowerShell tasks. Nothing new to procure or host.</span>
                    </li>
                    <li className="d-flex align-items-start gap-3">
                      <span style={{ color: layout === 'tech' ? '#f472b6' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#39ff14' : layout === 'purple' ? '#a78bfa' : '#0284c7' }}>✓</span>
                      <span><strong>Direct Banking Relations:</strong> Directly harness J.P. Morgan's native infrastructure (AVS, Chase Pay Source, and ISO 20022 XML pain message formats).</span>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Core Pillars */}
        <section className="py-5" style={{ backgroundColor: isDark ? '#05070f' : '#f8fafc', color: isDark ? '#e2e8f0' : '#1e293b', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
          <Container className="py-4">
            <div className="text-center mb-5">
              <span className="text-uppercase fw-bold small tracking-wider" style={{ color: layout === 'tech' ? '#c084fc' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#c084fc' : '#0284c7' }}>Value System</span>
              <h2 className="display-6 fw-bold mt-2" style={{ fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit', color: isDark ? '#ffffff' : '#0f294a' }}>Our Core Pillars</h2>
            </div>

            <Row className="g-4">
              <Col md={4}>
                <Card className="h-100 border-0 p-4" style={{ 
                  borderRadius: layout === 'minimalist' ? '0' : '16px',
                  backgroundColor: layout === 'tech' ? 'rgba(255,255,255,0.02)' : layout === 'fintech' ? '#090d16' : layout === 'purple' ? '#ffffff' : '#ffffff',
                  border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
                }}>
                  <Card.Body className="p-0">
                    <div className="p-3 d-inline-block rounded mb-4" style={{ 
                      backgroundColor: layout === 'tech' ? 'rgba(112,0,255,0.1)' : layout === 'fintech' ? 'rgba(0, 242, 254, 0.1)' : layout === 'purple' ? 'rgba(124, 58, 237, 0.08)' : '#e0f2fe',
                      color: layout === 'tech' ? '#a78bfa' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0284c7'
                    }}>
                      <Shield size={24} />
                    </div>
                    <h3 className="h5 fw-bold mb-3" style={{ color: isDark ? '#ffffff' : '#1e293b' }}>Uncompromising Security</h3>
                    <p className="small mb-0" style={{ color: isDark ? '#94a3b8' : '#64748b', lineHeight: '1.6' }}>Our solutions utilize PGP encryption and direct secure file transfer (SFTP) pathways, supporting security compliance and minimizing insurance risk profiles.</p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="h-100 border-0 p-4" style={{ 
                  borderRadius: layout === 'minimalist' ? '0' : '16px',
                  backgroundColor: layout === 'tech' ? 'rgba(255,255,255,0.02)' : layout === 'fintech' ? '#090d16' : layout === 'purple' ? '#ffffff' : '#ffffff',
                  border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
                }}>
                  <Card.Body className="p-0">
                    <div className="p-3 d-inline-block rounded mb-4" style={{ 
                      backgroundColor: layout === 'tech' ? 'rgba(214,51,132,0.1)' : layout === 'fintech' ? 'rgba(57, 255, 20, 0.1)' : layout === 'purple' ? 'rgba(219, 39, 119, 0.08)' : '#ccfbf1',
                      color: layout === 'tech' ? '#f472b6' : layout === 'fintech' ? '#39ff14' : layout === 'purple' ? '#db2777' : '#115e59'
                    }}>
                      <DollarSign size={24} />
                    </div>
                    <h3 className="h5 fw-bold mb-3" style={{ color: isDark ? '#ffffff' : '#1e293b' }}>Transparent Pricing</h3>
                    <p className="small mb-0" style={{ color: isDark ? '#94a3b8' : '#64748b', lineHeight: '1.6' }}>Flat implementation fees with unlimited bank support at no additional charge. Optional Chase Positive Pay automation additions on demand.</p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                <Card className="h-100 border-0 p-4" style={{ 
                  borderRadius: layout === 'minimalist' ? '0' : '16px',
                  backgroundColor: layout === 'tech' ? 'rgba(255,255,255,0.02)' : layout === 'fintech' ? '#090d16' : layout === 'purple' ? '#ffffff' : '#ffffff',
                  border: isDark ? '1px solid rgba(255,255,255,0.05)' : '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
                }}>
                  <Card.Body className="p-0">
                    <div className="p-3 d-inline-block rounded mb-4" style={{ 
                      backgroundColor: layout === 'tech' ? 'rgba(192,132,252,0.1)' : layout === 'fintech' ? 'rgba(192, 132, 252, 0.1)' : layout === 'purple' ? 'rgba(124, 58, 237, 0.08)' : '#f3e8ff',
                      color: layout === 'tech' ? '#c084fc' : layout === 'fintech' ? '#c084fc' : layout === 'purple' ? '#7c3aed' : '#6b21a8'
                    }}>
                      <Users size={24} />
                    </div>
                    <h3 className="h5 fw-bold mb-3" style={{ color: isDark ? '#ffffff' : '#1e293b' }}>Deep Domain Expertise</h3>
                    <p className="small mb-0" style={{ color: isDark ? '#94a3b8' : '#64748b', lineHeight: '1.6' }}>Our consultants specialize in Yardi Voyager custom configurations, custom stored procedures (SPs), PowerShell automation, custom reporting (YSR/SSRS), Concur integrations, and ongoing helpdesk support.</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Engagement Timeline */}
        <section className="py-5" style={{ backgroundColor: isDark ? '#0b0d19' : '#ffffff', color: isDark ? '#f1f5f9' : '#1e293b' }}>
          <Container className="py-4">
            <div className={`p-5 ${layout === 'tech' || layout === 'purple' ? 'glass-panel' : 'bg-light'} border`} style={{ 
              borderRadius: layout === 'minimalist' ? '0' : '20px',
              backgroundColor: layout === 'fintech' ? '#090d16' : '',
              borderColor: layout === 'fintech' ? 'rgba(0, 242, 254, 0.2)' : layout === 'purple' ? 'rgba(139, 92, 246, 0.2)' : ''
            }}>
              <div className="text-center mb-5">
                <span className="text-uppercase fw-bold small tracking-wider" style={{ color: layout === 'tech' ? '#f472b6' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0284c7' }}>Engagement Lifecycle</span>
                <h3 className="h2 fw-bold mt-2" style={{ fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit', color: isDark ? '#ffffff' : '#0f294a' }}>Standard 4-Week Integration Path</h3>
                <p className="small mx-auto mt-2" style={{ maxWidth: '500px', color: isDark ? '#cbd5e1' : '#64748b' }}>Our deployment process is rapid, reliable, and causes zero disruption to your daily operations.</p>
              </div>

              <Row className="gy-4">
                <Col lg={4}>
                  <div className="position-relative">
                    <span className="small text-uppercase fw-bold" style={{ color: layout === 'tech' ? '#a78bfa' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0284c7', fontFamily: 'var(--font-mono)' }}>Week 1</span>
                    <h4 className="h5 fw-bold my-2" style={{ color: isDark ? '#ffffff' : '#1e293b' }}>Phase 1: Pre-CAT</h4>
                    <p className="small mb-0" style={{ color: isDark ? '#94a3b8' : '#64748b', lineHeight: '1.6' }}>We gather environment details, configure J.P. Morgan onboarding documents, verify client EFT data hygiene, and configure alert parameters.</p>
                  </div>
                </Col>

                <Col lg={4} style={{ borderLeft: '1px solid rgba(0,0,0,0.08)' }} className="mobile-no-border">
                  <div className="ps-lg-4 position-relative">
                    <span className="small text-uppercase fw-bold" style={{ color: layout === 'tech' ? '#f472b6' : layout === 'minimalist' ? '#d4af37' : layout === 'fintech' ? '#39ff14' : layout === 'purple' ? '#db2777' : '#0284c7', fontFamily: 'var(--font-mono)' }}>Weeks 2–3</span>
                    <h4 className="h5 fw-bold my-2" style={{ color: isDark ? '#ffffff' : '#1e293b' }}>Phase 2: CAT Testing</h4>
                    <p className="small mb-0" style={{ color: isDark ? '#94a3b8' : '#64748b', lineHeight: '1.6' }}>We deliver Yardi configuration packages, custom reports, and PowerShell connectors, and conduct intensive end-to-end file testing with J.P. Morgan.</p>
                  </div>
                </Col>

                <Col lg={4} style={{ borderLeft: '1px solid rgba(0,0,0,0.08)' }} className="mobile-no-border">
                  <div className="ps-lg-4 position-relative">
                    <span className="small text-uppercase fw-bold" style={{ color: layout === 'tech' ? '#34d399' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#10b981' : '#16a34a', fontFamily: 'var(--font-mono)' }}>Week 4</span>
                    <h4 className="h5 fw-bold my-2" style={{ color: isDark ? '#ffffff' : '#1e293b' }}>Phase 3: Go-Live</h4>
                    <p className="small mb-0" style={{ color: isDark ? '#94a3b8' : '#64748b', lineHeight: '1.6' }}>We finalize the transition to production, sign off on the implementation, and move the solution to support status, running smoothly.</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </main>

      <Footer activeLayout={layout} />
    </div>
  );
}
