import './HeroSection.css';
import React from 'react';
import '../..//App.css';
import ImageSlider from "../projects/ImageSlider";

// import { Button } from '../../components/Button.js';
// import video2 from '../../videos/video-2.mp4';

import heroImage from '../../images/img-8.jpg';

import image1 from "../../images/img-4.jpg";
import image2 from "../../images/img-2.jpg";
import image3 from "../../images/img-3.jpg";

const slides = [
    { url:  image1, title: "beach" },
    { url: image2, title: "beach" },
    { url: image3, title: "beach" },
  ];


function HeroSection() {
  return (
    <div className='hero-container'>
        <ImageSlider slides = {slides}/>

        {/* <img src={heroImage} alt=''/> */}
        {/* <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                GET STARTED
            </Button>    
            <Button className='btns' buttonStyle='btn-primary' buttonSize='btn--large'>
                WATCH TRAILER <i className='far fa-play-circle'/>
            </Button>    
                
        </div>       */}
    </div>
  )
}

export default HeroSection
