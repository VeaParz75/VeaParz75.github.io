import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [enabled, setEnabled] = useState(false);

  // This watches the "enabled" state. 
  // If true -> set theme to matrix. If false -> remove theme.
  useEffect(() => {
    if (enabled) {
      document.documentElement.setAttribute('data-theme', 'acnh');
    } else {
      document.documentElement.setAttribute('data-theme', 'default');
    }
  }, [enabled]);

  return (
    <div className="flex items-center gap-3">
      {/* The Label Text */}
      <span className="font-mono font-bold text-sm text-gray-700">
        Animal Crossing
      </span>

      {/* The Switch Container */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
        
        {/* The Track (Background pill) */}
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
      </label>

      <span className="font-mono font-bold text-sm text-gray-700">
        The Legend of Zelda
      </span>

      {/* The Switch Container */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input 
          type="checkbox" 
          className="sr-only peer" 
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
        
        {/* The Track (Background pill) */}
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
      </label>
    </div>
  );
};

export default ThemeSwitcher;