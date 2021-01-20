import React from 'react';
import linkedin from '../../assets/images/linkedin.png';

export default function Card({ name, role, url }) {
  return (
    <div className="name-card">
      <h3>{name}</h3>
      <p>{role}</p>
      <a href={url}>
        <img src={linkedin}></img>
      </a>
    </div>
  );
}
