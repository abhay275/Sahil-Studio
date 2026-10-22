import { Link } from 'react-router-dom';
import { useInquiry } from '../context/InquiryContext';
import CloudImage from '../components/CloudImage';

const HEADER_BG = 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1800&q=80&fit=crop';

const weddings = [
  {
    id: 1,
    title: 'Priya & Arjun',
    subtitle: 'A Jaipur Palace Wedding',
    tags: 'WEDDING · JAIPUR',
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=700&q=80&fit=crop',
  },
  {
    id: 2,
    title: 'Simran & Kabir',
    subtitle: 'A Goa Destination Wedding',
    tags: 'DESTINATION · GOA',
    img: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=700&q=80&fit=crop',
  },
  {
    id: 3,
    title: 'Ananya & Rohit',
    subtitle: 'A Delhi Ballroom Reception',
    tags: 'WEDDING · DELHI',
    img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=700&q=80&fit=crop',
  },
  {
    id: 4,
    title: 'Meera & Dev',
    subtitle: 'Heritage Haveli, Udaipur',
    tags: 'DESTINATION · UDAIPUR',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456503681?w=700&q=80&fit=crop',
  },
  {
    id: 5,
    title: 'Riya & Aakash',
    subtitle: 'A Mumbai Seaside Wedding',
    tags: 'WEDDING · MUMBAI',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80&fit=crop',
  },
  {
    id: 6,
    title: 'Naina & Shiv',
    subtitle: 'Traditional Punjabi Ceremony',
    tags: 'TRADITIONAL · CHANDIGARH',
    img: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=700&q=80&fit=crop',
  },
];

export default function Weddings() {
  const { openInquiry } = useInquiry();
  return (
    <div>
      {/* Header */}
      <div style={{
        position: 'relative',
        height: '60vh',
        minHeight: '420px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${HEADER_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,8,6,0.8) 0%, rgba(10,8,6,0.3) 100%)',
        }} />
        <div style={{
          position: 'relative',
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          padding: '0 var(--px) 72px',
          width: '100%',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}>
              Wedding Stories
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 400,
            color: 'var(--text-cream)',
            lineHeight: 1.05,
          }}>
            Every wedding,<br />
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>a different story</span>
          </h1>
        </div>
      </div>

      {/* Intro text */}
      <section style={{ background: 'var(--bg-cream)', padding: '72px var(--px)' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '17px',
            color: 'var(--text-medium)',
            lineHeight: 1.85,
          }}>
            These are real weddings photographed by Sahil Studio across India and abroad. Each one is a unique story, shaped by the people, the place, and the moments that mattered most. Browse through our wedding photography and their wedding films. If one of the stories below feels familiar, it is worth exploring further.
          </p>
          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', margin: '32px auto 0' }} />
        </div>
      </section>

      {/* Grid */}
      <section style={{ background: 'var(--bg-cream)', paddingBottom: '120px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 var(--px)' }}>
          <div className="grid-3" style={{ gap: '2px' }}>
            {weddings.map(({ id, title, subtitle, tags, img }) => (
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
                    fontFamily: 'var(--font-serif)', fontStyle: 'italic',
                    fontSize: '14px', color: 'var(--gold)', marginBottom: '6px',
                  }}>{subtitle}</div>
                  <div style={{
                    fontFamily: 'var(--font-sans)', fontSize: '10px',
                    textTransform: 'uppercase', letterSpacing: '0.15em',
                    color: 'rgba(240,237,230,0.55)',
                  }}>{tags}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--bg-dark)', padding: '80px var(--px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'center', marginBottom: '24px' }}>
            <span style={{ flex: 1, height: '1px', background: 'var(--border-dark)' }} />
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}>
              Your Wedding
            </span>
            <span style={{ flex: 1, height: '1px', background: 'var(--border-dark)' }} />
          </div>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 4vw, 48px)',
            fontWeight: 400,
            color: 'var(--text-cream)',
            marginBottom: '32px',
          }}>
            Ready to begin <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>your story?</span>
          </h2>
          <button onClick={openInquiry} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '15px 36px', background: 'var(--gold)',
            color: 'var(--bg-dark)', fontFamily: 'var(--font-sans)',
            fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
            letterSpacing: '0.15em', textDecoration: 'none', border: 'none', cursor: 'pointer',
          }}>
            Begin Your Inquiry →
          </button>
        </div>
      </section>
    </div>
  );
}
