// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }} >
            Vea Iyer
          </Link>
        </Typography>
        <Button component={Link} to="/about" color="inherit" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>About</Button>
        <Button component={Link} to="/resume" color="inherit" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Resume</Button>
        <Button component={Link} to="/projects" color="inherit" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>Projects</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
