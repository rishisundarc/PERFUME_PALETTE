// AnotherPage.js
import React from 'react';
import ButtonComponent from './button_main';

const AnotherPage = () => {
  const handleClick = () => {
    console.log('Hello');
  };

  return (
    <div>
      <h1>Hello Page</h1>
      <ButtonComponent onClickFunction={handleClick} buttonText="HELLO" />
    </div>
  );
};

export default AnotherPage;
