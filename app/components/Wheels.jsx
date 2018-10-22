import React from 'react';

const Wheels = ({
  wheelsSize,
  onLargeWheels,
  onSmallWheels,
}) => (
    <div className="right">
      <div className="wheels"><span>Wheels</span>
        <div className="wheels-input">
          <label id="size_19" 
          onClick={
            onSmallWheels
          } 
          className={
            wheelsSize === 19 ? "wheels-item size-19 active" : "wheels-item size-19"
            }>
            <p>19"</p>
          </label>
          <label id="size_21" onClick={
            onLargeWheels
          } 
          className={
            wheelsSize === 21 ? "wheels-item size-21 active" : "wheels-item size-21"
            }>
            <p>21"</p>
          </label>
        </div>
      </div>
    </div>
  );

export default Wheels;