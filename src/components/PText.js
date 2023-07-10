import React from 'react';
import './PText.css';

export default function PText({ children }) {
  return (
    <div className="para">
      <p>{children}</p>
    </div>
  );
}
