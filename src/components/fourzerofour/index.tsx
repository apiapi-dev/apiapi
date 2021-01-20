import React from 'react';
import warning from '../images/error-box.svg';

export default function index() {
  return (
    <div>
      <img src={warning} alt="A box with documents with error warnings"></img>
      <h1>404</h1>
    </div>
  );
}
