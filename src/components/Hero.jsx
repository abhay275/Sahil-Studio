import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="gradient-sphere"></div>
      </div>
      <div className="container hero-content animate-fade-in">
        <h1>We craft visual <br/> <span className="text-gradient">masterpieces.</span></h1>
        <p className="delay-100">
          Welcome to Sahil Studio. A multidisciplinary creative studio blending art, design, and commerce to elevate your brand.
        </p>
        <div className="hero-cta delay-200">
          <a href="#work" className="btn btn-primary">Explore Work</a>
          <a href="#shop" className="btn btn-outline">Visit Shop</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
