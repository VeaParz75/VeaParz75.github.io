import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import SaturnButton from './SaturnButton';
import CloseIcon from '@mui/icons-material/Close';

const konamiCode = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'a', 'b', 'v', 'e', 'a' 
];

const Header = ({ backgroundCol }) => {
  const history = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [konamiIndex, setKonamiIndex] = useState(0);
  // const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleClick = () => {
    setClickCount(prevCount => {
      const newCount = prevCount + 1;
      if (newCount === 5) {
        // Trigger the confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
        // Reset the count so it can happen again
        return 0;
      }
      return newCount;
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === konamiCode[konamiIndex]) {
      setKonamiIndex(prevIndex => prevIndex + 1);
      if (konamiIndex + 1 === konamiCode.length) {
        // Navigate to the secret page
        history('/secret'); // Use the route to the secret page
        setKonamiIndex(0); // Reset the index
      }
    } else {
      setKonamiIndex(0); // Reset if the wrong key is pressed
    }
  };

  useEffect(() => {
    // Listen for keydown events
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      // Clean up the event listener on unmount
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [konamiIndex]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEducation = () => {
    const eduSection = document.getElementById('education');
    if (eduSection) {
      eduSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToExperience = () => {
    const expSection = document.getElementById('experience');
    if (expSection) {
      expSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResearch = () => {
    const expSection = document.getElementById('research');
    if (expSection) {
      expSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: backgroundCol || 'transparent', boxShadow: 'none' }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            to="/"
            onClick={handleClick}
            style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
          >
            Vea Iyer
          </Link>
        </Typography>
        <SaturnButton onClick={scrollToAbout} sx={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
          About
        </SaturnButton>
        <SaturnButton onClick={scrollToEducation} sx={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
          Education
        </SaturnButton>
        <SaturnButton onClick={scrollToExperience} sx={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
          Experience
        </SaturnButton>
        <SaturnButton onClick={scrollToResearch} sx={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
          Research
        </SaturnButton>
        <SaturnButton component={Link} to="/affiliations" color="inherit" style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
          Affiliations
        </SaturnButton>
        <SaturnButton component={Link} to="/portfolio" color="inherit" style={{ color: 'white', fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
          Portfolio
        </SaturnButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
