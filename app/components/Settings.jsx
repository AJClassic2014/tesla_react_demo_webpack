import React from 'react';
import Speed from './Speed.jsx';
import Temperature from './Temperature.jsx';
import Fan from './Fan.jsx';
import Wheels from './Wheels.jsx';

const Settings = ({
  onSpeedUp,
  onSpeedDown,
  onTempUp,
  onTempDown,
  speedIndex,
  tempIndex,
  wheelsSize,
  onLargeWheels,
  onSmallWheels,
  fanActive,
  onFanChange,
  speedRange,
  tempRange
}) => (
    <div className="custom-area">
      <div className="left">
        <Speed
          speedIndex={speedIndex}
          onSpeedUp={onSpeedUp}
          onSpeedDown={onSpeedDown}
          speedRange={speedRange}
        />
        <Temperature
          onTempUp={onTempUp}
          onTempDown={onTempDown}
          tempIndex={tempIndex}
          tempRange={tempRange}
        />
      </div>
      <Fan
        fanActive={fanActive}
        onFanChange={onFanChange}
      />
      <div className="right">
        <Wheels
          wheelsSize={wheelsSize}
          onLargeWheels={onLargeWheels}
          onSmallWheels={onSmallWheels}
        />
      </div>

    </div>
  );

export default Settings;