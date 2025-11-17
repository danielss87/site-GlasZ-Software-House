import React from 'react';
import './AdvancedFeatures.css';

const AdvancedFeatures = () => {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 16V8C21 6.9 20.1 6 19 6H5C3.9 6 3 6.9 3 8V16C3 17.1 3.9 18 5 18H19C20.1 18 21 17.1 21 16Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Share team inboxes',
      description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Deliver instant answers',
      description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
      title: 'Manage your team with reports',
      description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data."
    }
  ];

  return (
    <section className="advanced-features">
      <div className="advanced-features-container">
        <div className="advanced-features-header">
          <h2 className="advanced-features-title">Cutting-edge features for advanced analytics</h2>
          <p className="advanced-features-description">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        <div className="advanced-features-content">
          <div className="mockups-section">
            <div className="mobile-mockup">
              <div className="mockup-device mobile">
                <div className="device-header">
                  <div className="device-notch"></div>
                </div>
                <div className="device-content">
                  <div className="mockup-list">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="mockup-list-item">
                        <div className="mockup-avatar-small"></div>
                        <div className="mockup-text-group">
                          <div className="mockup-text-line"></div>
                          <div className="mockup-text-line short"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="desktop-mockup">
              <div className="mockup-device desktop">
                <div className="desktop-header">
                  <div className="desktop-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="device-content">
                  <div className="desktop-sidebar">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div key={item} className="sidebar-item"></div>
                    ))}
                  </div>
                  <div className="desktop-main">
                    <div className="desktop-table">
                      {[1, 2, 3].map((row) => (
                        <div key={row} className="desktop-row"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="features-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <div className="feature-item-icon">
                  {feature.icon}
                </div>
                <div className="feature-item-content">
                  <h3 className="feature-item-title">{feature.title}</h3>
                  <p className="feature-item-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
