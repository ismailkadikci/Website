import React from 'react';
import './SectionTitle.css';

export default function SectionTitle
(
  {
    heading = 'need heading',
  }
) 
{
  return (
    <div className="section-title">
      <h3>{heading}</h3>
    </div>
  );
}
