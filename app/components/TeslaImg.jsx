import React from 'react';

const TeslaImg = ({
  wheelsSize
}) => (
    <div className="tesla-img">
      <div className="locate-wheels">
        <div className={wheelsSize === 19 ? "left-wheel-19" : "left-wheel-21"}></div>
        <div className={wheelsSize === 19 ? "right-wheel-19" : "right-wheel-21"}></div>
      </div>
    </div>
  );

export default TeslaImg;