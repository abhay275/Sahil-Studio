import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Cta from '../components/Cta';
import ImageReveal from '../components/ui/ImageReveal';

const PortfolioStory = () => {
  const { id } = useParams();

  return (
    <div className="main-content">
      {/* Cinematic Hero */}
      <section className="section no-pt" style={{ paddingBottom: '0' }}>
        <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
          <ImageReveal alt="Hero Story Image" style={{ height: '100%', width: '100%' }} />
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(to top, rgba(10,10,10,0.9), transparent 60%)',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center',
            paddingBottom: 'var(--space-12)', textAlign: 'center'
          }}>
            <p className="metadata" style={{ marginBottom: 'var(--space-4)' }}>THE WEDDING OF</p>
            <h1 className="display-xl" style={{ marginBottom: 'var(--space-4)' }}>Aarav & Ananya</h1>
            <p className="metadata">UDAIPUR, INDIA · DECEMBER 2025</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          
          <div className="text-center" style={{ marginBottom: 'var(--space-16)' }}>
            <h2 className="display" style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
              "The experience should make visitors imagine: 'I want my wedding to feel like this.'"
            </h2>
          </div>

          <div style={{ marginBottom: 'var(--space-16)' }}>
            <p className="metadata text-center" style={{ marginBottom: 'var(--space-4)' }}>01 — ARRIVAL</p>
            <ImageReveal alt="Arrival Image" style={{ height: '70vh', width: '100%' }} />
          </div>

          <div style={{ marginBottom: 'var(--space-16)' }}>
            <p className="metadata text-center" style={{ marginBottom: 'var(--space-4)' }}>02 — HALDI & MEHENDI</p>
            <div className="grid grid-cols-2" style={{ gap: 'var(--space-4)' }}>
              <ImageReveal alt="Haldi 1" style={{ height: '60vh' }} />
              <ImageReveal alt="Haldi 2" style={{ height: '60vh' }} />
            </div>
          </div>

          <div style={{ marginBottom: 'var(--space-16)' }}>
            <p className="metadata text-center" style={{ marginBottom: 'var(--space-4)' }}>03 — CEREMONY</p>
            <div className="grid grid-cols-12" style={{ gap: 'var(--space-4)' }}>
              <div style={{ gridColumn: 'span 12' }}>
                <ImageReveal alt="Ceremony Wide" style={{ height: '80vh' }} />
              </div>
              <div style={{ gridColumn: 'span 4' }}>
                <ImageReveal alt="Ceremony Detail 1" style={{ height: '50vh' }} />
              </div>
              <div style={{ gridColumn: 'span 8' }}>
                <ImageReveal alt="Ceremony Detail 2" style={{ height: '50vh' }} />
              </div>
            </div>
          </div>

          <div className="text-center" style={{ marginBottom: 'var(--space-16)', padding: 'var(--space-12) 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
            <p className="metadata" style={{ marginBottom: 'var(--space-4)' }}>CLIENT WORDS</p>
            <h3 className="h2" style={{ maxWidth: '700px', margin: '0 auto var(--space-4)', fontStyle: 'italic' }}>
              "Sahil Studio didn't just take pictures; they captured the absolute soul of our wedding. Looking at these feels like living it all over again."
            </h3>
            <p className="metadata">— AARAV & ANANYA</p>
          </div>
          
          <div className="text-center">
            <h2 className="display" style={{ marginBottom: 'var(--space-6)' }}>Every wedding has a story.<br/>Let's tell yours.</h2>
            <Link to="/contact" className="btn btn-primary" style={{ marginRight: '1rem' }}>BOOK YOUR DATE</Link>
            <Link to="/portfolio" className="btn btn-outline">BACK TO PORTFOLIO</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioStory;
