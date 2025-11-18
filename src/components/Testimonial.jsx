import React from 'react';
import './Testimonial.css';
import cidaMarcilioImg from '../assets/images/cida-marcilio-oticas-armazem.jpg';

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
            src={cidaMarcilioImg}
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
