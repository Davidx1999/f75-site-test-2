import React, { useEffect, useRef } from 'react';

export default function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const progressRef = useRef({ target: 0, current: 0 });
  const reqRef = useRef(null);

  useEffect(() => {
    // Force video to pause so it doesn't autoplay naturally
    if (videoRef.current) {
      videoRef.current.pause();
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const containerTop = rect.top;
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      const scrollRange = containerHeight - windowHeight;
      let progress = -containerTop / scrollRange;
      
      progress = Math.max(0, Math.min(1, progress));
      
      // Update target progress for interpolation
      progressRef.current.target = progress;
    };

    const renderLoop = () => {
      const p = progressRef.current;
      
      // Linear interpolation (lerp) for buttery smooth video scrubbing
      p.current += (p.target - p.current) * 0.08;
      
      if (videoRef.current && videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        // Only update currentTime if there's a significant change to save decode performance
        if (Math.abs(p.target - p.current) > 0.0005) {
          videoRef.current.currentTime = p.current * videoRef.current.duration;
        }
      }
      // Keep looping
      reqRef.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Ensure video is loaded enough to have duration metadata before setting initial scroll
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', handleScroll);
    }
    
    handleScroll();
    reqRef.current = requestAnimationFrame(renderLoop);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadedmetadata', handleScroll);
      }
      if (reqRef.current) cancelAnimationFrame(reqRef.current);
    };
  }, []);

  return (
    <section className="hero-scroll-container" id="hero" ref={containerRef}>
      <div className="hero-sticky">
        <video 
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}hero-animation-white-optimized.mp4`}
          muted
          playsInline
          preload="auto"
          className="hero-video"
        ></video>
        <div className="hero-video-overlay"></div>
        
        <div className="container hero-grid">
          <div className="hero-content animate-fade-up">
            <h1 className="hero-title">
              Meet the <span className="text-gradient">AULA F75</span>
            </h1>
            <p className="hero-subtitle">
              The definitive compact 75% mechanical keyboard. Triple connectivity, hot-swappable switches, and per-key RGB built inside a 5-layer sound dampening structure. Let your typing transcend.
            </p>
            <button className="buy-btn" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
              Discover F75
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
