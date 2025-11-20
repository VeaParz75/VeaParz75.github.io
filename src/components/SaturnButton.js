import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './SaturnButton.css';

const SaturnButton = ({ to, children, ...props }) => {
  const [canCreateSaturns, setCanCreateSaturns] = useState(true);

  const handleMouseEnter = (e) => {
    if (canCreateSaturns) {
      createSaturns(e);
      setCanCreateSaturns(false);
      setTimeout(() => setCanCreateSaturns(true), 1000); // 1 second delay
    }
  };

  const createSaturns = (event) => {
    const numSaturns = 5;
    const buttonRect = event.target.getBoundingClientRect();

    for (let i = 0; i < numSaturns; i++) {
      const saturn = document.createElement('div');
      saturn.classList.add('saturn');
      document.body.appendChild(saturn);

      const x = event.clientX + (Math.random() - 0.5) * buttonRect.width;
      const y = event.clientY + (Math.random() - 0.5) * buttonRect.height;

      saturn.style.left = `${x}px`;
      saturn.style.top = `${y}px`;

      saturn.addEventListener('animationend', () => {
        saturn.remove();
      });
    }
  };

  return (
    <Button component={Link} to={to} onMouseEnter={handleMouseEnter} {...props}>
      {children}
    </Button>
  );
};

export default SaturnButton;
