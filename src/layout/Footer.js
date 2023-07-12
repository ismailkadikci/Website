import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { MdEmail, MdLocalPhone, MdPlace} from 'react-icons/md';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='footer-logo'>
            <Link to='/website/' className='social-logo'>
              3M DİNAMİK
              <i className='fab fa-typo3' />
            </Link>
          </div>
        <div className='social-media-wrap'>
          <div className='social-icons'>
          <a 
              className='social-icon-link'
              href='https://www.youtube.com/@briandesign'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </a>

            <a 
              className='social-icon-link'
              href='https://www.youtube.com/@briandesign'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='YouTube'
            >
              <i className='fab fa-youtube' />
            </a>

            <a 
              className='social-icon-link'
              href='https://www.youtube.com/@briandesign'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </a>

            <a 
              className='social-icon-link'
              href='https://www.youtube.com/@briandesign'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Linkedin'
            >
              <i className='fab fa-linkedin' />
            </a>

            <a 
              className='social-icon-link'
              href='https://www.youtube.com/@briandesign'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </a>
          </div>
        </div>
      </section>

      <section className='footer-contact'>
        <div className='contact-items'>
        <div className='contact-item-phone'>
            <div className='contact-icon'><MdLocalPhone /></div>
            <div className='information'>+90 541 299 2698</div>
          </div>
          <div className='contact-item-address'>
            <div className='contact-icon'><MdPlace /></div>
            <div className='information'>Özevler Mahallesi 944. Sokak No:22/19 Yenimahalle/Ankara</div>
          </div>
          <div className='contact-item-email'>
            <div className='contact-icon'><MdEmail /></div>
            <div className='information'>ismailkadikci@gmail.com</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;