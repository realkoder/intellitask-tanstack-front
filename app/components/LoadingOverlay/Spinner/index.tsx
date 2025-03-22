import React from 'react';

interface SpinnerProps {
  size?: number; // Size in pixels
  color?: string; // Tailwind CSS color class
}

const Spinner: React.FC<SpinnerProps> = ({
  size = 64,
  color = 'border-purple-500',
}) => {
  const spinnerStyle: React.CSSProperties = {
    width: size,
    height: size,
  };

  return (
    <div
      style={spinnerStyle}
      className={`animate-spin rounded-full border-4 border-t-transparent ${color}`}
    ></div>
  );
};

export default Spinner;
