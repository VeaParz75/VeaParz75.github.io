import React, { useState, useEffect } from 'react';

// Define your available themes
const THEME_OPTIONS = [
  { key: 'default', name: 'Vea\'s Theme' },
  { key: 'acnh', name: 'Animal Crossing' },
  { key: 'utdr', name: 'Undertale/Deltarune' },
  { key: 'zelda', name: 'The Legend of Zelda' },
];

const ThemeSwitcher = () => {
  // State holds the KEY of the currently active theme
  const [currentTheme, setCurrentTheme] = useState('default'); 

  // Sets the data-theme attribute whenever the theme key changes
  useEffect(() => {
    // Only set the attribute if a theme is selected
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
  }, [currentTheme]);

  // Handler for setting the new theme
  const handleThemeChange = (themeKey) => {
    setCurrentTheme(themeKey); 
  };

  return (
    <div className="flex flex-wrap gap-6 p-4 justify-center w-full max-w-5xl mx-auto">
      
      {THEME_OPTIONS.map((theme) => (
        <div key={theme.key} className="flex items-center gap-3">
            <span className="font-mono font-bold text-sm text-gray-700">
                {theme.name}
            </span>

            <label className="relative inline-flex items-center cursor-pointer">
                <input 
                    type="checkbox" 
                    className="sr-only peer" 
                    // CRUCIAL: Check if this theme key matches the current state
                    checked={currentTheme === theme.key} 
                    // When this switch is toggled, set the state to this theme's key
                    onChange={() => handleThemeChange(theme.key)} 
                />
                
                {/* The Track (Background pill) - Ensure your Tailwind/CSS classes 
                  here correctly handle the `peer-checked` state.
                */}
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
            </label>
        </div>
      ))}
    </div>
  );
};

export default ThemeSwitcher;