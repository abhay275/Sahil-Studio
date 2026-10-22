import { Link } from 'react-router-dom';
import { useInquiry } from '../context/InquiryContext';

const films = [
  {
    id: 1,
    title: 'Priya & Arjun',
    subtitle: 'Jaipur Palace Wedding',
    duration: '8:24',
    type: 'WEDDING FILM',
    img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80&fit=crop',
  },
  {
    id: 2,
    title: 'Simran & Kabir',
    subtitle: 'Goa Beach Wedding',
    duration: '6:14',
    type: 'WEDDING FILM',
    img: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=1200&q=80&fit=crop',
  },
  {
    id: 3,
    title: 'Ananya & Rohit',
    subtitle: 'Delhi Ballroom Reception',
    duration: '4:52',
    type: 'WEDDING TEASER',
    img: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=1200&q=80&fit=crop',
  },
  {
    id: 4,
    title: 'Meera & Dev',
    subtitle: 'Udaipur Heritage Haveli',
    duration: '9:10',
    type: 'WEDDING FILM',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456503681?w=1200&q=80&fit=crop',
  },
];

export default function Films() {
  const { openInquiry } = useInquiry();
  return (
    <div style={{ background: 'var(--bg-dark)' }}>
      {/* Header */}
      <div style={{ paddingTop: 'calc(var(--nav-h) + 80px)', paddingBottom: '80px', paddingLeft: 'var(--px)', paddingRight: 'var(--px)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}>
              Cinematic Films
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: 'var(--text-cream)', lineHeight: 1.05, maxWidth: '560px' }}>
            Stories told<br />
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>through film</span>
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section style={{ padding: '0 var(--px) 80px' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', color: 'var(--text-cream-muted)', lineHeight: 1.85 }}>
            A photograph freezes a moment. A film restores its emotion. Our wedding films are cinematic narratives — built from the light, the silence, the laughter and the tears of your most important day.
          </p>
          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', margin: '32px auto 0' }} />
        </div>
      </section>

      {/* Featured Film */}
      <section style={{ padding: '0 var(--px) 80px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ position: 'relative', paddingTop: '50%', overflow: 'hidden' }}>
            <img
              src={films[0].img}
              alt={films[0].title}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,6,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                width: '80px', height: '80px',
                border: '2px solid rgba(255,255,255,0.6)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'rgba(196,165,90,0.15)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <div style={{ width: 0, height: 0, borderTop: '14px solid transparent', borderBottom: '14px solid transparent', borderLeft: '22px solid rgba(255,255,255,0.9)', marginLeft: '5px' }} />
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '24px', left: '24px' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '6px' }}>
                Featured · {films[0].type}
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 400, color: 'var(--text-cream)' }}>
                {films[0].title}
              </div>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '16px', color: 'var(--text-cream-muted)' }}>
                {films[0].subtitle} · {films[0].duration}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Films */}
      <section style={{ padding: '0 var(--px) 120px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ height: '1px', background: 'var(--border-dark)', marginBottom: '48px' }} />
          <div className="grid-3" style={{ gap: '2px' }}>
            {films.slice(1).map(({ id, title, subtitle, duration, type, img }) => (
              <div key={id} style={{ position: 'relative', paddingTop: '80%', overflow: 'hidden', cursor: 'pointer' }}>
                <img
                  src={img}
                  alt={title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,6,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '56px', height: '56px', border: '2px solid rgba(255,255,255,0.5)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid rgba(255,255,255,0.85)', marginLeft: '3px' }} />
                  </div>
                </div>
                <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '4px' }}>{type} · {duration}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--text-cream)' }}>{title}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '13px', color: 'var(--text-cream-muted)' }}>{subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid var(--border-dark)', padding: '80px var(--px)', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: 'var(--text-cream)', marginBottom: '32px' }}>
            Every wedding deserves a<br />
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>cinematic film</span>
          </h2>
          <button onClick={openInquiry} style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '15px 40px', background: 'var(--gold)',
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
