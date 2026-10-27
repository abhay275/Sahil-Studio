import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark-2)', color: 'var(--text-cream)' }}>
      {/* Top Section */}
      <div className="grid-footer" style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        padding: '80px var(--px) 64px',
        display: 'grid',
        gap: '40px',
      }}>
        {/* Brand */}
        <div className="col-span-2">
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontWeight: 400,
            color: 'var(--text-cream)',
            letterSpacing: '0.01em',
            marginBottom: '6px',
          }}>
            Sahil Studio
          </div>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            fontWeight: 400,
            color: 'var(--gold)',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '24px',
          }}>
            Luxury Wedding Photography
          </div>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '16px',
            color: 'var(--text-cream-muted)',
            lineHeight: 1.8,
            maxWidth: '300px',
            marginBottom: '32px',
          }}>
            Timeless wedding photography & cinematic films — quietly observed, artfully composed, made to last generations.
          </p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { href: 'https://instagram.com', label: 'Instagram', icon: '📷' },
              { href: 'https://youtube.com', label: 'YouTube', icon: '▶' },
              { href: 'https://facebook.com', label: 'Facebook', icon: 'f' },
            ].map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  border: '1px solid var(--border-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  color: 'var(--text-cream-muted)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--gold)';
                  e.currentTarget.style.color = 'var(--gold)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border-dark)';
                  e.currentTarget.style.color = 'var(--text-cream-muted)';
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--text-cream-muted)',
            marginBottom: '20px',
          }}>
            Navigate
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { to: '/portfolio', label: 'Portfolio' },
              { to: '/weddings', label: 'Weddings' },
              { to: '/films', label: 'Films' },
              { to: '/about', label: 'About' },
              { to: '/journal', label: 'Journal' },
              { to: '/contact', label: 'Contact' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  style={{
                    fontSize: '16px',
                    color: 'var(--text-cream-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                    fontFamily: 'var(--font-sans)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-cream-muted)'}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--text-cream-muted)',
            marginBottom: '20px',
          }}>
            Get in Touch
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                WhatsApp
              </div>
              <a href="https://wa.me/919598140898" style={{ fontSize: '16px', color: 'var(--text-cream-muted)', textDecoration: 'none' }}>
                +91 95981 40898
              </a>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                Email
              </div>
              <a href="mailto:sahilstudioknp@gmail.com" style={{ fontSize: '16px', color: 'var(--text-cream-muted)', textDecoration: 'none' }}>
                sahilstudioknp@gmail.com
              </a>
            </div>
            <div>
              <div style={{ fontSize: '12px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                Location
              </div>
              <p style={{ fontSize: '16px', color: 'var(--text-cream-muted)', lineHeight: 1.6 }}>
                Pan-India · Destination Weddings
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border-dark)' }} />

      {/* Bottom Bar */}
      <div style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        padding: '20px var(--px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
      }}>
        <p style={{ fontSize: '13px', color: 'var(--text-cream-muted)', letterSpacing: '0.05em' }}>
          © {new Date().getFullYear()} Sahil Studio. All rights reserved.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--text-cream-muted)', letterSpacing: '0.05em' }}>
          WEDDINGWIRE COUPLES' CHOICE · 2025 &nbsp;·&nbsp; RATED 4.9 · 200+ REVIEWS
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
          footer > div:first-child > div:first-child {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 600px) {
          footer > div:first-child {
            grid-template-columns: 1fr !important;
          }
          footer > div:first-child > div:first-child {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </footer>
  );
}
