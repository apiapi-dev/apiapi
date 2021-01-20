import React from 'react';

export default function footer() {
  return (
    <div className="footer">
      <p> Created by: </p>
      <p>
        <a href="https://github.com/orgs/apiapi-dev/people/theswerd">
          Ben Swerdlow
        </a>{' '}
        -{' '}
        <a href="https://github.com/orgs/apiapi-dev/people/jbubar">
          {' '}
          Josh Bubar{' '}
        </a>{' '}
        -<a href="https://github.com/martham0"> Martha Martinez </a>
        <span className="blink"> |</span>
      </p>
    </div>
  );
}
