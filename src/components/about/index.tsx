import React from 'react';
import Card from './Card';

export default function index() {
  return (
    <div className="about">
      <h2>About apiapi</h2>
      <p>.....</p>
      <h2>Meet the creators</h2>
      <div className="creators">
        <Card
          name="Benjamin Swerdlow"
          role="Lead Backend developer"
          liurl="https://www.linkedin.com/in/benswerdlow/"
          giurl="https://github.com/theswerd"
        ></Card>
        <Card
          name="Joshua Bubar"
          role="Frontend developer"
          liurl="https://www.linkedin.com/in/jbubar/"
          giurl="https://github.com/jbubar"
        ></Card>
        <Card
          name="Martha Martinez"
          role="Frontend developer"
          liurl="https://www.linkedin.com/in/mmartham/"
          giurl="https://github.com/martham0"
        ></Card>
      </div>
    </div>
  );
}
