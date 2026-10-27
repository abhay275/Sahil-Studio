import { Link, useNavigate } from 'react-router-dom';
import { useInquiry } from '../context/InquiryContext';
import CloudImage from '../components/CloudImage';
import { useMediaLibrary } from '../hooks/useMediaLibrary';
import { buildImageUrl } from '../lib/cloudinary';

// ─── Photography images via Unsplash ─────────────────────────────────────────
const HERO_BG = 'https://res.cloudinary.com/derowd0h/image/upload/v1793091259/WhatsApp_Image_2026-10-27_at_14.17.01.jpg';
const ABOUT_IMG = 'https://res.cloudinary.com/derowd0h/image/upload/v1793092633/Naina-Kabir.jpg';
const PORTFOLIO_1 = 'https://res.cloudinary.com/derowd0h/image/upload/v1793091259/WhatsApp_Image_2026-10-27_at_14.17.01.jpg';
const PORTFOLIO_2 = 'https://res.cloudinary.com/derowd0h/image/upload/v1793095350/Ring.jpg';
const PORTFOLIO_3 = 'https://res.cloudinary.com/derowd0h/image/upload/v1793093212/Bride.jpg';
const FILM_THUMB = 'https://res.cloudinary.com/derowd0h/image/upload/v1793092486/Harry-simran.jpg';
const JOURNAL_1 = 'https://res.cloudinary.com/derowd0h/image/upload/v1793094575/Mehendi.jpg';
const JOURNAL_2 = 'https://res.cloudinary.com/derowd0h/image/upload/v1793091259/WhatsApp_Image_2026-10-27_at_14.19.17.jpg';
const JOURNAL_3 = 'https://res.cloudinary.com/derowd0h/image/upload/v1793089465/Mehendi.jpg';
const FINAL_BG = 'https://res.cloudinary.com/derowd0h/image/upload/v1793091260/WhatsApp_Image_2026-10-27_at_14.23.28.jpg';

const stats = [
  { num: '300+', label: 'Weddings Told' },
  { num: '8+', label: 'Years of Craft' },
  { num: '20+', label: 'Cities & Destinations' },
  { num: '4.9', label: 'Client Rating' },
];

const portfolioStories = [
  { title: 'The Wedding', tags: 'COUPLE · PAN-INDIA', img: PORTFOLIO_1 },
  { title: 'The Engagement', tags: 'COUPLE · DESTINATION', img: PORTFOLIO_2 },
  { title: 'The Bride', tags: 'WEDDING · TRADITIONAL', img: PORTFOLIO_3 },
];

const services = [
  {
    num: 'No. 01',
    title: 'Wedding Photography',
    desc: 'Candid, editorial and traditional coverage of every ritual — haldi, mehendi, sangeet, pheras and reception — composed with restraint and intention.',
  },
  {
    num: 'No. 02',
    title: 'Wedding Cinematography',
    desc: 'Cinematic films with story, score and colour — from same-week teasers and social reels to full feature films, with drone coverage where the venue allows.',
  },
  {
    num: 'No. 03',
    title: 'Pre-Wedding & Engagement',
    desc: 'Location-scouted pre-wedding shoots and engagement sessions across India — Udaipur, Jaipur, Goa and beyond.',
  },
  {
    num: 'No. 04',
    title: 'Destination Weddings',
    desc: 'Full travelling coverage for destination celebrations — palaces, beaches and hills — for families across India and NRI couples returning home.',
  },
];

const testimonials = [
  {
    quote: "Sahil Studio's wedding photography exceeded all our expectations. The team was so professional and creative, and the final photos are absolutely stunning. We couldn't ask for more.",
    name: 'Priya & Arjun',
    event: 'WEDDING · VIA WEDMEGOOD',
  },
  {
    quote: "Thank you, Sahil Studio, for the gorgeous pre-wedding photos. The attention to detail and the way they captured our love story is truly remarkable.",
    name: 'Simran Kaur',
    event: 'PRE-WEDDING · VIA WEDMEGOOD',
  },
  {
    quote: "Our couple shoot was an unforgettable experience. They perfectly captured the love and chemistry between us in every shot. We couldn't be happier with the results.",
    name: 'Rahul Mehta',
    event: 'COUPLE SHOOT · VIA GOOGLE',
  },
];

const journalPosts = [
  { title: 'What to wear for your pre-wedding shoot', tag: 'PRE-WEDDING', img: JOURNAL_1 },
  { title: 'Planning a destination wedding in Udaipur', tag: 'DESTINATION', img: JOURNAL_2 },
  { title: 'How we approach candid wedding photography', tag: 'BEHIND THE LENS', img: JOURNAL_3 },
];

