import React from 'react';
import linkedin from '../../assets/images/linkedin.png';
import GitHub from '../../assets/images/github-card.png';
type CardProps = {
  name: string;
  role: string;
  liurl: string;
  giurl: string;
};

export default function Card({ name, role, liurl, giurl }: CardProps) {
  return (
    <div className="name-card">
      <h2>{name}</h2>
      <p>{role}</p>
      <a href={liurl}>
        <img src={linkedin}></img>
      </a>
      <a href={giurl}>
        <img src={GitHub}></img>
      </a>
    </div>
  );
}
