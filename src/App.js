// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'; // Import the Home component
import About from './components/About';
import Resume from './components/Resume';
import Education from './components/Education';
import Experience from './components/Experience';
import Research from './components/Research';
import Affiliations from './components/Affiliations';
import Portfolio from './components/Portfolio';
import TotallyNotSomething from './components/TotallyNotSomething';
import Apod from './components/Apod';
import ScrollToTop from './components/helpers/ScrollToTop';
import NotFound from './components/NotFound';
// import Drag from './components/TestingWindow';
//import ShootingStars from './components/ShootingStars'
// import Contacts from './components/Contact'

const App = () => {
  return (
    
    <Router>
      <div>
        {/* <Drag /> */}
        {/* <ShootingStars /> */}
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Set up a route for the home page */}
          <Route path="/apod" element={<Apod />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/research" element={<Research />} />
          <Route path="/affiliations" element={<Affiliations />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/secret" element={<TotallyNotSomething />} />
          <Route path="/*" element={<NotFound />} />
          {/* <Route path="/contact" element={<Contacts />} /> */}
        </Routes>
        <ScrollToTop />
      </div>
    </Router>
    
  );
};

export default App;
