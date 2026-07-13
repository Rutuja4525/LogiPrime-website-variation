import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Shield, Zap, CheckCircle2, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Solutions() {
  const layout = 'corporate';

  useEffect(() => {
    document.body.className = 'layout-corporate';
  }, []);

  const handleLayoutChange = (newLayout) => {
    // Layout is locked to corporate
  };

  const getSolutionsHeroStyle = () => {
    return {
      background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
      color: '#0f294a',
      padding: '80px 0 50px 0',
      borderBottom: '1px solid #cbd5e1',
      fontFamily: 'var(--font-sans)'
    };
  };

  return (
    <div className="app-container">
      <Header activeLayout={layout} onChangeLayout={handleLayoutChange} />

      <main className="solutions-content">
        {/* Solutions Hero */}
        <section style={getSolutionsHeroStyle()} className="solutions-hero-section">
          <Container>
            <span className="text-uppercase fw-bold tracking-wider mb-2 d-block text-primary" style={{ fontSize: '0.75rem' }}>
              Fintech &amp; Banking Automation
            </span>
            <h1 className="display-4 fw-bold mb-3" style={{ letterSpacing: '-1px' }}>
              Yardi &amp; JPMorgan Chase Integrations
            </h1>
            <p className="lead mb-0 text-muted" style={{ maxWidth: '750px', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '300' }}>
              Automate outbound payments, eliminate Accounts Payable fraud, and connect Yardi Voyager natively to JPMorgan APIs without intermediate servers or transaction fees.
            </p>
          </Container>
        </section>

        {/* Solutions Section */}
        <section className="py-6" style={{ backgroundColor: '#f8fafc', padding: '100px 0', borderBottom: '1px solid #e2e8f0' }}>
          <Container>
            <Row className="g-4 mt-2 justify-content-center">
              
              {/* Solution 1: JPMorgan AVS Validation Card */}
              <Col lg={6} id="detail-wire-validation">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="h-100"
                >
                  <Card className="h-100 saas-card-light-highlight p-4">
                    <Card.Body className="p-0 d-flex flex-column justify-content-between h-100">
                      <div>
                        {/* Card Header Badge & Icon */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <span className="badge px-3 py-2 text-uppercase saas-badge-light-blue">
                            Fraud Prevention
                          </span>
                          <div style={{ color: '#0284c7', padding: '10px', backgroundColor: 'rgba(2, 132, 199, 0.06)', borderRadius: '12px' }}>
                            <Shield size={24} />
                          </div>
                        </div>

                        {/* Title & Detailed Description */}
                        <h3 className="h4 fw-bold mb-3" style={{ color: '#0f294a' }}>JPMorgan AVS Validation</h3>
                        <p className="text-muted mb-4" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                          Protect your treasury from Business Email Compromise (BEC) and vendor spoofing. Check account and routing authenticity inside the native vendor onboarding workflow before payments are released.
                        </p>

                        {/* Micro-Metrics Stats Grid */}
                        <div className="p-3 mb-4 bg-light rounded-3" style={{ border: '1px solid #e2e8f0' }}>
                          <Row className="g-2 text-center">
                            <Col xs={6} className="border-end border-bottom pb-2">
                              <span className="fw-bold text-primary d-block" style={{ fontSize: '1.05rem', lineHeight: '1.1' }}>100%</span>
                              <span className="text-muted" style={{ fontSize: '0.65rem' }}>Fraud Blocked</span>
                            </Col>
                            <Col xs={6} className="border-bottom pb-2">
                              <span className="fw-bold text-primary d-block" style={{ fontSize: '1.05rem', lineHeight: '1.1' }}>Zero</span>
                              <span className="text-muted" style={{ fontSize: '0.65rem' }}>Manual Callbacks</span>
                            </Col>
                            <Col xs={6} className="border-end pt-2">
                              <span className="fw-bold text-primary d-block" style={{ fontSize: '1.05rem', lineHeight: '1.1' }}>1 Year</span>
                              <span className="text-muted" style={{ fontSize: '0.65rem' }}>Live in Production</span>
                            </Col>
                            <Col xs={6} className="pt-2">
                              <span className="fw-bold text-primary d-block" style={{ fontSize: '1.05rem', lineHeight: '1.1' }}>&lt;15 min</span>
                              <span className="text-muted" style={{ fontSize: '0.65rem' }}>Avg. Validation Time</span>
                            </Col>
                          </Row>
                        </div>

                        {/* Detailed Bullet Points */}
                        <ul className="list-unstyled mb-4 d-flex flex-column gap-3">
                          <li className="saas-bullet-item-light-mode">
                            <CheckCircle2 size={16} className="saas-bullet-icon-light-mode flex-shrink-0 mt-0.5" />
                            <span style={{ fontSize: '0.85rem' }}>
                              <strong>JPMorgan AVS Integration:</strong> Directly queries JPMorgan Chase's Account Validation Service database.
                            </span>
                          </li>
                          <li className="saas-bullet-item-light-mode">
                            <CheckCircle2 size={16} className="saas-bullet-icon-light-mode flex-shrink-0 mt-0.5" />
                            <span style={{ fontSize: '0.85rem' }}>
                              <strong>Workflow-Native:</strong> Runs inline during Yardi onboarding, routing pass/fail outcomes to configured approvals.
                            </span>
                          </li>
                          <li className="saas-bullet-item-light-mode">
                            <CheckCircle2 size={16} className="saas-bullet-icon-light-mode flex-shrink-0 mt-0.5" />
                            <span style={{ fontSize: '0.85rem' }}>
                              <strong>Compliance &amp; Security:</strong> Supports SOC 2 payment controls and reduces cyber liability risk.
                            </span>
                          </li>
                        </ul>

                        {/* Integration Diagram */}
                        <div className="p-3 mb-4" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                          <span className="small text-uppercase fw-bold text-muted d-block mb-3 text-center" style={{ letterSpacing: '0.8px', fontSize: '0.7rem' }}>Integration Flow</span>
                          <div className="d-flex align-items-center justify-content-around text-center" style={{ fontSize: '0.7rem' }}>
                            <div className="small px-2 py-1 bg-white border" style={{ borderRadius: '3px' }}>Vendor Entry</div>
                            <div className="text-muted">→</div>
                            <div className="small px-2 py-1 text-white" style={{ backgroundColor: '#0284c7', borderRadius: '3px' }}>AVS API</div>
                            <div className="text-muted">→</div>
                            <div className="small px-2 py-1 fw-bold" style={{ backgroundColor: '#e0f2fe', color: '#0369a1', borderRadius: '3px' }}>Approved</div>
                          </div>
                        </div>

                        {/* Deployment Scope */}
                        <div className="mb-4 p-3 bg-light rounded-3" style={{ fontSize: '0.8rem', border: '1px solid #e2e8f0' }}>
                          <strong className="d-block mb-1 text-dark">Deployment &amp; Scope:</strong>
                          <p className="text-muted small mb-0" style={{ lineHeight: '1.4' }}>
                            Implemented as a lightweight Python connector service. Bypasses core Yardi configuration changes. Deployment go-live in 2–4 weeks.
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button href="contact.html?product=wire-validation" className="w-100 saas-button-secondary-light py-2.5">
                        Get Started
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>

              {/* Solution 2: Host-to-Host Payments Card */}
              <Col lg={6} id="detail-h2h">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="h-100"
                >
                  <Card className="h-100 saas-card-light-highlight p-4" style={{ borderTop: '4px solid #7c3aed !important' }}>
                    <Card.Body className="p-0 d-flex flex-column justify-content-between h-100">
                      <div>
                        {/* Card Header Badge & Icon */}
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <span className="badge px-3 py-2 text-uppercase saas-badge-light-purple">
                            Treasury Automation
                          </span>
                          <div style={{ color: '#7c3aed', padding: '10px', backgroundColor: 'rgba(124, 58, 237, 0.06)', borderRadius: '12px' }}>
                            <Zap size={24} />
                          </div>
                        </div>

                        {/* Title & Detailed Description */}
                        <h3 className="h4 fw-bold mb-3" style={{ color: '#0f294a' }}>Host-to-Host Payments</h3>
                        <p className="text-muted mb-4" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                          Automate outbound ACH, domestic/international wires, and check disbursements directly from your Yardi environment without intermediate servers or transaction fees.
                        </p>

                        {/* Micro-Metrics Stats Grid */}
                        <div className="p-3 mb-4 bg-light rounded-3" style={{ border: '1px solid #e2e8f0' }}>
                          <Row className="g-2 text-center">
                            <Col xs={12} className="border-bottom pb-2">
                              <span className="fw-bold text-primary d-block" style={{ fontSize: '0.95rem', lineHeight: '1.1' }}>ACH • Wire • Intl • Check</span>
                              <span className="text-muted" style={{ fontSize: '0.65rem' }}>Payment types supported</span>
                            </Col>
                            <Col xs={6} className="border-end pt-2">
                              <span className="fw-bold text-primary d-block" style={{ fontSize: '1.05rem', lineHeight: '1.1' }}>Unlimited</span>
                              <span className="text-muted" style={{ fontSize: '0.65rem' }}>Banks supported</span>
                            </Col>
                            <Col xs={6} className="pt-2">
                              <span className="fw-bold text-primary d-block" style={{ fontSize: '1.05rem', lineHeight: '1.1' }}>~4 weeks</span>
                              <span className="text-muted" style={{ fontSize: '0.65rem' }}>Pre-CAT to Live</span>
                            </Col>
                          </Row>
                        </div>

                        {/* Detailed Bullet Points */}
                        <ul className="list-unstyled mb-4 d-flex flex-column gap-3">
                          <li className="saas-bullet-item-light-mode">
                            <CheckCircle2 size={16} className="saas-bullet-icon-light-mode flex-shrink-0 mt-0.5" style={{ color: '#7c3aed' }} />
                            <span style={{ fontSize: '0.85rem' }}>
                              <strong>Direct Link Integration:</strong> Connects Yardi directly to J.P. Morgan Pay Source, bypassing Kyriba/Yardi BillPay.
                            </span>
                          </li>
                          <li className="saas-bullet-item-light-mode">
                            <CheckCircle2 size={16} className="saas-bullet-icon-light-mode flex-shrink-0 mt-0.5" style={{ color: '#7c3aed' }} />
                            <span style={{ fontSize: '0.85rem' }}>
                              <strong>Bidirectional updates:</strong> Generates pain.001 outbound files and parses pain.002 return status.
                            </span>
                          </li>
                          <li className="saas-bullet-item-light-mode">
                            <CheckCircle2 size={16} className="saas-bullet-icon-light-mode flex-shrink-0 mt-0.5" style={{ color: '#7c3aed' }} />
                            <span style={{ fontSize: '0.85rem' }}>
                              <strong>Financial Optimization:</strong> Replaces $50k+/year Treasury Management subscriptions with a one-time fee.
                            </span>
                          </li>
                        </ul>

                        {/* Integration Diagram */}
                        <div className="p-3 mb-4" style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                          <span className="small text-uppercase fw-bold text-muted d-block mb-3 text-center" style={{ letterSpacing: '0.8px', fontSize: '0.7rem' }}>Data Pipeline</span>
                          <div className="d-flex align-items-center justify-content-around text-center" style={{ fontSize: '0.7rem' }}>
                            <div className="small px-2 py-1 bg-white border" style={{ borderRadius: '3px' }}>Yardi Voyager</div>
                            <div className="text-muted">→</div>
                            <div className="small px-2 py-1 text-white" style={{ backgroundColor: '#0f294a', borderRadius: '3px' }}>PGP SFTP</div>
                            <div className="text-muted">→</div>
                            <div className="small px-2 py-1 text-white" style={{ backgroundColor: '#0284c7', borderRadius: '3px' }}>JPMorgan</div>
                          </div>
                        </div>

                        {/* Timeline & Steps */}
                        <div className="mb-4 p-3 bg-light rounded-3" style={{ fontSize: '0.8rem', border: '1px solid #e2e8f0' }}>
                          <strong className="d-block mb-1 text-dark">Implementation Scope:</strong>
                          <p className="text-muted small mb-0" style={{ lineHeight: '1.4' }}>
                            Pre-CAT (1 week) → CAT Banking Testing (up to 2 weeks) → Production Release (1 week). One-time implementation fee, unlimited bank support.
                          </p>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button href="contact.html?product=h2h-payments" className="w-100 saas-button-primary-light py-2.5" style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%) !important', boxShadow: '0 4px 12px rgba(124, 58, 237, 0.2) !important' }}>
                        Get Started
                      </Button>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>

            </Row>
          </Container>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-6" style={{ padding: '120px 0', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
          <Container>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-5 max-w-2xl mx-auto"
            >
              <span className="badge saas-badge-gray mb-3 px-3 py-2 text-uppercase">
                Testimonials
              </span>
              <h2 className="display-6 fw-bold mt-2" style={{ color: '#0f294a', letterSpacing: '-0.5px' }}>
                What Our Clients Say
              </h2>
            </motion.div>

            <Row className="justify-content-center">
              <Col lg={10}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="saas-testimonial-card text-center text-dark">
                    <p className="saas-testimonial-quote mb-4 text-dark" style={{ fontStyle: 'italic' }}>
                      "LogiPrime Solutions has been an outstanding technology partner. Their expertise in Yardi consulting and payment automation helped streamline our operations and improve efficiency."
                    </p>
                    <div className="saas-testimonial-author">
                      [Client Name Placeholder]
                    </div>
                    <div className="saas-testimonial-meta">
                      [Designation / Job Title] &bull; [Company Name Placeholder]
                    </div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Footer activeLayout={layout} />
    </div>
  );
}
