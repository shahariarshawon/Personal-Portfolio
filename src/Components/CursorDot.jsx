import React, { useEffect, useRef } from 'react';

const CursorDot = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', moveCursor);
    return () => document.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed top-0 left-0 w-4 h-4 bg-cyan-300 rounded-full z-[9999] transition-all duration-75 ease-out shadow-md shadow-cyan-300"
      style={{ transform: 'translate(-50%, -50%)' }}
    ></div>
  );
};

export default CursorDot;
