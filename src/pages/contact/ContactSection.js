import React from 'react';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import ContactForm from './ContactForm';
import ContactInfoItem from './ContactInfoItem';
import SectionTitle from './SectionTitle';
import './ContactSection.css';

export default function ContactSection() 
{
  return (
    <div className='contactSectionStyle'>
      <div className="contact-container">
        <SectionTitle heading="İLETİŞİM" />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem icon={<MdLocalPhone />} text="+90 541 414 41 41" />
            <ContactInfoItem icon={<MdEmail />} text="ismailkadikci@gmail.com" />
            <ContactInfoItem text="Ankara, Turkiye" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
