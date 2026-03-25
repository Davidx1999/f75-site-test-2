import React from 'react';

export default function Specs() {
  return (
    <section className="specs-section" id="specs">
      <div className="container">
        <h2 className="section-title">Technical <span className="text-gradient">Specs</span></h2>
        
        <div className="specs-grid">
          <div>
            <p className="feature-desc" style={{ maxWidth: '400px' }}>
              Every detail is engineered to provide an unparalleled typing experience. A compact form factor loaded with maximal capabilities.
            </p>
          </div>
          <div className="spec-list">
            <div className="spec-item">
              <span className="spec-label">Layout</span>
              <span className="spec-value">75% Compact (82 Keys)</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Connectivity</span>
              <span className="spec-value">Bluetooth 5.0 / 2.4GHz Wireless / USB-C Wired</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Switches</span>
              <span className="spec-value">LEOBOG Linear (Hot-swappable 3/5 pin)</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Battery Capacity</span>
              <span className="spec-value">4000mAh Lithium (Charge-while-using supported)</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Lighting</span>
              <span className="spec-value">Per-Key RGB with Multiple Effects</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">Control</span>
              <span className="spec-value">Aluminum Multifunction Knob (Volume / Media / Brightness)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
