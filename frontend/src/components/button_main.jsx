// ButtonComponent.js
import React from 'react';

const ButtonComponent = ({ onClickFunction, buttonText }) => {
  return (
    <div>
      <button onClick={onClickFunction}>{buttonText}</button>
    </div>
  );
};

export default ButtonComponent;
