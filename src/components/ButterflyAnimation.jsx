import React from "react";

const ButterflyAnimation = () => {
  return (
    <>
      <div className="stage pointer-events-none">
        <div className="mariposa">
          <div className="mariposa-turn">
            <div className="mariposa-flutter"></div>
          </div>
        </div>

        <div className="mariposa">
          <div className="mariposa-turn">
            <div className="mariposa-flutter"></div>
          </div>
        </div>

        <div className="mariposa">
          <div className="mariposa-turn">
            <div className="mariposa-flutter"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButterflyAnimation;
