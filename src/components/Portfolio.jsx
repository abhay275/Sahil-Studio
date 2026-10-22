import React from 'react';
import './Portfolio.css';

const projects = [
  { id: 1, title: 'Brand Identity', category: 'Design', image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Product Photography', category: 'Photography', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Web Experience', category: 'Development', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Editorial Shoot', category: 'Photography', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80' },
];

const Portfolio = () => {
  return (
    <section id="work" className="section portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Selected Work</h2>
          <p>A curated collection of our latest and greatest projects across various disciplines.</p>
        </div>
        
        <div className="grid grid-cols-2 portfolio-grid">
          {projects.map(project => (
            <div key={project.id} className="portfolio-item">
              <div className="portfolio-image-wrapper">
                <img src={project.image} alt={project.title} className="portfolio-image" loading="lazy" />
                <div className="portfolio-overlay">
                  <span className="portfolio-category">{project.category}</span>
                  <h3>{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
