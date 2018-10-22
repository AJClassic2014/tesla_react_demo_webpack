import React from 'react';

const RangeList = ({ models }) => (
  <div className="state">
    <ul>
      {models.map((model) => <li><div className={
        `state-img state-img-${model.name}`
      }></div><span id={
        `model_${model.name}`
      }>{model.miles}</span></li>)}
    </ul>
  </div>
);

export default RangeList;