import React, { useState, useRef, useLayoutEffect } from 'react';
import Draggable from 'react-draggable';

export default function DraggableTB({ children }) {
  // 1. Create refs for both the draggable node and its boundary parent.
  const nodeRef = useRef(null);
  const parentRef = useRef(null);

  // 2. State to hold the calculated bounds.
  const [bounds, setBounds] = useState({ left: 0, top: 0, right: 0, bottom: 0 });

  // 3. We use useLayoutEffect to measure the elements *after* they are rendered
  //    but *before* the browser paints. This prevents any visual flicker.
  useLayoutEffect(() => {
    function updateBounds() {
      if (nodeRef.current && parentRef.current) {
        const parentRect = parentRef.current.getBoundingClientRect();
        const nodeRect = nodeRef.current.getBoundingClientRect();

        setBounds({
          top: 0,
          left: 0,
          // Max X position = parent width - node width
          right: parentRect.width - nodeRect.width,
          // Max Y position = parent height - node height
          bottom: parentRect.height - nodeRect.height,
        });
      }
    }

    // Update the bounds initially
    updateBounds();

    // Add a resize listener to re-calculate bounds when the window size changes
    window.addEventListener('resize', updateBounds);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateBounds);
    };
  }, []); // The empty dependency array ensures this effect runs only once on mount.

  // Set an initial position that's centered or wherever you prefer
  const initialX = window.innerWidth * 0.15;
  const initialY = window.innerHeight * 0.15;
  
  return (
    // We attach a ref to the parent to measure it
    <div ref={parentRef} className="fixed inset-0 pointer-events-none"> 
      <Draggable 
        handle=".drag-handle" 
        // The bounds are now controlled by our state
        bounds={bounds} 
        defaultPosition={{ x: initialX, y: initialY }}
        nodeRef={nodeRef}
      >
        <div
          ref={nodeRef}
          className="pointer-events-auto w-max" // `w-max` ensures it takes its content's width
          style={{ zIndex: 1000 }}
        >
          {children}
        </div>
      </Draggable>
    </div>
  );
}