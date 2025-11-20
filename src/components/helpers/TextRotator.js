import React, { useState, useEffect } from 'react';
import './TextRotator.css';

const TextRotator = ({ texts, interval = 3000, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setIsAnimating(false);
            }, 500);
        }, interval);

        return () => clearTimeout(timeoutId);
    }, [currentIndex, interval, texts.length]);

    return (
        <div className="text-rotator">
            <div className={`rotating-text ${isAnimating ? 'animating' : ''} ${className}`}>
                {texts[currentIndex]}
            </div>
        </div>
    );
};

export default TextRotator;
