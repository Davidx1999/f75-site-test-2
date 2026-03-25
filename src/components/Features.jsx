import React from 'react';

const featuresData = [
  {
    num: "01",
    title: "Tri-Mode Connectivity",
    desc: "Seamlessly switch between Bluetooth 5.0, low-latency 2.4GHz wireless, and reliable wired USB-C connections."
  },
  {
    num: "02",
    title: "Hot-Swappable Sockets",
    desc: "3-pin and 5-pin compatible. Pre-installed with silky smooth LEOBOG linear switches—no soldering required."
  },
  {
    num: "03",
    title: "5-Layer Dampening",
    desc: "Integrated sound absorption foams and dampening gaskets eliminate hollow sounds for an ultra-premium typing acoustic."
  },
  {
    num: "04",
    title: "Per-Key RGB Setup",
    desc: "Adjust every single key with customizable RGB lighting effects, matching your specific setup style."
  }
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Built for <span className="text-gradient">Performance</span></h2>
        </div>
        
        <div className="features-grid">
          {featuresData.map((f, i) => (
            <div className="feature-card glass-panel" key={i}>
              <div className="feature-number">{f.num}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
