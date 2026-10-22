import React from 'react';
import Cta from '../components/Cta';
import ImageReveal from '../components/ui/ImageReveal';

const Testimonials = () => {
  return (
    <div className="main-content">
      <section className="section" style={{ paddingTop: '160px' }}>
        <div className="container">
          <p className="metadata text-center" style={{ marginBottom: 'var(--space-2)' }}>WHAT COUPLES REMEMBER</p>
          <h1 className="display text-center" style={{ maxWidth: '900px', margin: '0 auto var(--space-12)' }}>
            Real couples.<br />Real stories. Real trust.
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
            
            {/* Testimonial 1 */}
            <div className="grid grid-cols-12" style={{ gap: 'var(--space-8)', alignItems: 'center' }}>
              <div style={{ gridColumn: 'span 5' }}>
                <ImageReveal alt="Wedding Couple 1" style={{ height: '70vh' }} />
              </div>
              <div style={{ gridColumn: 'span 7', paddingLeft: 'var(--space-4)' }}>
                <p style={{ color: 'var(--accent-gold)', marginBottom: 'var(--space-2)' }}>★★★★★</p>
                <h2 className="h1" style={{ marginBottom: 'var(--space-4)', fontStyle: 'italic' }}>
                  "Sahil Studio captured the quiet moments we didn't even realize were happening. The final gallery was a masterpiece of our love."
                </h2>
                <p className="metadata">PRIYA & NIKHIL · UDAIPUR</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="grid grid-cols-12" style={{ gap: 'var(--space-8)', alignItems: 'center' }}>
              <div style={{ gridColumn: 'span 7', paddingRight: 'var(--space-4)', textAlign: 'right' }}>
                <p style={{ color: 'var(--accent-gold)', marginBottom: 'var(--space-2)' }}>★★★★★</p>
                <h2 className="h1" style={{ marginBottom: 'var(--space-4)', fontStyle: 'italic' }}>
                  "More than just photographers, they were calming presences on our wedding day. The resulting films brought us to tears."
                </h2>
                <p className="metadata">SARA & KABIR · GOA</p>
              </div>
              <div style={{ gridColumn: 'span 5' }}>
                <ImageReveal alt="Wedding Couple 2" style={{ height: '70vh' }} />
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="grid grid-cols-12" style={{ gap: 'var(--space-8)', alignItems: 'center' }}>
              <div style={{ gridColumn: 'span 5' }}>
                <ImageReveal alt="Wedding Couple 3" style={{ height: '70vh' }} />
              </div>
              <div style={{ gridColumn: 'span 7', paddingLeft: 'var(--space-4)' }}>
                <p style={{ color: 'var(--accent-gold)', marginBottom: 'var(--space-2)' }}>★★★★★</p>
                <h2 className="h1" style={{ marginBottom: 'var(--space-4)', fontStyle: 'italic' }}>
                  "They have an editorial eye that makes you feel like you are in a fashion magazine, without losing the raw emotion."
                </h2>
                <p className="metadata">ANANYA & RAHUL · LAKE COMO</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Cta />
    </div>
  );
};

export default Testimonials;
