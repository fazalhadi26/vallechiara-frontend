import { useState, useEffect } from 'react';
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show/Hide logic
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate Scroll Progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div 
      className={`${styles.scrollToTopBtn} ${isVisible ? styles.show : ''}`} 
      onClick={scrollToTop}
    >
      <div 
        className={styles.liquidBg} 
        style={{ height: `${scrollProgress}%` }}
      ></div>
      <div className={styles.arrowIcon}>
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5"
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
