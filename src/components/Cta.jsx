import React from 'react';
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <section className="section bg-secondary text-center" style={{ padding: '160px 0' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 className="display" style={{ marginBottom: 'var(--space-6)' }}>
          Your story deserves to be remembered beautifully.
        </h2>
        
        <div className="flex justify-center" style={{ gap: 'var(--space-4)' }}>
          <Link to="/contact" className="btn btn-primary">
            BOOK YOUR DATE
          </Link>
          <a href="#" className="btn">
            WHATSAPP US
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
