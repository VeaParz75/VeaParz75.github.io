import React, { useState } from 'react';
import Draggable from 'react-draggable';

const Drag = () => {
  const [showWindow, setShowWindow] = useState(false);

  return (
    <div className="h-screen bg-gray-200 p-8">
      <button
        onClick={() => setShowWindow(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
      >
        Open Window
      </button>

      {showWindow && (
        <Draggable handle=".window-header">
          <div className="absolute top-20 left-20 w-80 bg-white border border-gray-500 shadow-lg">
            <div className="window-header bg-blue-700 text-white p-2 cursor-move flex justify-between">
              <span>My Window</span>
              <button
                onClick={() => setShowWindow(false)}
                className="hover:bg-red-600 px-2"
              >
                X
              </button>
            </div>
            <div className="p-4 text-sm">
              <p>This is a draggable window!</p>
            </div>
          </div>
        </Draggable>
      )}
    </div>
  );
};

export default Drag;