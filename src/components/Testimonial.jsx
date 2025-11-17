import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-logo">
          <div className="logo-square">O</div>
          <span className="logo-company">Óticas Armazém</span>
        </div>
        <blockquote className="testimonial-quote">
          "As automações criadas nos permitiu ter um retorno sobre investimento já nos primeiros 15 dias"
        </blockquote>
        <div className="testimonial-author">
          <img
            src="data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='32' cy='32' r='32' fill='%23D0D5DD'/%3E%3C/svg%3E"
            alt="Cida Marcílio"
            className="author-avatar"
          />
          <div className="author-info">
            <div className="author-name">Cida Marcílio</div>
            <div className="author-title">Gerente de expansão, Óticas Armazém</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
