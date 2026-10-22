import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useInquiry } from '../context/InquiryContext';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { openInquiry } = useInquiry();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(26,24,20,0.8)' : 'rgba(26,24,20,0.5)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        height: 'var(--nav-h)',
        transition: 'background 0.4s ease',
      }}>
        <div style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          padding: '0 var(--px)',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', lineHeight: 1 }}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '22px',
              fontWeight: 400,
              color: 'var(--text-cream)',
              letterSpacing: '0.02em',
            }}>
              Sahil Studio
            </div>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '9px',
              fontWeight: 400,
              color: 'var(--text-cream-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginTop: '3px',
            }}>
              Luxury Wedding Photography
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }} className="desktop-nav">
            {[
              { to: '/portfolio', label: 'Portfolio' },
              { to: '/weddings', label: 'Weddings' },
              { to: '/films', label: 'Films' },
              { to: '/about', label: 'About' },
              { to: '/journal', label: 'Journal' },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  letterSpacing: '0.16em',
                  color: isActive ? 'var(--gold)' : 'var(--text-cream-muted)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                })}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={openInquiry}
            className="desktop-cta"
            style={{
              background: 'transparent',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 500,
              textTransform: 'uppercase',
              letterSpacing: '0.16em',
              color: 'var(--text-cream)',
              padding: '10px 22px',
              border: '1px solid rgba(255,255,255,0.35)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(196,165,90,0.2)';
              e.currentTarget.style.borderColor = 'var(--gold)';
              e.currentTarget.style.color = 'var(--gold)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
              e.currentTarget.style.color = 'var(--text-cream)';
            }}
          >
            Begin Your Inquiry
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: '5px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
            }}
            aria-label="Toggle menu"
          >
            <span style={{ width: 22, height: 1, background: 'var(--text-cream)', display: 'block', transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
            <span style={{ width: 22, height: 1, background: 'var(--text-cream)', display: 'block', transition: 'all 0.3s ease', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 22, height: 1, background: 'var(--text-cream)', display: 'block', transition: 'all 0.3s ease', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'var(--bg-dark)',
        zIndex: 99,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px',
        transition: 'opacity 0.4s ease, visibility 0.4s ease',
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? 'visible' : 'hidden',
      }}>
        {[
          { to: '/', label: 'Home' },
          { to: '/portfolio', label: 'Portfolio' },
          { to: '/weddings', label: 'Weddings' },
          { to: '/films', label: 'Films' },
          { to: '/about', label: 'About' },
          { to: '/journal', label: 'Journal' },
          { to: '/contact', label: 'Contact' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '36px',
              fontWeight: 400,
              color: 'var(--text-cream)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
              transition: 'color 0.3s ease',
            }}
          >
            {label}
          </Link>
        ))}
        <button
          onClick={() => {
            setMenuOpen(false);
            openInquiry();
          }}
          className="btn btn-gold"
          style={{ 
            marginTop: '16px',
            border: 'none',
            background: 'var(--gold)',
            color: 'var(--bg-dark)',
            cursor: 'pointer',
            padding: '15px 48px',
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.15em'
          }}
        >
          Begin Your Inquiry →
        </button>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
