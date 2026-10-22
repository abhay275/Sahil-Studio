import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    tag: 'PRE-WEDDING',
    title: 'What to wear for your pre-wedding shoot',
    excerpt: "A photographer's guide to outfit choices, coordination, and what colours actually work on camera.",
    img: 'https://images.unsplash.com/photo-1525772764200-be829a350797?w=700&q=80&fit=crop',
    date: 'August 2025',
  },
  {
    id: 2,
    tag: 'DESTINATION WEDDING',
    title: 'Planning a destination wedding in Udaipur',
    excerpt: "From heritage lawns to five-star ballrooms — where Lucknow's finest weddings unfold.",
    img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=700&q=80&fit=crop',
    date: 'July 2025',
  },
  {
    id: 3,
    tag: 'BEHIND THE LENS',
    title: 'How we approach candid wedding photography',
    excerpt: 'The philosophy behind quiet observation, and why the best moments are never asked for.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80&fit=crop',
    date: 'June 2025',
  },
  {
    id: 4,
    tag: 'TIPS & PLANNING',
    title: 'Locations, outfits, timing and light — everything couples ask us, answered',
    excerpt: 'The questions we get most often, answered honestly by the team.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=80&fit=crop',
    date: 'May 2025',
  },
  {
    id: 5,
    tag: 'DESTINATION',
    title: 'Palaces, beaches or mountains — a photographer\'s view on the perfect backdrop',
    excerpt: 'Where in India to elope, celebrate or simply get away for the most cinematic wedding.',
    img: 'https://images.unsplash.com/photo-1550005809-91ad75fb315f?w=700&q=80&fit=crop',
    date: 'April 2025',
  },
  {
    id: 6,
    tag: 'FILMS',
    title: 'Why every wedding deserves a cinematic film',
    excerpt: 'Photos freeze moments. Films bring them back to life — with music, motion and emotion.',
    img: 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=700&q=80&fit=crop',
    date: 'March 2025',
  },
];

export default function Journal() {
  return (
    <div style={{ background: 'var(--bg-cream)' }}>
      {/* Header */}
      <div style={{
        background: 'var(--bg-dark)',
        paddingTop: 'calc(var(--nav-h) + 80px)',
        paddingBottom: '80px',
        paddingLeft: 'var(--px)',
        paddingRight: 'var(--px)',
      }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <span style={{ width: '32px', height: '1px', background: 'var(--gold)' }} />
            <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--gold)', fontFamily: 'var(--font-sans)' }}>
              The Journal
            </span>
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 400,
            color: 'var(--text-cream)',
            lineHeight: 1.05,
            maxWidth: '600px',
          }}>
            Planning notes &<br />
            <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>wedding stories</span>
          </h1>
        </div>
      </div>

      {/* Articles */}
      <section style={{ padding: '80px var(--px) 120px' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '48px 32px' }}>
            {posts.map(({ id, tag, title, excerpt, img, date }) => (
              <Link key={id} to={`/journal/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ overflow: 'hidden', marginBottom: '20px', paddingTop: '68%', position: 'relative' }}>
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
                  marginBottom: '10px',
                }}>
                  {tag} · {date}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '22px',
                  fontWeight: 400,
                  color: 'var(--text-dark)',
                  lineHeight: 1.3,
                  marginBottom: '12px',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  color: 'var(--text-medium)',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                }}>
                  {excerpt}
                </p>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '10px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--text-medium)',
                  borderBottom: '1px solid var(--border-light)',
                  paddingBottom: '2px',
                }}>
                  Read More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
