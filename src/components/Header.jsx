import React, { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <div className="logo">AULA.</div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#specs">Specs</a>
          <a href="#support">Support</a>
        </nav>
        <button className="buy-btn">Order Now</button>
      </div>
    </header>
  );
}
