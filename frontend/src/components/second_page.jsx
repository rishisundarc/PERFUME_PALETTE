// AnotherPage.js
import React from 'react';
import ButtonComponent from './button_main';

const AnotherPage1 = () => {
  const handleClick = () => {
    console.log('World');
  };

  return (
    <div>
      <h1>World Page</h1>
      <ButtonComponent onClickFunction={handleClick} buttonText="World" />
    </div>
  );
};

export default AnotherPage1;
