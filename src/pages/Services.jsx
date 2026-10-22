import React from 'react';
import { Link } from 'react-router-dom';
import Cta from '../components/Cta';
import ImageReveal from '../components/ui/ImageReveal';

const Services = () => {
  const services = [
    {
      title: 'Wedding Photography',
      desc: 'Timeless, editorial documentation of your day. We focus on natural light, authentic moments, and a quiet observational approach.',
      includes: ['Lead Photographer', 'Associate Photographer', 'Online Gallery', 'High-Res Edited Images']
    },
    {
      title: 'Wedding Cinematography',
      desc: 'Cinematic storytelling that moves you. We create films that capture the atmosphere, the vows, and the feeling of the day.',
      includes: ['Cinematic Highlight Film', 'Full Ceremony Edit', 'Speeches & Toasts', 'Drone Coverage (weather permitting)']
    },
    {
      title: 'Pre-Wedding & Engagement',
      desc: 'Intimate portraits before the big day. A chance to get comfortable in front of the camera and create art in a meaningful location.',
      includes: ['2-4 Hour Session', 'Multiple Locations', 'Wardrobe Consultation', 'Online Gallery']
    }
  ];

  return (
    <div className="main-content">
      <section className="section" style={{ paddingTop: '160px' }}>
        <div className="container">
          <p className="metadata text-center" style={{ marginBottom: 'var(--space-2)' }}>SERVICES</p>
          <h1 className="display text-center" style={{ maxWidth: '900px', margin: '0 auto var(--space-12)' }}>
            Every celebration deserves its own visual language.
          </h1>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-16)' }}>
            {services.map((service, index) => (
              <div key={service.title} className="grid grid-cols-12" style={{ gap: 'var(--space-8)', alignItems: 'center' }}>
                <div style={{ gridColumn: 'span 6', order: index % 2 === 0 ? 1 : 2 }}>
                  <ImageReveal alt={service.title} style={{ height: '70vh' }} />
                </div>
                <div style={{ gridColumn: 'span 6', order: index % 2 === 0 ? 2 : 1, padding: 'var(--space-4)' }}>
                  <p className="metadata" style={{ marginBottom: 'var(--space-2)' }}>0{index + 1}</p>
                  <h2 className="display" style={{ marginBottom: 'var(--space-4)' }}>{service.title}</h2>
                  <p className="body-large" style={{ marginBottom: 'var(--space-6)' }}>{service.desc}</p>
                  
                  <p className="metadata" style={{ marginBottom: 'var(--space-2)' }}>INCLUDES</p>
                  <ul style={{ marginBottom: 'var(--space-6)' }}>
                    {service.includes.map(item => (
                      <li key={item} style={{ marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--accent-gold)' }}>—</span> {item}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="btn btn-outline">INQUIRE NOW</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </div>
  );
};

export default Services;
