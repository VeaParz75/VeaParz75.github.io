// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home'; // Import the Home component
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
// import Contacts from './components/Contact'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* Set up a route for the home page */}
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          {/* <Route path="/contact" element={<Contacts />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
