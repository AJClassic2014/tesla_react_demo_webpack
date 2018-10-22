import React from 'react';

const Fan = ({
  fanActive,
  onFanChange
}) => (
    <div class="fan">
      <label id="fan" onClick={onFanChange} className={fanActive ? "fan-button active" : "fan-button"}>
        <span>{`ac ${fanActive ? "on" : "off"}`}</span>
        <i class="switch"></i>
      </label>
    </div>
  );

export default Fan;