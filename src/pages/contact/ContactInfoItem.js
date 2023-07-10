import React from 'react';
import { MdPlace } from 'react-icons/md';
import PText from '../../components/PText.js';
import './ContactInfoItem.css'

export default function ContactInfoItem
(
  {
    icon = <MdPlace />,
    text = 'I need text ',
  }
) 
{
  return (
    <div className='itemStyles'>
      <div className="icon">{icon}</div>
      <div className="info">
        <PText>{text}</PText>
      </div>
    </div>
  );
}
