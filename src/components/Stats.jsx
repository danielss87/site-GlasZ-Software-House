import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">Build something great</h2>
          <p className="stats-description">
            We've done all the heavy lifting so you don't have to — get all the data you need to launch and grow your business faster.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">400+</div>
            <div className="stat-label">Projects completed</div>
            <div className="stat-description">
              We've helped build over 400 amazing projects.
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number">600%</div>
            <div className="stat-label">Return on investment</div>
            <div className="stat-description">
              Our customers have reported an average of 600% ROI.
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-number">10k</div>
            <div className="stat-label">Global downloads</div>
            <div className="stat-description">
              Our app has been downloaded over 10k times.
            </div>
          </div>
        </div>

        <div className="stats-images">
          <div className="stats-image-item">
            <div className="stats-image-placeholder" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}></div>
          </div>
          <div className="stats-image-item">
            <div className="stats-image-placeholder" style={{background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'}}></div>
          </div>
          <div className="stats-image-item">
            <div className="stats-image-placeholder" style={{background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
