import React from 'react';
import warning from '../../assets/images/warning.png';

export default function index() {
  return (
    <div className="warning">
      <img src={warning} alt="A box with documents with error warnings"></img>
      <div className="message">
        <h1>
          404 <span className="blink"> |</span>
        </h1>
        <p>The page you are looking for cannot be found. Sorry! </p>
      </div>
    </div>
  );
}
