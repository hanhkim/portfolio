import React from 'react';
import Section from '../../../components/section/Section';
import babyImg from '../../../assets/baby.jpg';
import flowerImg from '../../../assets/flower.jpg';
import './About.css';

function About() {
  return (
    <Section className="about" id="about">
      <div className="about-col about-text toast">
        <h3>Let me introduce myself</h3>
        <h1 className="home-title">ABOUT ME</h1>
        <p className="about-description">
          I am a frontend developer based in Ho Chi Minh City, Vietnam, with a degree from Ho Chi
          Minh University of Science. My work is driven by a commitment to continuous improvement,
          focusing on refining solutions to enhance efficiency and effectiveness over time.
        </p>
        <div>
          <button className="about-btn about-btn__work">Works</button>
          <button className="about-btn about-btn__more">Read More</button>
        </div>
      </div>
      <div className="about-col about-img toast">
        <div className="about-img__item about-img__top">
          <img src={babyImg} alt="img" />
        </div>
        <div className="about-img__item about-img__bottom">
          <img src={flowerImg} alt="img" />
        </div>
      </div>
    </Section>
  );
}

export default About;
