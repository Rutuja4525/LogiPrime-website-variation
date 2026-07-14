import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { User, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  const layout = 'corporate';

  const handleLayoutChange = (newLayout) => {
    // Layout is locked to corporate as requested
  };

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('');
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    document.body.className = `layout-corporate`;

    // Read query parameter '?product=' to pre-fill the dropdown
    const params = new URLSearchParams(window.location.search);
    const selectedProd = params.get('product') || params.get('selected');
    if (selectedProd) {
      setProduct(selectedProd);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !company || !product || !message) {
      setFormStatus({
        type: 'danger',
        message: 'Please fill out all required fields marked with an asterisk (*).'
      });
      return;
    }

    const getProductLabel = (key) => {
      switch (key) {
        case 'wire-validation': return 'Automated Vendor Wire Validation (J.P. Morgan AVS)';
        case 'h2h-payments': return 'Yardi to J.P. Morgan Host-to-Host Payments';
        case 'yardi-consulting': return 'Yardi Consulting & Custom Reporting';
        case 'yardi-interfaces': return 'Custom Interfaces (e.g., Concur integration)';
        case 'yardi-support': return 'Regular Yardi Support & Maintenance';
        case 'both': return 'Multiple Solutions';
        case 'other': return 'General Inquiry';
        default: return key;
      }
    };

    const mailtoSubject = `Consultation Request - ${getProductLabel(product)}`;
    const mailtoBody = `Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone || 'N/A'}
Product/Service Interest: ${getProductLabel(product)}

Message/Consultation Details:
${message}`;

    const mailtoLink = `mailto:avinash@logiprime.net?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
    window.location.href = mailtoLink;

    // Success simulation
    setFormStatus({
      type: 'success',
      message: 'Thank you! Your email client has been opened to send your request to avinash@logiprime.net. If the window did not open, you can email us directly.'
    });

    // Clear form fields
    setName('');
    setEmail('');
    setCompany('');
    setPhone('');
    setProduct('');
    setMessage('');
  };

  const isDark = false;

  const getContactHeroStyle = () => {
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

      <main className="contact-content">
        {/* Contact Hero */}
        <section style={getContactHeroStyle()} className="contact-hero-section">
          <Container>
            <span className="text-uppercase fw-bold tracking-wider mb-2 d-block" style={{ 
              fontSize: '0.75rem', 
              color: layout === 'tech' ? '#f472b6' : layout === 'minimalist' ? '#2a4b3d' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0284c7' 
            }}>
              Let's Connect
            </span>
            <h1 className="display-4 fw-bold mb-3" style={{ 
              fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit',
              letterSpacing: layout === 'minimalist' ? '0' : '-1px'
            }}>
              Connect With Our Integration Experts
            </h1>
            <p className="lead mb-0" style={{ maxWidth: '750px', fontSize: '1.1rem', lineHeight: '1.6', fontWeight: '300', color: isDark ? '#cbd5e1' : '#64748b' }}>
              Ready to secure your Yardi AP workflow or eliminate treasury middleware fees? Let's discuss your requirements. We can schedule a live demonstration in our sandbox environment.
            </p>
          </Container>
        </section>

        {/* Contact Info and Form Grid */}
        <section className="py-5" style={{ backgroundColor: layout === 'purple' ? '#faf9ff' : isDark ? '#0b0d19' : '#ffffff', color: isDark ? '#f1f5f9' : '#1e293b' }}>
          <Container className="py-4">
            <Row className="gy-5">
              
              {/* Contact Information Panel */}
              <Col lg={5}>
                <div className="pe-lg-4">
                  <h2 className="h3 fw-bold mb-4" style={{ 
                    fontFamily: layout === 'minimalist' ? 'var(--font-serif)' : 'inherit',
                    color: layout === 'minimalist' ? '#1c1c1c' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0f294a'
                  }}>
                    Contact Information
                  </h2>
                  <p className="small mb-5" style={{ color: isDark ? '#94a3b8' : '#64748b' }}>Have custom specifications or looking to get set up with JPMorgan integration? Reach out to us directly through the options below.</p>

                  <div className="d-flex flex-column gap-4">
                    {/* Item 1 */}
                    <div className="d-flex align-items-start gap-3">
                      <div className="p-2.5 rounded-3 text-info bg-light-soft" style={{ 
                        backgroundColor: layout === 'tech' ? 'rgba(14,165,233,0.1)' : layout === 'fintech' ? 'rgba(0, 242, 254, 0.1)' : layout === 'purple' ? 'rgba(124, 58, 237, 0.08)' : 'rgba(15,41,74,0.05)',
                        color: layout === 'tech' ? '#0ea5e9' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0f294a'
                      }}>
                        <User size={20} />
                      </div>
                      <div>
                        <h4 className="h6 fw-bold mb-1" style={{ color: isDark ? '#ffffff' : '#1e1b4b' }}>Contact Person</h4>
                        <p className="small mb-0" style={{ color: isDark ? '#cbd5e1' : '#475569' }}>Avinash Shivani</p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="d-flex align-items-start gap-3">
                      <div className="p-2.5 rounded-3 text-success bg-light-soft" style={{ 
                        backgroundColor: layout === 'tech' ? 'rgba(52,211,153,0.1)' : layout === 'fintech' ? 'rgba(57, 255, 20, 0.1)' : layout === 'purple' ? 'rgba(219, 39, 119, 0.08)' : 'rgba(15,41,74,0.05)',
                        color: layout === 'tech' ? '#34d399' : layout === 'fintech' ? '#39ff14' : layout === 'purple' ? '#db2777' : '#0f294a'
                      }}>
                        <Phone size={20} />
                      </div>
                      <div>
                        <h4 className="h6 fw-bold mb-1" style={{ color: isDark ? '#ffffff' : '#1e1b4b' }}>Direct Line</h4>
                        <p className="small mb-0" style={{ color: isDark ? '#cbd5e1' : '#475569' }}>+971 502079768</p>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="d-flex align-items-start gap-3">
                      <div className="p-2.5 rounded-3 text-primary bg-light-soft" style={{ 
                        backgroundColor: layout === 'tech' ? 'rgba(167,139,250,0.1)' : layout === 'fintech' ? 'rgba(192, 132, 252, 0.1)' : layout === 'purple' ? 'rgba(124, 58, 237, 0.08)' : 'rgba(15,41,74,0.05)',
                        color: layout === 'tech' ? '#a78bfa' : layout === 'fintech' ? '#c084fc' : layout === 'purple' ? '#7c3aed' : '#0f294a'
                      }}>
                        <Mail size={20} />
                      </div>
                      <div>
                        <h4 className="h6 fw-bold mb-1" style={{ color: isDark ? '#ffffff' : '#1e1b4b' }}>Email Inquiries</h4>
                        <p className="small mb-0" style={{ color: isDark ? '#cbd5e1' : '#475569' }}>avinash@logiprime.net</p>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="d-flex align-items-start gap-3">
                      <div className="p-2.5 rounded-3 text-warning bg-light-soft" style={{ 
                        backgroundColor: layout === 'tech' ? 'rgba(251,191,36,0.1)' : layout === 'fintech' ? 'rgba(251, 191, 36, 0.1)' : layout === 'purple' ? 'rgba(245, 158, 11, 0.08)' : 'rgba(15,41,74,0.05)',
                        color: layout === 'tech' ? '#fbbf24' : layout === 'fintech' ? '#fbbf24' : layout === 'purple' ? '#d97706' : '#0f294a'
                      }}>
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="h6 fw-bold mb-1" style={{ color: isDark ? '#ffffff' : '#1e1b4b' }}>Headquarters</h4>
                        <p className="small mb-0" style={{ color: isDark ? '#cbd5e1' : '#475569', lineHeight: '1.6' }}>
                          63351-001, IFZA property FZCO, Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai, United Arab Emirates
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Form Panel */}
              <Col lg={7}>
                <div className={`p-4 ${layout === 'tech' ? 'glass-panel' : 'bg-light'} border`} style={{ 
                  borderRadius: layout === 'minimalist' ? '0' : '16px',
                  backgroundColor: layout === 'fintech' ? '#090d16' : layout === 'purple' ? '#ffffff' : '',
                  borderColor: layout === 'fintech' ? 'rgba(0, 242, 254, 0.2)' : layout === 'purple' ? 'rgba(124, 58, 237, 0.15)' : ''
                }}>
                  {formStatus.message && (
                    <Alert variant={formStatus.type} className="mb-4">
                      {formStatus.message}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row className="gy-3 mb-3">
                      <Col md={6}>
                        <Form.Group controlId="formName">
                          <Form.Label className="small font-weight-bold" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>Full Name *</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Jane Doe" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            className={layout === 'minimalist' ? 'rounded-0 border-dark' : ''} 
                            style={{ 
                              backgroundColor: layout === 'purple' ? '#ffffff' : isDark ? '#05070f' : '', 
                              color: layout === 'purple' ? '#1e1b4b' : isDark ? '#ffffff' : '',
                              borderColor: layout === 'purple' ? '#dbd6fc' : isDark ? 'rgba(255,255,255,0.1)' : ''
                            }}
                            required 
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formEmail">
                          <Form.Label className="small font-weight-bold" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>Corporate Email *</Form.Label>
                          <Form.Control 
                            type="email" 
                            placeholder="jane@company.com" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className={layout === 'minimalist' ? 'rounded-0 border-dark' : ''} 
                            style={{ 
                              backgroundColor: layout === 'purple' ? '#ffffff' : isDark ? '#05070f' : '', 
                              color: layout === 'purple' ? '#1e1b4b' : isDark ? '#ffffff' : '',
                              borderColor: layout === 'purple' ? '#dbd6fc' : isDark ? 'rgba(255,255,255,0.1)' : ''
                            }}
                            required 
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row className="gy-3 mb-3">
                      <Col md={6}>
                        <Form.Group controlId="formCompany">
                          <Form.Label className="small font-weight-bold" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>Company Name *</Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Enterprise Realty" 
                            value={company} 
                            onChange={(e) => setCompany(e.target.value)} 
                            className={layout === 'minimalist' ? 'rounded-0 border-dark' : ''} 
                            style={{ 
                              backgroundColor: layout === 'purple' ? '#ffffff' : isDark ? '#05070f' : '', 
                              color: layout === 'purple' ? '#1e1b4b' : isDark ? '#ffffff' : '',
                              borderColor: layout === 'purple' ? '#dbd6fc' : isDark ? 'rgba(255,255,255,0.1)' : ''
                            }}
                            required 
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formPhone">
                          <Form.Label className="small font-weight-bold" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>Phone Number</Form.Label>
                          <Form.Control 
                            type="tel" 
                            placeholder="(555) 000-0000" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            className={layout === 'minimalist' ? 'rounded-0 border-dark' : ''} 
                            style={{ 
                              backgroundColor: layout === 'purple' ? '#ffffff' : isDark ? '#05070f' : '', 
                              color: layout === 'purple' ? '#1e1b4b' : isDark ? '#ffffff' : '',
                              borderColor: layout === 'purple' ? '#dbd6fc' : isDark ? 'rgba(255,255,255,0.1)' : ''
                            }}
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group controlId="formProduct" className="mb-3">
                      <Form.Label className="small font-weight-bold" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>Product / Service Interest *</Form.Label>
                      <Form.Select 
                        value={product} 
                        onChange={(e) => setProduct(e.target.value)} 
                        className={layout === 'minimalist' ? 'rounded-0 border-dark' : ''} 
                        style={{ 
                          backgroundColor: layout === 'purple' ? '#ffffff' : isDark ? '#05070f' : '', 
                          color: layout === 'purple' ? '#1e1b4b' : isDark ? '#ffffff' : '',
                          borderColor: layout === 'purple' ? '#dbd6fc' : isDark ? 'rgba(255,255,255,0.1)' : ''
                        }}
                        required
                      >
                        <option value="" disabled>Select an option...</option>
                        <option value="wire-validation">Automated Vendor Wire Validation (J.P. Morgan AVS)</option>
                        <option value="h2h-payments">Yardi to J.P. Morgan Host-to-Host Payments</option>
                        <option value="yardi-consulting">Yardi Consulting &amp; Custom Reporting</option>
                        <option value="yardi-interfaces">Custom Interfaces (e.g., Concur integration)</option>
                        <option value="yardi-support">Regular Yardi Support &amp; Maintenance</option>
                        <option value="both">Multiple Solutions</option>
                        <option value="other">General Inquiry</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="formMessage" className="mb-4">
                      <Form.Label className="small font-weight-bold" style={{ color: isDark ? '#cbd5e1' : '#4a5568' }}>Message / Consultation Details *</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={4} 
                        placeholder="Please outline your current Yardi configuration and banking requirements..." 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        className={layout === 'minimalist' ? 'rounded-0 border-dark' : ''} 
                        style={{ 
                          backgroundColor: layout === 'purple' ? '#ffffff' : isDark ? '#05070f' : '', 
                          color: layout === 'purple' ? '#1e1b4b' : isDark ? '#ffffff' : '',
                          borderColor: layout === 'purple' ? '#dbd6fc' : isDark ? 'rgba(255,255,255,0.1)' : ''
                        }}
                        required 
                      />
                    </Form.Group>

                    <Button 
                      type="submit" 
                      className={`w-100 py-3 ${layout === 'minimalist' ? 'rounded-0' : ''}`}
                      style={{ 
                        backgroundColor: layout === 'tech' ? '#7000ff' : layout === 'minimalist' ? '#1c1c1c' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0f294a', 
                        borderColor: layout === 'tech' ? '#7000ff' : layout === 'minimalist' ? '#1c1c1c' : layout === 'fintech' ? '#00f2fe' : layout === 'purple' ? '#7c3aed' : '#0f294a',
                        color: layout === 'fintech' ? '#05070f' : 'white',
                        fontWeight: '600',
                        fontSize: '0.95rem'
                      }}
                    >
                      Request Consultation
                    </Button>
                  </Form>
                </div>
              </Col>

            </Row>
          </Container>
        </section>
      </main>

      <Footer activeLayout={layout} />
    </div>
  );
}
