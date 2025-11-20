// ScrollToTop.js
import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          style={scrollBtnStyle}
        >
          ↑
        </button>
      )}
    </div>
  );
};

// Inline styles for the button (you can move these to your CSS file if you prefer)
const scrollBtnStyle = {
  position: 'fixed',
  bottom: '40px',
  right: '40px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  backgroundColor: '#3cdcea',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
  fontSize: '24px',
  boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
};

export default ScrollToTop;
