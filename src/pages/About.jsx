import { Link } from 'react-router-dom';
import { useInquiry } from '../context/InquiryContext';

const PORTRAIT_1 = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop';
const PORTRAIT_2 = 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80&fit=crop';
const SCENE = 'https://images.unsplash.com/photo-1511285560929-80b456503681?w=1200&q=80&fit=crop';
const AWARDS_BG = 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80&fit=crop';

const values = [
  {
    num: 'No. 01',
    title: 'Quiet Observation',
    text: 'We never direct. We anticipate. Our team moves through your celebrations discreetly, composing real moments before they disappear.',
  },
  {
    num: 'No. 02',
    title: 'Editorial Eye',
    text: 'We bring a fashion editorial sensibility to wedding photography — considered framing, restrained colour and generous negative space.',
  },
  {
    num: 'No. 03',
    title: 'Limited Dates',
    text: 'We accept a small number of weddings each season, so every couple receives our complete, undivided attention and creative energy.',
  },
  {
    num: 'No. 04',
    title: 'Timeless Work',
    text: 'Trends come and go. We create images that belong to no era — ones your grandchildren will still be moved by fifty years from now.',
  },
];

const awards = [
  { title: 'WeddingWire Couples\' Choice', year: '2023 · 2024 · 2025' },
  { title: 'WedMeGood Top Studio', year: '2022 · 2023 · 2024' },
  { title: 'JustDial Top Rated', year: '2023 · 2024' },
  { title: 'The Knot Best of Weddings', year: '2024' },
];

export default function About() {
  const { openInquiry } = useInquiry();
  return (
    <div style={{ background: 'var(--bg-cream)' }}>
      {/* Header */}
      <div style={{ background: 'var(--bg-dark)', paddingTop: 'calc(var(--nav-h) + 80px)', paddingBottom: '80px', paddingLeft: 'var(--px)', paddingRight: 'var(--px)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}>
              About the Studio
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: 'var(--text-cream)', lineHeight: 1.05, maxWidth: '600px' }}>
            An atelier of<br />
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>quiet observation</span>
          </h1>
        </div>
      </div>

      {/* Story */}
      <section style={{ padding: '120px var(--px)' }}>
        <div className="flex-responsive" style={{
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Images */}
          <div style={{ position: 'relative' }}>
            <div style={{ paddingTop: '130%', overflow: 'hidden', position: 'relative' }}>
              <img
                src={PORTRAIT_1}
                alt="Sahil Studio at work"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(15%)' }}
              />
            </div>
            <div style={{ marginTop: '-80px', marginLeft: '40%', paddingTop: '55%', overflow: 'hidden', position: 'relative', width: '60%', border: '6px solid var(--bg-cream)' }}>
              <img
                src={PORTRAIT_2}
                alt="Candid wedding moment"
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(15%)' }}
              />
            </div>
          </div>

          {/* Text */}
          <div style={{ paddingTop: '16px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 3vw, 40px)', fontWeight: 400, color: 'var(--text-dark)', lineHeight: 1.2, marginBottom: '32px' }}>
              We were built around one belief: the best photographs are the ones nobody posed for.
            </h2>

            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', color: 'var(--text-medium)', lineHeight: 1.85, marginBottom: '20px' }}>
              Sahil Studio is a photography and film atelier based in India. We travel wherever love takes us — palace courtyards in Rajasthan, Italian villas, beach ceremonies in Goa, and intimate family gatherings in family homes.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', color: 'var(--text-medium)', lineHeight: 1.85, marginBottom: '20px' }}>
              Our approach is editorial and empathetic. We work discreetly, moving through celebrations without disrupting them, composing moments with the same care a cinematographer brings to a film. The result is a body of work that feels real — because it is.
            </p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', color: 'var(--text-medium)', lineHeight: 1.85, marginBottom: '20px' }}>
              We accept a limited number of weddings each season. That is a deliberate choice. It is why families across India and abroad choose us for their most important days — and why we are able to be fully present for each one.
            </p>

            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '18px', color: 'var(--gold)', marginBottom: '36px' }}>
              — The Sahil Studio Team
            </p>

            <Link to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '15px 36px', background: 'var(--gold)',
              color: 'var(--bg-dark)', fontFamily: 'var(--font-sans)',
              fontSize: '11px', fontWeight: 600, textTransform: 'uppercase',
              letterSpacing: '0.15em', textDecoration: 'none',
            }}>
              Meet Us Over a Consultation →
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: 'var(--bg-cream-dark)', padding: '100px var(--px)' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <span style={{ width: '40px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}>
              Our Philosophy
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: 'var(--text-dark)', marginBottom: '56px' }}>
            How we work
          </h2>

          <div>
            {values.map(({ num, title, text }, i) => (
              <div key={num}>
                <div className="flex-responsive" style={{
                  gap: '32px',
                  alignItems: 'start',
                  padding: '36px 0',
                }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '14px', color: 'var(--gold)' }}>{num}</div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 400, color: 'var(--text-dark)', lineHeight: 1.2 }}>{title}</div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--text-medium)', lineHeight: 1.75 }}>{text}</div>
                </div>
                {i < values.length - 1 && <div style={{ height: '1px', background: 'var(--border-light)' }} />}
              </div>
            ))}
            <div style={{ height: '1px', background: 'var(--border-light)' }} />
          </div>
        </div>
      </section>

      {/* Awards / Recognition */}
      <section style={{ background: 'var(--bg-cream-dark)', padding: '0 var(--px) 100px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'center', marginBottom: '20px' }}>
              <span style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'var(--border-light)' }} />
              <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}>
                Recognition
              </span>
              <span style={{ flex: 1, maxWidth: '80px', height: '1px', background: 'var(--border-light)' }} />
            </div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 400,
              color: 'var(--text-dark)',
            }}>
              Honoured for the <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>craft</span>
            </h2>
            <div style={{ width: '48px', height: '1px', background: 'var(--gold)', margin: '20px auto 0' }} />
          </div>

          <div className="grid-4" style={{ gap: '2px' }}>
            {awards.map(({ title, year }) => (
              <div
                key={title}
                style={{
                  border: '1px solid var(--border-light)',
                  padding: '36px 28px',
                  textAlign: 'center',
                  background: 'var(--bg-cream)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 400, color: 'var(--text-dark)', marginBottom: '10px', lineHeight: 1.3 }}>
                  {title}
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold)' }}>
                  {year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scene photo */}
      <div style={{ position: 'relative', height: '60vh', overflow: 'hidden' }}>
        <img src={SCENE} alt="Wedding scene" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,8,6,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 400, color: 'var(--text-cream)', marginBottom: '32px' }}>
              Ready to begin <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>your story?</span>
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
        </div>
      </div>
    </div>
  );
}
