import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, you can try us for free for 30 days. If you want, we\'ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'We understand that things change. You can cancel your plan at any time and we\'ll refund you the difference already paid.'
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'Yes, you can add any additional information to your invoice, including your company details, tax ID, and billing address.'
    },
    {
      question: 'How does billing work?',
      answer: 'Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.'
    },
    {
      question: 'How do I change my account email?',
      answer: 'You can change your account email in your account settings. If you have any issues, please contact our support team.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <div className="faq-header">
          <h2 className="faq-title">Frequently asked questions</h2>
          <p className="faq-description">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <svg
                  className="faq-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-footer">
          <div className="faq-avatar-group">
            <div className="faq-avatar"></div>
            <div className="faq-avatar"></div>
            <div className="faq-avatar"></div>
          </div>
          <h3 className="faq-footer-title">Still have questions?</h3>
          <p className="faq-footer-description">
            Can't find the answer you're looking for? Please chat to our friendly team.
          </p>
          <button className="faq-footer-btn">Get in touch</button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
