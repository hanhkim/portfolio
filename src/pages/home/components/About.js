import React from 'react';
import Section from '../../../components/section/Section';
import babyImg from '../../../assets/baby.jpg';
import flowerImg from '../../../assets/flower.jpg';
import './About.css';

function About() {
  return (
    <Section className='about' id='about'>
      <div className='about-col about-text'>
        <h3>Let me introduce myself</h3>
        <h1 className='home-title'>ABOUT ME</h1>
        <p className='about-description'>
          I am a freelance website designer and developer from Chittagong,
          Bangladesh. I create professional websites. I love art and always try
          to show unique views to the audience through my design.
        </p>
        <div>
          <button className='about-btn about-btn__work'>Works</button>
          <button className='about-btn about-btn__more'>Read More</button>
        </div>
      </div>
      <div className='about-col about-img'>
        <div className='about-img__item about-img__top'>
          <img src={babyImg} alt='img' />
        </div>
        <div className='about-img__item about-img__bottom'>
          <img src={flowerImg} alt='img' />
        </div>
      </div>
    </Section>
  );
}

export default About;
