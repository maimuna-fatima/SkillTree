import { useState, useEffect } from 'react';
import './RippleEffect.css';

const RippleEffect = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fluid-ripple"
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
      }}
    />
  );
};

export default RippleEffect;