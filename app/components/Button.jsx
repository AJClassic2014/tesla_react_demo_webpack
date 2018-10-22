import React from 'react';

const Button = ({
  id,
  buttonClick,
  className
}) => (
    <div>
      <button
        id={id}
        type="button"
        onClick={buttonClick}
        className={className}
      >
      </button>
    </div>
  );

export default Button;