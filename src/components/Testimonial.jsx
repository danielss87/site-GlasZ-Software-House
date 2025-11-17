import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-logo">
          <div className="logo-square">S</div>
          <span className="logo-company">Sisyphus</span>
        </div>
        <blockquote className="testimonial-quote">
          We've been using Untitled UI, and it every way surpassed our expectations
        </blockquote>
        <div className="testimonial-author">
          <img
            src="data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='32' cy='32' r='32' fill='%23D0D5DD'/%3E%3C/svg%3E"
            alt="Candice Wu"
            className="author-avatar"
          />
          <div className="author-info">
            <div className="author-name">Candice Wu</div>
            <div className="author-title">Product Manager, Sisyphus</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
