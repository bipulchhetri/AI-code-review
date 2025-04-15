import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">
          AI Code Reviewer <span>for Developers</span>
        </h1>
        <p className="hero-subtitle">
          Instantly review your code with AI-powered suggestions, best practices, and security insights.
        </p>
        <button className="hero-button">Try It Now  <span className='emoji'>👇</span></button>
      </div>
      <div className="hero-image">
        <img src="code.png" />
      </div>
    </section>
  );
};

export default Hero;
