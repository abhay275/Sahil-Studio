import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInquiry } from '../context/InquiryContext';

const FILTERS = ['All', 'Wedding', 'Pre-Wedding', 'Destination', 'Traditional'];

const portfolioItems = [
  { id: 1, title: 'Priya & Arjun', subtitle: 'A Jaipur Palace Wedding', tags: 'COUPLE · JAIPUR', category: 'Destination', img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&q=80&fit=crop', tall: true },
  { id: 2, title: 'The Engagement', subtitle: 'Delhi Engagement Session', tags: 'COUPLE · DELHI', category: 'Pre-Wedding', img: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=700&q=80&fit=crop', tall: false },
  { id: 3, title: 'The Bride', subtitle: 'Bridal Portrait Series', tags: 'BRIDAL · LUCKNOW', category: 'Wedding', img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=700&q=80&fit=crop', tall: false },
  { id: 4, title: 'Simran & Kabir', subtitle: 'A Goa Beach Wedding', tags: 'WEDDING · GOA', category: 'Destination', img: 'https://images.unsplash.com/photo-1511285560929-80b456503681?w=700&q=80&fit=crop', tall: true },
  { id: 5, title: 'Mehendi Ceremony', subtitle: 'Traditional Rituals', tags: 'MEHENDI · AGRA', category: 'Traditional', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80&fit=crop', tall: false },
  { id: 6, title: 'Naina & Shiv', subtitle: 'Punjabi Wedding, Chandigarh', tags: 'WEDDING · CHANDIGARH', category: 'Wedding', img: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=700&q=80&fit=crop', tall: false },
  { id: 7, title: 'Ananya & Rohit', subtitle: 'Delhi Ballroom Reception', tags: 'RECEPTION · DELHI', category: 'Wedding', img: 'https://images.unsplash.com/photo-1525772764200-be829a350797?w=700&q=80&fit=crop', tall: true },
  { id: 8, title: 'Pre-Wedding in Udaipur', subtitle: 'Heritage Haveli Session', tags: 'PRE-WEDDING · UDAIPUR', category: 'Pre-Wedding', img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=700&q=80&fit=crop', tall: false },
  { id: 9, title: 'The Sangeet', subtitle: 'Celebration of Dance', tags: 'SANGEET · MUMBAI', category: 'Traditional', img: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=700&q=80&fit=crop', tall: false },
];

export default function Portfolio() {
  const { openInquiry } = useInquiry();
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? portfolioItems : portfolioItems.filter(p => p.category === active);

  return (
    <div style={{ background: 'var(--bg-cream)' }}>
      {/* Header */}
      <div style={{
        background: 'var(--bg-dark)',
        paddingTop: 'calc(var(--nav-h) + 80px)',
        paddingBottom: '72px',
        paddingLeft: 'var(--px)',
        paddingRight: 'var(--px)',
      }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}>
              Portfolio
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
            Weddings remembered<br />
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>the way they felt</span>
          </h1>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{
        background: 'var(--bg-cream)',
        padding: '40px var(--px)',
        borderBottom: '1px solid var(--border-light)',
      }}>
        <div style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: active === f ? 'var(--text-dark)' : 'var(--text-light)',
                borderBottom: active === f ? '1px solid var(--text-dark)' : '1px solid transparent',
                paddingBottom: '2px',
                transition: 'all 0.3s ease',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <section style={{ padding: '48px var(--px) 120px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div className="grid-3" style={{ gap: '2px' }}>
            {filtered.map(({ id, title, subtitle, tags, img }) => (
              <Link
                key={id}
                to={`/portfolio/${id}`}
                style={{
                  display: 'block',
                  position: 'relative',
                  paddingTop: '130%',
                  overflow: 'hidden',
                  textDecoration: 'none',
                }}
              >
                <img
                  src={img}
                  alt={title}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.8s ease',
                  }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '55%',
                  background: 'linear-gradient(to top, rgba(10,8,6,0.78) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />
                <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)', fontSize: '22px',
                    fontWeight: 400, color: 'var(--text-cream)', marginBottom: '4px',
                  }}>{title}</div>
                  <div style={{
                    fontFamily: 'var(--font-sans)', fontSize: '10px',
                    textTransform: 'uppercase', letterSpacing: '0.15em',
                    color: 'rgba(240,237,230,0.6)',
                  }}>{tags}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Begin Inquiry CTA */}
          <div style={{
            marginTop: '80px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            justifyContent: 'center',
          }}>
            <span style={{ flex: 1, maxWidth: '100px', height: '1px', background: 'var(--border-light)' }} />
            <button onClick={openInquiry} style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '15px 40px', background: 'var(--gold)',
              color: 'var(--bg-dark)', fontFamily: 'var(--font-sans)',
              fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
              letterSpacing: '0.15em', textDecoration: 'none', border: 'none', cursor: 'pointer',
            }}>
              Begin Your Inquiry →
            </button>
            <span style={{ flex: 1, maxWidth: '100px', height: '1px', background: 'var(--border-light)' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
