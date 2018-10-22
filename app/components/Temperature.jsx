import React from 'react';
import Button from './Button.jsx';

const Temperature = ({
  onTempUp,
  onTempDown,
  tempIndex,
  tempRange
}) => (
    <div className="tempreture">
      <span>Outside Temperature</span>
      <div className="tempreture-input">
        <div className="tempreture-left">
          <span id="temp_number">{tempRange[tempIndex]}</span>
          <span> °</span>
        </div>
        <div className="tempreture-right">
          <Button
            id="temp_up"
            buttonClick={onTempUp}
            className="tempreture-button-up"
          />
          <Button
            id="temp_down"
            buttonClick={onTempDown}
            className="tempreture-button-down"
          />
        </div>
      </div>
    </div>
  );

export default Temperature;