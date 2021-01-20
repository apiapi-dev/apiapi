import React from 'react';
import linkedin from '../../assets/images/linkedin.png';

type CardProps = {
  name: string;
  role: string;
  url: string;
};

export default function Card({ name, role, url }: CardProps) {
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
