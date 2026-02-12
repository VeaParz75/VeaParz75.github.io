// /* To deploy:

// 1. npm start: open in localhost
// 2. npm run build: creates optimized build
// 3. npm run deploy: deploys to domain

// do NOT terminate run just login and be patient until it says 'Published' */

import React, { useState, useEffect, useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Typography, Button, useTheme, Modal } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Draggable from "react-draggable";
import Apod from "./Apod";
import About from "./About";
import Education from './Education';
import Experience from "./Experience";
import Research from "./Research";
import Affiliations from './Affiliations';
import Contact from './Contact';
import Portfolio from './Portfolio';
import TextRotator from './helpers/TextRotator';
import ThemeSwitcher from './helpers/ThemeSwitcher';
import about from '../assets/about.png';
import education from '../assets/education.png';
import experience from '../assets/experience.png';
import research from '../assets/research.png';
import recognitions from '../assets/recognitions.png';
import hobbies from '../assets/hobbies.png';

export default function DesktopWindows() {
  const theme = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [windows, setWindows] = useState([
    // fill in useState to check window positioning before render
    // { id: "about", zIndex: 1, type: "about" },
    // { id: "apod", zIndex: 2, type: "apod" },
    // { id: "experience", zIndex: 2, type: "experience" }
  ]);

  const bringToFront = (id) => {
    setWindows((prev) => {
      const targetZ = prev.find((w) => w.id === id)?.zIndex || 1;
      return prev.map((w) => {
        if (w.id === id) return { ...w, zIndex: prev.length };
        if (w.zIndex > targetZ) return { ...w, zIndex: w.zIndex - 1 };
        return w;
      });
    });
  };

  const trigger_clicks = 10
  const junimo_gif = "./loading_gifs/Junimo.gif"
  const [clickCount, setClickCount] = useState(0);
  const [showGif, setShowGif] = useState(false);

  const handleEasterEggClick = () => {
    // trying the easter egg with my name
    // makes junimos appear like the stardew home screen

    // 1. Increment the click count
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // 2. Check if the count hits the target and the GIF is not already showing
    if (newCount >= trigger_clicks && !showGif) {
      setShowGif(true);
      console.log("GIF Easter Egg unlocked!");
    } else if (showGif) {
      // Optional: Reset or hide the GIF if clicked again (or do nothing)
      console.log("GIF is already visible.");
    } else {
        console.log(`Click progress: ${newCount}/${trigger_clicks}`);
    }
  };

  const closeWindow = (id) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  // mobile toast warning (apparently that is what the warning message is called)
  // Checks if screen is smaller than 'md' (approx tablet/phone width)
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 
  
  // State to control if the warning is visible
  const [mobileWarningOpen, setMobileWarningOpen] = useState(false);

  // When the component loads, check if it's mobile. If yes, open the warning.
  useEffect(() => {
    if (isMobile) {
      setMobileWarningOpen(true);
    }
  }, [isMobile]);

  const handleCloseWarning = () => {
    setMobileWarningOpen(false);
  };

  return (
    <div className="relative min-h-screen overflow-hidden themed-site-bg">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',  // horizontal center
          alignItems: 'center',      // vertical center
          position: 'relative',      // to contain absolute children if needed
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
      <Box sx={{ position: 'relative', width: '100%', maxWidth: '1100px' }}>
      {/* Header/Bezel */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '55px', md: '75px' },
          left: '0px',
          width: 'calc(100% + 0px)', // or a fixed width if needed
          backgroundColor: '#1F2937',
          color: 'white',
          padding: '4px 20px',
          borderRadius: '17px 17px 0 0',
          fontWeight: 500,
          fontFamily: 'Courier',
          fontSize: '0.875rem',
          userSelect: 'none',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        System.out.println("Home");

        <button
          onClick={() => {
            if (!windows.some((w) => w.id === "apod")) {
              setWindows((prev) => [
                ...prev,
                { id: "apod", zIndex: prev.length + 1, type: "apod" },
              ]);
            }
          }}
          style={{
            position: 'absolute',
            top: '-20px',
            right: '-30px',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'transparent',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '100px',
            transform: 'rotate(15deg)',
            transition: 'transform 0.3s ease',
            padding: 0,
            zIndex: 1,
          }}
          aria-label="Open Space Info"
          onMouseEnter={e => e.currentTarget.style.transform = 'rotate(35deg)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'rotate(15deg)'}
        >
          🪐
        </button>

         {showGif && (
          <img
            src={junimo_gif}
            alt="Secret Easter Egg"
            className="easter-egg-gif"
          />
        )}
      </Box> 
      <Box className='themed-box-bg' sx={{ position: 'relative', marginTop: { xs: '55px', md: '75px' }, padding: { xs: '40px 20px', md: '65px 75px' }, paddingBottom: '0px', color: theme.palette.common.white, border: '3px solid black', borderRadius: '17px', borderColor: 'black', fontFamily: 'Nunito, sans-serif', fontWeight: 700 }}>
          <Typography
        variant="h2"
        gutterBottom
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Nunito, sans-serif', fontWeight: 700,
          fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
          textAlign: 'center',
          flexWrap: 'wrap'
        }}
        className="intro-text color-changing"
      >
        <span>
          Hi! I'm{" "}
          <span
            onClick={handleEasterEggClick}
            style={{ cursor: 'pointer' }}
          >
            Vea
          </span>
          . It's nice to meet you!
        </span>
      </Typography>

      <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', marginTop: '40px', marginBottom: '3px', color: '#003046'}} variant="h4" gutterBottom className={isVisible ? 'fade-in intro-text' : 'intro-text'} style={{ fontFamily: 'Nunito, sans-serif', fontWeight: 600 }}>
          I'm passionate about:
    </Typography>

      <TextRotator
        texts={['Quantum Computing', 'Machine Learning', 'Algorithm Design', 'Web Development']}
         interval={3000}
         className="intro-text other-color-changing"
     />

      <div className="flex flex-wrap gap-6 p-4 justify-center w-full max-w-5xl mx-auto">
        {/* about */}
        <button
          onClick={() => {
            if (!windows.some((w) => w.id === "about")) {
              setWindows((prev) => [
                ...prev,
                { id: "about", zIndex: prev.length + 1, type: "about" },
              ]);
            }
          }}
          className="desktop-icon-button"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img
            src={about}
            className="desktop-icon-image"
            alt="About button"
            style={{
              width: "85px",   // adjust as needed
              height: "auto",
              display: "block",
            }}
          />
        </button>
        {/* education */}
        <button
          onClick={() => {
            if (!windows.some((w) => w.id === "education")) {
              setWindows((prev) => [
                ...prev,
                { id: "education", zIndex: prev.length + 1, type: "education" },
              ]);
            }
          }}
          className="desktop-icon-button"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img
            src={education}
            className="desktop-icon-image"
            alt="Education button"
            style={{
              width: "127px",   // adjust as needed
              height: "auto",
              display: "block",
            }}
          />
        </button>
        {/* experience */}
        <button
          onClick={() => {
            if (!windows.some((w) => w.id === "experience")) {
              setWindows((prev) => [
                ...prev,
                { id: "experience", zIndex: prev.length + 1, type: "experience" },
              ]);
            }
          }}
          className="desktop-icon-button"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img
            src={experience}
            className="desktop-icon-image"
            alt="Experience button"
            style={{
              width: "130px",   // adjust as needed
              height: "auto",
              display: "block",
            }}
          />
        </button>
        {/* Research */}
        <button
          onClick={() => {
            if (!windows.some((w) => w.id === "research")) {
              setWindows((prev) => [
                ...prev,
                { id: "research", zIndex: prev.length + 1, type: "research" },
              ]);
            }
          }}
          className="desktop-icon-button"
        >
          <img
            src={research}
            className="desktop-icon-image"
            alt="Research button"
            style={{
              width: "130px",   // adjust as needed
              height: "auto",
              display: "block",
            }}
          />
        </button>
        {/* Affiliations */}
        <button
          onClick={() => {
            if (!windows.some((w) => w.id === "affiliations")) {
              setWindows((prev) => [
                ...prev,
                { id: "affiliations", zIndex: prev.length + 1, type: "affiliations" },
              ]);
            }
          }}
          className="desktop-icon-button"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <img
            src={recognitions}
            className="desktop-icon-image"
            alt="Affiliations button"
            style={{
              width: "127px",   // adjust as needed
              height: "auto",
              display: "block",
            }}
          />
        </button>
        {/* hobbies */}
        <button
          onClick={() => {
            if (!windows.some((w) => w.id === "hobbies")) {
              setWindows((prev) => [
                ...prev,
                { id: "hobbies", zIndex: prev.length + 1, type: "hobbies" },
              ]);
            }
          }}
          className="desktop-icon-button"
        >
          <img
            src={hobbies}
            className="desktop-icon-image"
            alt="Hobbies button"
            style={{
              width: "130px",   // adjust as needed
              height: "auto",
              display: "block",
            }}
          />
        </button>
      </div>
      
        <ThemeSwitcher />

      </Box>
      </Box>
      
    </div>

    {windows.map((win) => {

        // my strat here is to custom set height and width so it can change based on content
        // like about may need to be longer and 800 by 570 might not be enough. plus i'd want it to span
        const { width, height } = (() => {
          if (win.id === "apod") return { width: 900, height: 600 };
          if (win.id === "about") return { width: 730, height: 550 };
          if (win.id === "education") return { width: 800, height: 570 };
          if (win.id === "experience") return { width: 800, height: 570 };
          if (win.id === "research") return { width: 1300, height: 670 };
          if (win.id === "hobbies") return { width: 1200, height: 700 };
          return { width: 800, height: 570 }; // fallback in case i go and forget to set the dims
        })();

        return (
          <Draggable key={win.id} handle=".drag-handle" bounds="parent">
            <div
              style={{
                zIndex: win.zIndex,
                position: "absolute",
                top: 20 + win.zIndex,
                left: 200 + win.zIndex * 10,
                width: `${width}px`,
                height: `${height}px`,
              }}
              className="border-2 bg-white rounded-xl"
            >
              <div
                className="themed-header-bg text-white p-3 drag-handle flex justify-between items-center rounded-t-xl font-mono text-sm"
                onMouseDown={() => bringToFront(win.id)}
              >
                <span>
                  {(() => {
                    if (win.id === "about") {
                      return 'printf("About\\n");';
                    } else if (win.id === "apod") {
                      return 'cout<<"NASA Astronomy Picture of the Day"<<endl;';
                    } else if (win.id === "education") {
                      return 'print("Education")';
                    } else if (win.id === "experience") {
                      return 'console.log("Experience");';
                    } else if (win.id === "research") {
                      return 'julia> Research';
                    } else if (win.id === 'affiliations') {
                      return 'from qiskit.circuit import Affiliations';
                    }
                    else {
                      return 'npm run Hobbies';
                    }
                  })()}
                </span>
                <button
                  onClick={() => closeWindow(win.id)}
                  className="text-red-500 text-xl font-bold hover:text-red-700"
                >
                  X
                </button>
              </div>
              <div className="p-4 h-[calc(100%-48px)] overflow-y-auto">
                {win.type === "apod" && <Apod />}
                {win.type === "about" && <About />}
                {win.type === "education" && <Education />}
                {win.type === "experience" && <Experience />}
                {win.type === "research" && <Research />}
                {win.type === "affiliations" && <Affiliations />}
                {win.type === "hobbies" && <Portfolio />}
              </div>
            </div>
          </Draggable>
        );
      })}

      {/* <Typography sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '15px', marginBottom: '5px', color: theme.palette.common.black}} variant="h6" gutterBottom className={isVisible ? 'fade-in intro-text' : 'intro-text'} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
        You can reach out to me via LinkedIn or email, or check out my GitHub:
      </Typography> */}

      {/* hopefully does theming switch?? */}
      
      <Contact />

      {/* MOBILE WARNING MODAL */}
      <Modal
        open={mobileWarningOpen}
        onClose={handleCloseWarning}
        aria-labelledby="mobile-warning-title"
        aria-describedby="mobile-warning-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(5px)', // Blurs the background site slightly
        }}
      >
        <Box
          sx={{
            backgroundColor: '#1F2937', // Matches your bezel color
            border: '2px solid white',
            borderRadius: '12px',
            boxShadow: 24,
            padding: '30px',
            maxWidth: '90%',
            width: '400px',
            textAlign: 'center',
            color: 'white',
            outline: 'none',
            fontFamily: 'Nunito, sans-serif',
          }}
        >
          {/* Warning Icon/Emoji */}
          <Typography variant="h2" sx={{ marginBottom: '15px' }}>
            📱⚠️
          </Typography>

          <Typography 
            id="mobile-warning-title" 
            variant="h6" 
            component="h2" 
            sx={{ fontWeight: 'bold', fontFamily: 'Courier', marginBottom: '10px' }}
          >
            System.Warning
          </Typography>

          <Typography id="mobile-warning-description" sx={{ marginBottom: '25px', lineHeight: 1.6 }}>
            Hey! Looks like you're accessing my website on a mobile device. <br/>
            This site is designed as a desktop OS experience, so some features might look a bit odd on a small screen.
          </Typography>

          <Button 
            onClick={handleCloseWarning}
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: '#1F2937',
              fontWeight: 'bold',
              fontFamily: 'Courier',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#e0e0e0',
              }
            }}
          >
            Okay, proceed anyway
          </Button>
        </Box>
      </Modal>

    </div>
  );
}

