import { useEffect, useState } from 'react';
import '../assets/css/HeroSection.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const Webflow = window.Webflow || [];
    Webflow.push(() => {
      window.Webflow.require('ix2').init();
    });

    const handleScroll = () => {
      const element = document.querySelector('.home-hero-image');
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-hero-image-wrapper">
      <img 
        src="./src/assets/images/hero-img.webp"
        loading="lazy"
        alt="AI Power"
        className={`home-hero-image ${isVisible ? 'active' : ''}`}
      />
    </div>
  );
};

export default HeroSection;
