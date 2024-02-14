import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaPython, FaNodeJs, FaReact, FaJava } from 'react-icons/fa';
import { SiQiskit } from 'react-icons/si';
import './Home.css';
import qiskit from 'C:/Users/viyer/website/src/assets/qiskit.png';
import qsc from 'C:/Users/viyer/website/src/assets/qsc.jpg';
import microsoft from 'C:/Users/viyer/website/src/assets/microsoft.jpg';


const Home = () => {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after a short delay to gradually reveal the intro text
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 700); // Adjust the delay as needed

    // Clear the timeout on component unmount to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        color: theme.palette.common.white,
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      <Typography variant="h2" gutterBottom className={isVisible ? 'fade-in intro-text' : 'intro-text'} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
        Hi! I'm Vea. It's nice to meet you!
      </Typography>
      <Typography variant="h5" gutterBottom className={isVisible ? 'fade-in intro-text' : 'intro-text'} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
        Explore my projects, resume, and more.
      </Typography>
      <Button
        component={Link}
        to="/projects"
        variant="contained"
        color="secondary"
        size="large"
        sx={{ marginTop: '20px' }}
        className={isVisible ? 'fade-in intro-text' : 'intro-text'}
        style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
      >
        Get in touch
      </Button>
      
      <Box sx={{ marginTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <FaPython style={{ fontSize: '3em', color: 'lightblue', margin: '0 10px' }} className={isVisible ? 'fade-in intro-text' : 'intro-text'}/>
        <FaJava style={{ fontSize: '3em', color: 'red', margin: '0 10px' }} className={isVisible ? 'fade-in intro-text' : 'intro-text'}/>
        <FaReact style={{ fontSize: '3em', color: 'lightgreen', margin: '0 10px' }} className={isVisible ? 'fade-in intro-text' : 'intro-text'}/>
        <FaNodeJs style={{ fontSize: '3em', color: 'yellow', margin: '0 10px' }} className={isVisible ? 'fade-in intro-text' : 'intro-text'}/> 
        <SiQiskit style={{ fontSize: '3em', color: 'white', margin: '0 10px' }} className={isVisible ? 'fade-in intro-text' : 'intro-text'}/>
      </Box>
      
      {/* Affiliations Section */}
      <Typography variant="h4" gutterBottom className={isVisible ? 'fade-in intro-text' : 'intro-text'} style={{ marginTop: '50px', fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
        Affiliations
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
  <div style={{ width: '200px', margin: '0 10px', textAlign: 'center' }}>
    <img src={qiskit} alt="" className={isVisible ? 'fade-in intro-text' : 'intro-text'} style={{ maxWidth: '100%', height: 'auto' }} />
  </div>
  <div style={{ width: '200px', margin: '0 10px', textAlign: 'center' }}>
    <img src={qsc} alt="" className={isVisible ? 'fade-in intro-text' : 'intro-text'} style={{ maxWidth: '100%', height: 'auto' }} />
  </div>
  <div style={{ width: '200px', margin: '0 10px', textAlign: 'center' }}>
    <img src={microsoft} alt="" className={isVisible ? 'fade-in intro-text' : 'intro-text'} style={{ maxWidth: '100%', height: 'auto' }} />
  </div>
</Box>
    </Box>
  );
};

export default Home;