export default function Home() {
  const navigate = useNavigate();
  const { openInquiry } = useInquiry();
  const { getCover } = useMediaLibrary();

  // Dynamic covers from Cloudinary
  const heroId = getCover('portfolio');
  const aboutId = getCover('about');

  const heroSrc = heroId ? buildImageUrl(heroId, { width: 1800 }) : HERO_BG;

  return (
    <div>
      {/* ── HERO ───────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}>
        {/* BG Image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${heroSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }} />
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(10,8,6,0.75) 40%, rgba(10,8,6,0.2) 100%)',
        }} />

        {/* Location Tagline */}
        <div style={{
          position: 'relative',
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          padding: '0 var(--px)',
          width: '100%',
          paddingTop: 'var(--nav-h)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '32px',
          }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-cream-muted)',
            }}>
              Pan-India · Destination Weddings · Worldwide
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(52px, 7vw, 90px)',
            fontWeight: 400,
            color: 'var(--text-cream)',
            lineHeight: 1.05,
            maxWidth: '600px',
            marginBottom: '28px',
          }}>
            Weddings,<br />
            remembered <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>the</span><br />
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>way they felt.</span>
          </h1>

          {/* Subheadline */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '15px',
            color: 'var(--text-cream-muted)',
            lineHeight: 1.7,
            maxWidth: '420px',
            marginBottom: '40px',
          }}>
            Timeless wedding photography & cinematic films — quietly observed, artfully composed, made to last generations.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={openInquiry}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '15px 32px',
                background: 'var(--gold)',
                color: 'var(--bg-dark)',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                textDecoration: 'none',
                transition: 'background 0.3s ease',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Begin Your Inquiry →
            </button>
            <Link
              to="/portfolio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '15px 32px',
                background: 'transparent',
                color: 'var(--text-cream)',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                textDecoration: 'none',
                border: '1px solid rgba(255,255,255,0.35)',
                transition: 'all 0.3s ease',
              }}
            >
              View the Portfolio →
            </Link>
          </div>
        </div>

        {/* Bottom stats bar on hero */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '18px var(--px)',
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
          background: 'rgba(10,8,6,0.5)',
        }}>
          <div style={{
            maxWidth: 'var(--max-w)',
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-cream-muted)' }}>
              WEDDINGWIRE COUPLES' CHOICE · 2025
            </span>
            <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-cream-muted)' }}>
              RATED 4.9 BY COUPLES · 212+ REVIEWS
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#stats" style={{
          position: 'absolute',
          right: 'var(--px)',
          bottom: '80px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
        }}>
          <span style={{
            writingMode: 'vertical-rl',
            fontSize: '9px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--text-cream-muted)',
          }}>
            Scroll
          </span>
          <span style={{ width: '1px', height: '40px', background: 'var(--gold)', opacity: 0.5 }} />
        </a>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────── */}
      <section id="stats" style={{ background: 'var(--bg-nav)', padding: '56px var(--px)' }}>
        <div style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          textAlign: 'center',
        }}>
          {stats.map(({ num, label }) => (
            <div key={label}>
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(36px, 4vw, 56px)',
                fontWeight: 400,
                color: 'var(--gold)',
                lineHeight: 1,
                marginBottom: '8px',
              }}>
                {num}
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--text-cream-muted)',
              }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT / STUDIO ─────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-cream)', padding: 'var(--s9) var(--px)' }}>
        <div style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
        }}>
          <div className="flex-responsive-reverse" style={{
            alignItems: 'center',
          }}>
            {/* Content */}
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '28px',
              }}>
                <span style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'var(--gold)',
                }}>The Studio</span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 400,
                color: 'var(--text-dark)',
                lineHeight: 1.1,
                marginBottom: '28px',
              }}>
                An atelier of <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>quiet</span><br />
                <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>observation</span>
              </h2>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                color: 'var(--text-medium)',
                lineHeight: 1.85,
                marginBottom: '20px',
              }}>
                Sahil Studio is a photography and film atelier devoted to one idea: the most beautiful images are the ones nobody posed for. Our team works discreetly through your celebrations — anticipating moments before they happen, and composing them with an editorial eye.
              </p>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                color: 'var(--text-medium)',
                lineHeight: 1.85,
                marginBottom: '12px',
              }}>
                We accept a limited number of weddings each season, so every couple receives the studio's complete attention — from the first conversation to the final album.
              </p>

              <p style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '16px',
                color: 'var(--gold)',
                marginBottom: '32px',
              }}>
                — The Sahil Studio Team
              </p>

              <Link
                to="/about"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '11px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--text-medium)',
                  borderBottom: '1px solid var(--border-light)',
                  paddingBottom: '3px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                Meet Us Over a Consultation
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ── PORTFOLIO STORIES ──────────────────────────────────── */}
      <section style={{ background: 'var(--bg-cream)', paddingBottom: '120px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--px)' }}>
          {/* Section heading */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '48px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
              <span style={{
                fontSize: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: 'var(--gold)',
                fontFamily: 'var(--font-sans)',
              }}>
                Wedding Stories
              </span>
            </div>
            <Link
              to="/portfolio"
              style={{
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--text-medium)',
                fontFamily: 'var(--font-sans)',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '2px',
                textDecoration: 'none',
              }}
            >
              View All Stories →
            </Link>
          </div>

          {/* Grid */}
          <div className="grid-3" style={{
            gap: '2px',
            background: 'var(--border-light)',
          }}>
            {portfolioStories.map(({ title, tags, img }) => (
              <Link
                key={title}
                to="/portfolio"
                style={{
                  display: 'block',
                  position: 'relative',
                  paddingTop: '130%',
                  overflow: 'hidden',
                  textDecoration: 'none',
                }}
              >
                <CloudImage
                  fallback={img}
                  alt={title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(10,8,6,0.75) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />
                {/* Text */}
                <div style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '22px',
                    fontWeight: 400,
                    color: 'var(--text-cream)',
                    marginBottom: '6px',
                  }}>
                    {title}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'rgba(240,237,230,0.6)',
                  }}>
                    {tags}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CINEMATIC FILMS ────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-cream)', paddingBottom: '120px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--px)' }}>
          {/* Label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '48px',
            justifyContent: 'center',
          }}>
            <span style={{ flex: 1, height: '1px', background: 'var(--border-light)' }} />
            <span style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: 'var(--gold)',
              fontFamily: 'var(--font-sans)',
              whiteSpace: 'nowrap',
            }}>
              Cinematic Wedding Films
            </span>
            <span style={{ flex: 1, height: '1px', background: 'var(--border-light)' }} />
          </div>

          {/* Film embed */}
          <div style={{ position: 'relative', paddingTop: '50%', overflow: 'hidden', marginBottom: '12px' }}>
            <CloudImage
              fallback={FILM_THUMB}
              alt="Cinematic film"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover',
              }}
            />
            {/* Dark overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(10,8,6,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                width: '72px', height: '72px',
                border: '2px solid rgba(255,255,255,0.6)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: 0,
                  height: 0,
                  borderTop: '12px solid transparent',
                  borderBottom: '12px solid transparent',
                  borderLeft: '20px solid rgba(255,255,255,0.9)',
                  marginLeft: '4px',
                }} />
              </div>
            </div>
            {/* Badge */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              background: 'var(--gold)',
              padding: '6px 14px',
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--bg-dark)',
            }}>
              Wedding Film
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link
              to="/films"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--text-medium)',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '3px',
                textDecoration: 'none',
              }}
            >
              Explore All Films →
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-cream)', paddingBottom: '120px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--px)' }}>
          {/* Heading */}
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--gold)',
              fontFamily: 'var(--font-sans)',
            }}>
              What We Do
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400,
            color: 'var(--text-dark)',
            marginBottom: '8px',
          }}>
            Every commission is bespoke.
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '16px',
            color: 'var(--text-medium)',
            marginBottom: '56px',
          }}>
            These are the disciplines we bring to it.
          </p>

          {/* Service list */}
          <div>
            {services.map(({ num, title, desc }, i) => (
              <div key={title}>
                <div className="flex-responsive" style={{
                  gap: '24px',
                  padding: '32px 0',
                  alignItems: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: '14px',
                    color: 'var(--gold)',
                    letterSpacing: '0.02em',
                  }}>
                    {num}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(20px, 2vw, 26px)',
                    fontWeight: 400,
                    color: 'var(--text-dark)',
                  }}>
                    {title}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    color: 'var(--text-medium)',
                    lineHeight: 1.7,
                  }}>
                    {desc}
                  </div>
                  <Link
                    to="/services"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '10px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.2em',
                      color: 'var(--text-medium)',
                      borderBottom: '1px solid var(--border-light)',
                      paddingBottom: '2px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Discover
                  </Link>
                </div>
                {i < services.length - 1 && (
                  <div style={{ height: '1px', background: 'var(--border-light)' }} />
                )}
              </div>
            ))}
            <div style={{ height: '1px', background: 'var(--border-light)' }} />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-dark)', padding: '100px var(--px)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          {/* Heading */}
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(36px, 4vw, 56px)',
            fontWeight: 400,
            color: 'var(--text-cream)',
            textAlign: 'center',
            marginBottom: '8px',
          }}>
            What couples <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>remember</span> about us
          </h2>
          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', margin: '20px auto 48px' }} />

          {/* Rating summary */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '48px',
          }}>
            <div style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '64px',
              fontWeight: 400,
              color: 'var(--gold)',
              lineHeight: 1,
            }}>4.9</div>
            <div>
              <div style={{
                display: 'flex',
                gap: '4px',
                marginBottom: '8px',
              }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} style={{ color: 'var(--gold)', fontSize: '18px' }}>★</span>
                ))}
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text-cream-muted)',
              }}>
                200+ REVIEWS ACROSS WEDMEGOOD, JUSTDIAL & GOOGLE
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '48px',
          }}>
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                border: '1px solid var(--border-dark)',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--text-cream)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Read All Reviews on Google →
            </a>
          </div>

          {/* Cards */}
          <div className="grid-3" style={{ gap: '2px' }}>
            {testimonials.map(({ quote, name, event }) => (
              <div
                key={name}
                style={{
                  border: '1px solid var(--border-dark)',
                  padding: '40px 32px',
                  background: 'rgba(255,255,255,0.02)',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '36px',
                  color: 'var(--gold)',
                  lineHeight: 1,
                  marginBottom: '20px',
                  opacity: 0.6,
                }}>
                  "
                </div>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '17px',
                  color: 'var(--text-cream-muted)',
                  lineHeight: 1.75,
                  marginBottom: '28px',
                }}>
                  {quote}
                </p>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '17px',
                  color: 'var(--text-cream)',
                  marginBottom: '4px',
                }}>
                  {name}
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--text-cream-muted)',
                }}>
                  {event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOURNAL ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-cream)', padding: '100px var(--px)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '48px',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                <span style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}>
                  The Journal
                </span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 3vw, 40px)',
                fontWeight: 400,
                color: 'var(--text-dark)',
              }}>
                Planning notes & wedding stories
              </h2>
            </div>
            <Link
              to="/journal"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--text-medium)',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '2px',
                textDecoration: 'none',
              }}
            >
              View All →
            </Link>
          </div>

          <div className="grid-3" style={{ gap: '32px' }}>
            {journalPosts.map(({ title, tag, img }) => (
              <Link key={title} to="/journal" style={{ textDecoration: 'none' }}>
                <div style={{ overflow: 'hidden', marginBottom: '16px', paddingTop: '70%', position: 'relative' }}>
                  <img
                    src={img}
                    alt={title}
                    style={{
                      position: 'absolute', inset: 0,
                      width: '100%', height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s ease',
                    }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                </div>
                <div style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'var(--gold)',
                  marginBottom: '8px',
                }}>
                  {tag}
                </div>
                <div style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  fontWeight: 400,
                  color: 'var(--text-dark)',
                  lineHeight: 1.3,
                }}>
                  {title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${FINAL_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(10,8,6,0.72)',
        }} />
        <div style={{
          position: 'relative',
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          padding: '100px var(--px)',
          textAlign: 'center',
          width: '100%',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            justifyContent: 'center',
            marginBottom: '28px',
          }}>
            <span style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'var(--gold)', opacity: 0.5 }} />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: 'var(--gold)',
            }}>
              Limited Dates Each Season
            </span>
            <span style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'var(--gold)', opacity: 0.5 }} />
          </div>

          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 400,
            color: 'var(--text-cream)',
            lineHeight: 1.1,
            marginBottom: '40px',
          }}>
            Your story deserves to<br />
            be <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>told beautifully</span>
          </h2>

          <button
            onClick={openInquiry}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 40px',
              background: 'var(--gold)',
              color: 'var(--bg-dark)',
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              textDecoration: 'none',
              transition: 'background 0.3s ease',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Begin Your Inquiry →
          </button>
        </div>
      </section>

      {/* Floating CTAs */}
      <div style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        alignItems: 'flex-end',
      }}>
        <a
          href="tel:+919335280514"
          aria-label="Call us"
          style={{
            width: '48px', height: '48px',
            borderRadius: '50%',
            background: 'var(--bg-dark)',
            color: 'var(--text-cream)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            textDecoration: 'none',
            border: '1px solid var(--border-dark)',
            transition: 'transform 0.3s ease',
          }}
        >
          📞
        </a>
        <a
          href="https://wa.me/919335280514"
          aria-label="WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '48px', height: '48px',
            borderRadius: '50%',
            background: '#25D366',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            textDecoration: 'none',
            transition: 'transform 0.3s ease',
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
