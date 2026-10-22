import React, { useState } from 'react';
import { useInquiry } from '../context/InquiryContext';

export default function InquiryModal() {
  const { isOpen, closeInquiry } = useInquiry();
  const [form, setForm] = useState({
    name: '', email: '', phone: '', weddingDate: '',
    venue: '', guests: '', package: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(10,8,6,0.85)',
      backdropFilter: 'blur(10px)',
      padding: '40px 20px',
      overflowY: 'auto'
    }}>
      <div style={{
        position: 'relative',
        background: 'var(--bg-cream)',
        width: '100%',
        maxWidth: '1100px',
        margin: 'auto',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      }}>
        {/* Close Button */}
        <button
          onClick={closeInquiry}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '40px',
            height: '40px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            color: 'var(--text-dark)',
            zIndex: 10,
          }}
        >
          ×
        </button>

        <div style={{ padding: '60px 48px' }}>
          <div className="grid-contact" style={{
            gap: '48px',
          }}>
            {/* Form */}
            <div>
              {submitted ? (
                <div style={{
                  padding: '64px 48px',
                  border: '1px solid var(--border-light)',
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <div style={{ width: '48px', height: '1px', background: 'var(--gold)', margin: '0 auto 32px' }} />
                  <h2 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '36px',
                    fontWeight: 400,
                    color: 'var(--text-dark)',
                    marginBottom: '16px',
                  }}>
                    Thank you, {form.name.split(' ')[0]}
                  </h2>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', color: 'var(--text-medium)', lineHeight: 1.8 }}>
                    We've received your inquiry and will be in touch within 48 hours. In the meantime, you're welcome to browse our portfolio.
                  </p>
                  <button
                    onClick={closeInquiry}
                    style={{
                      marginTop: '32px',
                      padding: '12px 32px',
                      background: 'transparent',
                      border: '1px solid var(--gold)',
                      color: 'var(--gold)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      cursor: 'pointer'
                    }}
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid-2" style={{ gap: '24px', marginBottom: '24px' }}>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-light)', marginBottom: '8px' }}>
                        Your Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Full name"
                        style={{
                          width: '100%', padding: '13px 0',
                          background: 'transparent',
                          border: 'none', borderBottom: '1px solid var(--border-light)',
                          fontFamily: 'var(--font-sans)', fontSize: '15px',
                          color: 'var(--text-dark)', outline: 'none',
                          transition: 'border-color 0.3s ease',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-light)', marginBottom: '8px' }}>
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        style={{
                          width: '100%', padding: '13px 0',
                          background: 'transparent',
                          border: 'none', borderBottom: '1px solid var(--border-light)',
                          fontFamily: 'var(--font-sans)', fontSize: '15px',
                          color: 'var(--text-dark)', outline: 'none',
                          transition: 'border-color 0.3s ease',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-light)', marginBottom: '8px' }}>
                        Phone / WhatsApp
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 00000 00000"
                        style={{
                          width: '100%', padding: '13px 0',
                          background: 'transparent',
                          border: 'none', borderBottom: '1px solid var(--border-light)',
                          fontFamily: 'var(--font-sans)', fontSize: '15px',
                          color: 'var(--text-dark)', outline: 'none',
                          transition: 'border-color 0.3s ease',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-light)', marginBottom: '8px' }}>
                        Wedding Date
                      </label>
                      <input
                        name="weddingDate"
                        type="date"
                        value={form.weddingDate}
                        onChange={handleChange}
                        style={{
                          width: '100%', padding: '13px 0',
                          background: 'transparent',
                          border: 'none', borderBottom: '1px solid var(--border-light)',
                          fontFamily: 'var(--font-sans)', fontSize: '15px',
                          color: 'var(--text-dark)', outline: 'none',
                          transition: 'border-color 0.3s ease',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-light)', marginBottom: '8px' }}>
                        Venue / Location
                      </label>
                      <input
                        name="venue"
                        value={form.venue}
                        onChange={handleChange}
                        placeholder="City or venue name"
                        style={{
                          width: '100%', padding: '13px 0',
                          background: 'transparent',
                          border: 'none', borderBottom: '1px solid var(--border-light)',
                          fontFamily: 'var(--font-sans)', fontSize: '15px',
                          color: 'var(--text-dark)', outline: 'none',
                          transition: 'border-color 0.3s ease',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-light)', marginBottom: '8px' }}>
                        Service Interested In
                      </label>
                      <select
                        name="package"
                        value={form.package}
                        onChange={handleChange}
                        style={{
                          width: '100%', padding: '13px 0',
                          background: 'transparent',
                          border: 'none', borderBottom: '1px solid var(--border-light)',
                          fontFamily: 'var(--font-sans)', fontSize: '15px',
                          color: form.package ? 'var(--text-dark)' : 'var(--text-light)',
                          outline: 'none',
                          transition: 'border-color 0.3s ease',
                          cursor: 'pointer',
                        }}
                        onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                        onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                      >
                        <option value="">Select a service</option>
                        <option value="photography">Wedding Photography</option>
                        <option value="cinematography">Wedding Cinematography</option>
                        <option value="both">Photography + Cinematography</option>
                        <option value="prewedding">Pre-Wedding Shoot</option>
                        <option value="destination">Destination Wedding</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '36px' }}>
                    <label style={{ display: 'block', fontFamily: 'var(--font-sans)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-light)', marginBottom: '8px' }}>
                      Tell Us About Your Wedding
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Share anything that would help us understand your vision..."
                      style={{
                        width: '100%', padding: '13px 0',
                        background: 'transparent',
                        border: 'none', borderBottom: '1px solid var(--border-light)',
                        fontFamily: 'var(--font-sans)', fontSize: '15px',
                        color: 'var(--text-dark)', outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border-light)'}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      padding: '15px 48px',
                      background: 'var(--gold)',
                      color: 'var(--bg-dark)',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease',
                    }}
                  >
                    Send Inquiry →
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div style={{ marginBottom: '48px' }}>
                <div style={{
                  fontSize: '10px', textTransform: 'uppercase',
                  letterSpacing: '0.2em', color: 'var(--gold)',
                  fontFamily: 'var(--font-sans)', marginBottom: '16px',
                }}>
                  Or Reach Us Directly
                </div>
                <a
                  href="https://wa.me/919335280514"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px 20px',
                    background: '#25D366',
                    color: 'white',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    marginBottom: '12px',
                    transition: 'opacity 0.3s ease',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <a
                  href="tel:+919335280514"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px 20px',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-dark)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <span>📞</span>
                  +91 93352 80514
                </a>
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '32px', marginBottom: '32px' }}>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', fontFamily: 'var(--font-sans)', marginBottom: '16px' }}>
                  What Happens Next
                </div>
                {[
                  { num: '01', text: 'We review your inquiry and check date availability' },
                  { num: '02', text: 'We reach out within 48 hours to schedule a consultation call' },
                  { num: '03', text: 'We walk you through our approach, packages and pricing' },
                  { num: '04', text: 'On agreement, we confirm your date with a booking fee' },
                ].map(({ num, text }) => (
                  <div key={num} style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                    <div style={{
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      fontSize: '14px',
                      color: 'var(--gold)',
                      minWidth: '24px',
                    }}>{num}</div>
                    <div style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '14px',
                      color: 'var(--text-medium)',
                      lineHeight: 1.6,
                    }}>{text}</div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '32px' }}>
                <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', fontFamily: 'var(--font-sans)', marginBottom: '12px' }}>
                  Email
                </div>
                <a href="mailto:sahilstudioknp@gmail.com" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-medium)', textDecoration: 'none' }}>
                  sahilstudioknp@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
