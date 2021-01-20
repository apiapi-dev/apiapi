import React from 'react';
import Card from './Card';

export default function index() {
  return (
    <div className="about">
      <h2></h2>
      <h2>Meet the creaters</h2>
      <div className="creaters">
        <Card
          name="Benjamin Swerdlow"
          role="Lead Backend developer"
          url="https://www.linkedin.com/in/benswerdlow/"
        ></Card>
        <Card
          name="Josh Bubar"
          role="Frontend developer"
          url="https://www.linkedin.com/in/jbubar/"
        ></Card>
        <Card
          name="Martha Martinez"
          role="Frontend developer"
          url="https://www.linkedin.com/in/mmartham/"
        ></Card>
      </div>
    </div>
  );
}
