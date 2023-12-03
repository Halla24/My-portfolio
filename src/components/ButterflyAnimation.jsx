// ButterflyAnimation.jsx
import React from 'react';


const ButterflyAnimation = () => {
  return (
    <div className="stage">
      {[...Array(3)].map((_, index) => (
        <div className="mariposa" key={index}>
          <div className="mariposa-turn">
            <div className="mariposa-flutter"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ButterflyAnimation;
