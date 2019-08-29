import React from 'react';

const Slider = ({ percentage, label }) => {
  return (
    <div className="slider">
      <p>{label}</p>
      <input readOnly type="range" step="0.1" min="0" max="1" value={percentage} />
    </div>
  )
}

export default Slider;