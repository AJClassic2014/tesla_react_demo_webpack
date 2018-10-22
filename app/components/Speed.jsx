import React from 'react';
import Button from './Button.jsx';

const Speed = ({
  speedIndex,
  speedRange,
  onSpeedUp,
  onSpeedDown
}) => (
    <div className="speed">
      <span>Speed</span>
      <div className="speed-input">
        <div className="speed-left">
          <span id="speed-number">{speedRange[speedIndex]}</span>
          <span>mph</span>
        </div>
        <div className="speed-right">
          <Button
            id="speed_up"
            buttonClick={onSpeedUp}
            className="speed-button-up"
          />
          <Button
            id="speed_down"
            buttonClick={onSpeedDown}
            className="speed-button-down"
          />
        </div>

      </div>

    </div>
  );

export default Speed;