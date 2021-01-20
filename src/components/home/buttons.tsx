import React, { useState } from 'react';
// import Clipboard from 'react-clipboard.js';

export default function Buttons() {
  const [copied, setCopied] = useState(false);
  return (
    <div>
      {/* <Clipboard
        data-clipboard-text={document.querySelector('.tooltip-txt')?.innerHTML}
        onSuccess={() => setCopied(true)}
      > */}
      <div className="click2copy">
        <span className="code-txt">$ cli command of our choosing</span>
        <span className="tooltip-txt">Click to copy to clipboard</span>
      </div>
      {/* </Clipboard> */}
    </div>
  );
}
