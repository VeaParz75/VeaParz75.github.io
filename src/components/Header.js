// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Vea Iyer
          </Link>
        </Typography>
        <Button component={Link} to="/about" color="inherit">About</Button>
        <Button component={Link} to="/resume" color="inherit">Resume</Button>
        <Button component={Link} to="/projects" color="inherit">Projects</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
