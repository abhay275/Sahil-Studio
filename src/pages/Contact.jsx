import { useState } from 'react';

const HEADER_BG = 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=1800&q=80&fit=crop';

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', weddingDate: '',
    venue: '', guests: '', package: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--bg-cream)' }}>
      {/* Header */}
      <div style={{
        position: 'relative',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${HEADER_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(10,8,6,0.65)',
        }} />
        <div style={{
          position: 'relative',
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          padding: 'calc(var(--nav-h) + 60px) var(--px) 72px',
          width: '100%',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}>
              Begin Your Inquiry
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 400,
            color: 'var(--text-cream)',
            lineHeight: 1.05,
            maxWidth: '560px',
          }}>
            Let's talk about<br />
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>your wedding</span>
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section style={{ background: 'var(--bg-cream)', padding: '72px var(--px) 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '16px',
            color: 'var(--text-medium)',
            lineHeight: 1.85,
          }}>
            We work with a limited number of couples each season, so every family we photograph receives our complete attention. Fill in the form below and we will be in touch within 48 hours.
          </p>
          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', margin: '32px auto 0' }} />
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '72px var(--px) 120px' }}>
        <div className="grid-contact" style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          gap: '48px',
        }}>
          {/* Form */}
          <div>
            {submitted ? (
              <div style={{
                padding: '64px 48px',
                border: '1px solid var(--border-light)',
                textAlign: 'center',
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
            <div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 32px)' }}>
              <div style={{ marginBottom: '48px' }}>
                <div style={{
                  fontSize: '10px', textTransform: 'uppercase',
                  letterSpacing: '0.2em', color: 'var(--gold)',
                  fontFamily: 'var(--font-sans)', marginBottom: '16px',
                }}>
                  Or Reach Us Directly
                </div>
                <a
                  href="https://wa.me/919598140898"
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
                  href="tel:+919598140898"
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
                  +91 95981 40898
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
      </section>
    </div>
  );
}
