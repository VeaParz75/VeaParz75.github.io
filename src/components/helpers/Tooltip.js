import React from 'react';
import './Tooltip.css'; // Add styles in Tooltip.css

const Tooltip = ({ text, children }) => {
    return (
        <div className="tooltip-container">
            {children}
            <div className="tooltip-text">{text}</div>
        </div>
    );
};

export default Tooltip;
