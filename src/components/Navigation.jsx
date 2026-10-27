import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useInquiry } from '../context/InquiryContext';
import './Navigation.css';

// ─── Refined Native-App Style Vector Icons ───────────────────────────────────
function HomeIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={active ? '1.8' : '1.5'} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.5z" />
    </svg>
  );
}

function PortfolioIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? '1.8' : '1.5'} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" fill={active ? 'currentColor' : 'none'} />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  );
}

function ServicesIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? '1.8' : '1.5'} strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" fill={active ? 'currentColor' : 'none'} />
    </svg>
  );
}

function ContactIcon({ active }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={active ? 'rgba(198,166,107,0.18)' : 'none'} stroke="currentColor" strokeWidth={active ? '1.8' : '1.5'} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openInquiry } = useInquiry();

  // Handle scroll effect for desktop header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to check active state for portfolio sub-routes
  const isPortfolioActive = location.pathname.startsWith('/portfolio');

  return (
    <>
      {/* ── 1. DESKTOP NAVIGATION (PC and Laptop) ─────────────────────────── */}
      <header className={`desktop-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="desktop-nav-container">
          {/* Logo on the left */}
          <Link to="/" className="nav-brand-link" aria-label="Sahil Studio Home">
            <img src="/favicon.svg" alt="" className="nav-brand-logo" />
            <div className="nav-brand-text">
              <span className="nav-brand-title">Sahil Studio</span>
              <span className="nav-brand-subtitle">Luxury Wedding Photography</span>
            </div>
          </Link>

          {/* Desktop Links on the right: Home, Portfolio, Services, About, Contact */}
          <nav className="desktop-nav-menu" aria-label="Main Navigation">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `desktop-nav-link ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>

            <NavLink
              to="/portfolio"
              className={`desktop-nav-link ${isPortfolioActive ? 'active' : ''}`}
            >
              Portfolio
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) => `desktop-nav-link ${isActive ? 'active' : ''}`}
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) => `desktop-nav-link ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) => `desktop-nav-link ${isActive ? 'active' : ''}`}
            >
              Contact
            </NavLink>
          </nav>

          {/* Prominent Enquire Now CTA Button */}
          <button
            onClick={openInquiry}
            className="desktop-enquire-btn"
            aria-label="Enquire Now or Book Consultation"
          >
            Enquire Now
          </button>
        </div>
      </header>

      {/* ── 2. MOBILE TOP HEADER (Brand & Quick Action) ───────────────────── */}
      <header className="mobile-top-header">
        <Link to="/" className="mobile-brand-link" aria-label="Sahil Studio Home">
          <img src="/favicon.svg" alt="" className="mobile-brand-logo" />
          <span className="mobile-brand-title">Sahil Studio</span>
        </Link>
        <button
          onClick={openInquiry}
          className="mobile-enquire-btn"
          aria-label="Book or Enquire Now"
        >
          Book Now
        </button>
      </header>

      {/* ── 3. MOBILE FIXED BOTTOM NAVIGATION BAR ─────────────────────────── */}
      <nav className="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
        <div className="mobile-bottom-nav-grid">
          {/* 1. Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
            aria-label="Home page"
          >
            {({ isActive }) => (
              <>
                <span className="bottom-nav-indicator" />
                <span className="bottom-nav-icon-wrapper">
                  <HomeIcon active={isActive} />
                </span>
                <span className="bottom-nav-label">Home</span>
              </>
            )}
          </NavLink>

          {/* 2. Portfolio */}
          <NavLink
            to="/portfolio"
            className={`bottom-nav-item ${isPortfolioActive ? 'active' : ''}`}
            aria-label="Portfolio gallery"
          >
            {() => (
              <>
                <span className="bottom-nav-indicator" />
                <span className="bottom-nav-icon-wrapper">
                  <PortfolioIcon active={isPortfolioActive} />
                </span>
                <span className="bottom-nav-label">Portfolio</span>
              </>
            )}
          </NavLink>

          {/* 3. Services */}
          <NavLink
            to="/services"
            className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
            aria-label="Services and packages"
          >
            {({ isActive }) => (
              <>
                <span className="bottom-nav-indicator" />
                <span className="bottom-nav-icon-wrapper">
                  <ServicesIcon active={isActive} />
                </span>
                <span className="bottom-nav-label">Services</span>
              </>
            )}
          </NavLink>

          {/* 4. Contact */}
          <NavLink
            to="/contact"
            className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
            aria-label="Contact and bookings"
          >
            {({ isActive }) => (
              <>
                <span className="bottom-nav-indicator" />
                <span className="bottom-nav-icon-wrapper">
                  <ContactIcon active={isActive} />
                </span>
                <span className="bottom-nav-label">Contact</span>
              </>
            )}
          </NavLink>
        </div>
      </nav>
    </>
  );
}
