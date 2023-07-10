import React, { useRef, useState } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';

export default function ContactForm() 
{ 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const form = useRef();

  function SendMail(e)
  {
    e.preventDefault();

    emailjs.sendForm('service_jskdobl', 'template_lkkngmp', form.current, 'tmG-j-e7_YV_qA5A2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <form ref={form} onSubmit={SendMail}>
          <div className="form-group">
            <label htmlFor="name">
              Ad Soyad
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Mesaj
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </div>

          <div className='send-email'>          
            <button type='submit'>Gönder</button>
          </div>
      </form>
    </>
  );
}
