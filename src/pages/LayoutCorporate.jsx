import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Shield, Zap, RefreshCw, FileText, CheckCircle2, UserCheck, ArrowRight, Activity, DollarSign, Database, Link, Users } from 'lucide-react';

export default function LayoutCorporate() {
  return (
    <div className="layout-corporate-theme" style={{ backgroundColor: '#ffffff', color: '#1e293b' }}>
      
      {/* Hero Section */}
      <section className="py-5 md-py-6" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)', borderBottom: '1px solid #e2e8f0', position: 'relative', overflow: 'hidden' }}>
        <Container className="py-5">
          <Row className="align-items-center gy-5">
            <Col lg={7}>
              <div className="pe-lg-4">
                <span className="badge mb-3 px-3 py-2 text-uppercase font-weight-bold" style={{ backgroundColor: '#e0f2fe', color: '#0369a1', borderRadius: '4px', fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                  Yardi + J.P. Morgan Integration Specialists
                </span>
                <h1 className="display-4 fw-extrabold mb-3" style={{ color: '#0f294a', lineHeight: '1.2', fontSize: '3rem' }}>
                  Automate Payments. <span style={{ color: '#0284c7' }}>Eliminate AP Fraud.</span>
                </h1>
                <p className="lead mb-4 text-secondary" style={{ fontSize: '1.15rem', lineHeight: '1.6' }}>
                  Secure, native integrations connecting Yardi Voyager directly to J.P. Morgan Chase. Automate wire validation and streamline host-to-host payments without middleware or transaction fees.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Button href="#products" size="lg" style={{ backgroundColor: '#0f294a', borderColor: '#0f294a', borderRadius: '4px', fontSize: '1rem', padding: '12px 28px' }}>
                    Explore Our Solutions
                  </Button>
                  <Button href="contact.html" variant="outline-secondary" size="lg" style={{ borderRadius: '4px', fontSize: '1rem', padding: '12px 28px' }}>
                    Get in Touch
                  </Button>
                </div>
              </div>
            </Col>
            
            <Col lg={5}>
              <div className="d-flex flex-column gap-3 p-3 bg-white border border-light shadow-sm" style={{ borderRadius: '8px' }}>
                <div className="p-3 border rounded-3 bg-light hover-shadow-transition" style={{ borderLeft: '4px solid #0284c7 !important' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 bg-white rounded border text-info"><Shield size={20} /></div>
                    <div>
                      <h5 className="mb-1 text-dark" style={{ fontSize: '1.05rem', fontWeight: '700' }}>JPMorgan AVS Validation</h5>
                      <p className="small text-muted mb-2">Real-time account ownership checks embedded within the Yardi vendor onboarding workflow.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="small fw-bold" style={{ color: '#0284c7' }}>● Status: Secure</span>
                        <span className="small text-muted">&lt; 15 min</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 border rounded-3 bg-light hover-shadow-transition" style={{ borderLeft: '4px solid #0f294a !important' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 bg-white rounded border text-primary"><RefreshCw size={20} /></div>
                    <div>
                      <h5 className="mb-1 text-dark" style={{ fontSize: '1.05rem', fontWeight: '700' }}>Host-to-Host Payments</h5>
                      <p className="small text-muted mb-2">Direct ISO 20022 payments (pain.001/pain.002) run directly from Yardi Core.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="small text-primary fw-bold">● Direct XML H2H</span>
                        <span className="small text-muted">No Middleware</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 border rounded-3 bg-light hover-shadow-transition" style={{ borderLeft: '4px solid #475569 !important' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="p-2 bg-white rounded border text-muted"><FileText size={20} /></div>
                    <div>
                      <h5 className="mb-1 text-dark" style={{ fontSize: '1.05rem', fontWeight: '700' }}>Audit &amp; Security</h5>
                      <p className="small text-muted mb-2">Monitors all transaction modifications and restricts AP risk exposure.</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="small fw-bold text-dark">● Audit Ready</span>
                        <span className="small text-muted">100% Automated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-4" style={{ backgroundColor: '#0f294a', color: '#ffffff' }}>
        <Container>
          <Row className="text-center gy-4 justify-content-between">
            <Col md={3} sm={6}>
              <h3 className="display-6 fw-bold mb-1" style={{ color: '#38bdf8' }}>100%</h3>
              <p className="small text-white-50 m-0 text-uppercase tracking-wider">Wire Fraud Attempts Blocked</p>
            </Col>
            <Col md={3} sm={6} style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }} className="mobile-no-border">
              <h3 className="display-6 fw-bold mb-1" style={{ color: '#38bdf8' }}>Zero</h3>
              <p className="small text-white-50 m-0 text-uppercase tracking-wider">Manual Verification Calls Required</p>
            </Col>
            <Col md={3} sm={6} style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }} className="mobile-no-border">
              <h3 className="display-6 fw-bold mb-1" style={{ color: '#38bdf8' }}>&lt;15 min</h3>
              <p className="small text-white-50 m-0 text-uppercase tracking-wider">Average Validation Turnaround</p>
            </Col>
            <Col md={3} sm={6} style={{ borderLeft: '1px solid rgba(255,255,255,0.1)' }} className="mobile-no-border">
              <h3 className="display-6 fw-bold mb-1" style={{ color: '#38bdf8' }}>$50k+</h3>
              <p className="small text-white-50 m-0 text-uppercase tracking-wider">Saved Annually in Middleware Fees</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products Section */}
      <section id="products" className="py-6" style={{ backgroundColor: '#f8fafc', padding: '100px 0' }}>
        <Container>
          <div className="text-center mb-5 max-w-2xl mx-auto">
            <span className="text-uppercase fw-bold small tracking-wider" style={{ color: '#0284c7' }}>Enterprise Core Products</span>
            <h2 className="display-6 fw-bold mt-2" style={{ color: '#0f294a' }}>Integrations Built for Finance Teams</h2>
            <p className="text-muted" style={{ fontSize: '1.05rem' }}>Deep API-level integrations connecting Yardi Voyager workflows directly to J.P. Morgan services, bypassing costly third-party vendors.</p>
          </div>

          <Row className="g-4 mt-2">
            {/* Product 1: Wire Validation */}
            <Col lg={6}>
              <Card className="h-100 shadow-sm border border-light" style={{ borderRadius: '6px' }}>
                <Card.Body className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="badge px-3 py-2 text-uppercase" style={{ backgroundColor: '#dbeafe', color: '#1e40af', borderRadius: '4px', fontSize: '0.75rem' }}>Fraud Prevention</span>
                      <div className="text-primary"><Shield size={28} /></div>
                    </div>
                    <h3 className="h4 fw-bold mb-3" style={{ color: '#0f294a' }}>Automated Vendor Wire Validation via JPMorgan AVS</h3>
                    <p className="text-muted mb-4" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                      Protect your treasury from Business Email Compromise (BEC) and vendor spoofing. Check account and routing authenticity inside the native vendor onboarding workflow before payments are released.
                    </p>
                    
                    <ul className="list-unstyled mb-4 d-flex flex-column gap-3">
                      <li className="d-flex align-items-start gap-2">
                        <CheckCircle2 size={18} style={{ color: '#0284c7' }} className="mt-1 flex-shrink-0" />
                        <span className="small"><strong style={{ color: '#0f294a' }}>JPMorgan AVS Integration:</strong> Directly queries JPMorgan Chase's Account Validation Service database.</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <CheckCircle2 size={18} style={{ color: '#0284c7' }} className="mt-1 flex-shrink-0" />
                        <span className="small"><strong style={{ color: '#0f294a' }}>Workflow-Native:</strong> Runs inline during Yardi onboarding, automatically routing data for approval or re-entry.</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <CheckCircle2 size={18} style={{ color: '#0284c7' }} className="mt-1 flex-shrink-0" />
                        <span className="small"><strong style={{ color: '#0f294a' }}>Compliance &amp; Insurance:</strong> Supports security compliance and reduces E&amp;O and cyber liability risk.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="p-3 bg-light border mb-4" style={{ borderRadius: '4px' }}>
                      <span className="small text-uppercase fw-bold text-muted d-block mb-3 text-center">Process Workflow</span>
                      <div className="d-flex align-items-center justify-content-around text-center">
                        <div className="small px-2 py-1 bg-white border" style={{ borderRadius: '3px', fontSize: '0.75rem' }}>Vendor Data Entry</div>
                        <div className="text-muted small">→</div>
                        <div className="small px-2 py-1 text-white" style={{ backgroundColor: '#0284c7', borderRadius: '3px', fontSize: '0.75rem' }}>AVS Query</div>
                        <div className="text-muted small">→</div>
                        <div className="small px-2 py-1 fw-bold" style={{ backgroundColor: '#e0f2fe', color: '#0369a1', borderRadius: '3px', fontSize: '0.75rem' }}>Approved</div>
                      </div>
                    </div>

                    <Button href="contact.html?product=wire-validation" className="w-100" style={{ backgroundColor: '#0f294a', borderColor: '#0f294a', borderRadius: '4px' }}>
                      Schedule Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Product 2: Host to Host */}
            <Col lg={6}>
              <Card className="h-100 shadow-sm border border-light" style={{ borderRadius: '6px' }}>
                <Card.Body className="p-4 d-flex flex-column justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <span className="badge px-3 py-2 text-uppercase" style={{ backgroundColor: '#dbeafe', color: '#1e40af', borderRadius: '4px', fontSize: '0.75rem' }}>Payments Automation</span>
                      <div className="text-primary"><Zap size={28} /></div>
                    </div>
                    <h3 className="h4 fw-bold mb-3" style={{ color: '#0f294a' }}>Yardi to J.P. Morgan Host-to-Host Payments</h3>
                    <p className="text-muted mb-4" style={{ fontSize: '0.92rem', lineHeight: '1.6' }}>
                      Automate outbound ACH, domestic/international wires, and check disbursements directly from your Yardi environment without intermediate servers or transaction fees.
                    </p>
                    
                    <ul className="list-unstyled mb-4 d-flex flex-column gap-3">
                      <li className="d-flex align-items-start gap-2">
                        <CheckCircle2 size={18} style={{ color: '#0284c7' }} className="mt-1 flex-shrink-0" />
                        <span className="small"><strong style={{ color: '#0f294a' }}>ISO 20022 Standardized:</strong> Automatically generates pain.001 files and ingests pain.002 status files.</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <CheckCircle2 size={18} style={{ color: '#0284c7' }} className="mt-1 flex-shrink-0" />
                        <span className="small"><strong style={{ color: '#0f294a' }}>No Middleware:</strong> Connects the Yardi file server directly to J.P. Morgan Pay Source over PGP-encrypted SFTP.</span>
                      </li>
                      <li className="d-flex align-items-start gap-2">
                        <CheckCircle2 size={18} style={{ color: '#0284c7' }} className="mt-1 flex-shrink-0" />
                        <span className="small"><strong style={{ color: '#0f294a' }}>Cost Savings:</strong> Replaces Treasury Management System (TMS) subscriptions, saving $50k+ annually.</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="p-3 bg-light border mb-4" style={{ borderRadius: '4px' }}>
                      <span className="small text-uppercase fw-bold text-muted d-block mb-3 text-center">Process Workflow</span>
                      <div className="d-flex align-items-center justify-content-around text-center">
                        <div className="small px-2 py-1 bg-white border" style={{ borderRadius: '3px', fontSize: '0.75rem' }}>Yardi Voyager</div>
                        <div className="text-muted small">→</div>
                        <div className="small px-2 py-1 text-white" style={{ backgroundColor: '#0f294a', borderRadius: '3px', fontSize: '0.75rem' }}>Secure SFTP</div>
                        <div className="text-muted small">→</div>
                        <div className="small px-2 py-1 text-white" style={{ backgroundColor: '#0284c7', borderRadius: '3px', fontSize: '0.75rem' }}>J.P. Morgan</div>
                      </div>
                    </div>

                    <Button href="contact.html?product=h2h-payments" className="w-100" style={{ backgroundColor: '#0f294a', borderColor: '#0f294a', borderRadius: '4px' }}>
                      Schedule Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section id="yardi-services" className="py-6" style={{ padding: '100px 0' }}>
        <Container>
          <div className="text-center mb-5 max-w-2xl mx-auto">
            <span className="text-uppercase fw-bold small tracking-wider" style={{ color: '#0284c7' }}>Enterprise Professional Services</span>
            <h2 className="display-6 fw-bold mt-2" style={{ color: '#0f294a' }}>Professional Yardi Consulting &amp; Custom Solutions</h2>
            <p className="text-muted">Comprehensive configuration, custom programming, external API integrations, and dedicated support for your property management workflows.</p>
          </div>

          <Row className="g-4 mt-2">
            {/* Service 1 */}
            <Col md={6} lg={3}>
              <Card className="h-100 border border-light shadow-sm text-center p-3" style={{ borderRadius: '6px' }}>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <div className="p-3 text-primary d-inline-block rounded-circle bg-light mb-3"><Users size={24} /></div>
                    <h4 className="h5 fw-bold mb-3 text-dark">Yardi Consulting</h4>
                    <p className="text-muted small" style={{ lineHeight: '1.6' }}>Strategic advice, system configuration, module setup, and deployment (Voyager, Job Cost, Fixed Assets, and more). We align your platform configurations with best practice workflows.</p>
                  </div>
                  <a href="contact.html?product=yardi-consulting" className="btn btn-link text-decoration-none fw-bold mt-3 d-flex align-items-center justify-content-center gap-1 small" style={{ color: '#0f294a' }}>
                    Learn More <ArrowRight size={14} />
                  </a>
                </Card.Body>
              </Card>
            </Col>

            {/* Service 2 */}
            <Col md={6} lg={3}>
              <Card className="h-100 border border-light shadow-sm text-center p-3" style={{ borderRadius: '6px' }}>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <div className="p-3 text-primary d-inline-block rounded-circle bg-light mb-3"><Database size={24} /></div>
                    <h4 className="h5 fw-bold mb-3 text-dark">Yardi Custom Reporting</h4>
                    <p className="text-muted small" style={{ lineHeight: '1.6' }}>Tailor-made financial and operational reporting. We build advanced custom reports using Yardi Spreadsheet Reporting (YSR), SQL Server Reporting Services (SSRS), and high-performance stored procedures.</p>
                  </div>
                  <a href="contact.html?product=yardi-consulting" className="btn btn-link text-decoration-none fw-bold mt-3 d-flex align-items-center justify-content-center gap-1 small" style={{ color: '#0f294a' }}>
                    Learn More <ArrowRight size={14} />
                  </a>
                </Card.Body>
              </Card>
            </Col>

            {/* Service 3 */}
            <Col md={6} lg={3}>
              <Card className="h-100 border border-light shadow-sm text-center p-3" style={{ borderRadius: '6px' }}>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <div className="p-3 text-primary d-inline-block rounded-circle bg-light mb-3"><Link size={24} /></div>
                    <h4 className="h5 fw-bold mb-3 text-dark" style={{ fontSize: '0.98rem' }}>Building Custom Interfaces</h4>
                    <p className="text-muted small" style={{ lineHeight: '1.6' }}>Seamless integration between Yardi Voyager and third-party systems like SAP Concur. We eliminate duplicate entries by automating corporate expense reconciliations, CRM syncing, and utility billing.</p>
                  </div>
                  <a href="contact.html?product=yardi-interfaces" className="btn btn-link text-decoration-none fw-bold mt-3 d-flex align-items-center justify-content-center gap-1 small" style={{ color: '#0f294a' }}>
                    Learn More <ArrowRight size={14} />
                  </a>
                </Card.Body>
              </Card>
            </Col>

            {/* Service 4 */}
            <Col md={6} lg={3}>
              <Card className="h-100 border border-light shadow-sm text-center p-3" style={{ borderRadius: '6px' }}>
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <div className="p-3 text-primary d-inline-block rounded-circle bg-light mb-3"><Activity size={24} /></div>
                    <h4 className="h5 fw-bold mb-3 text-dark">Regular Yardi Support</h4>
                    <p className="text-muted small" style={{ lineHeight: '1.6' }}>Continuous helpdesk support, environment administration, user access management, troubleshooting validation issues, database health reviews, and custom settings adjustment.</p>
                  </div>
                  <a href="contact.html?product=yardi-support" className="btn btn-link text-decoration-none fw-bold mt-3 d-flex align-items-center justify-content-center gap-1 small" style={{ color: '#0f294a' }}>
                    Learn More <ArrowRight size={14} />
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section id="call-to-action" className="py-6" style={{ background: '#0a192f', color: '#ffffff', padding: '80px 0' }}>
        <Container>
          <div className="p-5 text-center" style={{ backgroundColor: '#0f294a', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <h2 className="display-6 fw-bold mb-3">Ready to Secure &amp; Automate Your Payments?</h2>
            <p className="lead mb-4 text-white-50 mx-auto" style={{ maxWidth: '700px', fontSize: '1.05rem' }}>
              Talk to our integration experts. Schedule a live product demo in our Yardi sandbox environment to see our automated validation in action.
            </p>
            <Button href="contact.html" size="lg" style={{ backgroundColor: '#0284c7', borderColor: '#0284c7', borderRadius: '4px', padding: '12px 30px' }}>
              Book a Consultation
            </Button>
          </div>
        </Container>
      </section>
      
      <style>{`
        .py-6 { padding: 90px 0; }
        .mobile-no-border {
          border-left: 1px solid rgba(255,255,255,0.1);
        }
        @media (max-width: 767.98px) {
          .mobile-no-border {
            border-left: none !important;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 20px;
          }
        }
        .hover-shadow-transition {
          transition: all 0.2s ease;
        }
        .hover-shadow-transition:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
}
