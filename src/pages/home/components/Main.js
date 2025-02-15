import React from 'react';
import imageMain from '../../../assets/image_main.JPG';
import linkedinImg from '../../../assets/linkedin-48.png';
import gitImg from '../../../assets/git-30.png';
import Section from '../../../components/section/Section';
import { RightArrow } from '../../../components/icons/Icons';
import './Main.css';

const Main = () => {
  return (
    <Section className="main fade-in" id="main">
      <h3 className="main-heading">
        <span>Hello, I am</span>
        <br />
        <span className="main-title main-title--site">Hanh Le</span>
      </h3>
      <div className="main-img">
        <img src={imageMain} alt="img" />
      </div>
      <div className="main-description">
        <div>
          <p>
            I am working as a software engineer for 5 years. I love to code and make new web
            experiences for the people
          </p>
        </div>
      </div>
      <div className="main-vertical main-left-vertical">
        <p style={{ transform: 'rotate(-180deg)', letterSpacing: '8px' }}>FOLLOW</p>
        <span className="main-arrow">
          <RightArrow />
        </span>
        <span className="main-vertical-link">
          <a
            style={{
              color: 'white',
              padding: '2px',
              transform: 'rotate(90deg)',
            }}
            href="https://www.linkedin.com/in/hanh-le-b3a5751aa/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedinImg} alt="linkin" width={30} style={{ transform: 'rotate(90deg)' }} />
          </a>{' '}
          <a
            style={{
              color: 'white',
              padding: '2px',
              transform: 'rotate(90deg)',
            }}
            href="https://github.com/hanhkim"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gitImg} alt="git" style={{ transform: 'rotate(90deg)' }} />
          </a>
        </span>
      </div>
      <div className="main-vertical main-right-vertical">
        SCROLL
        <span className="main-arrow">
          <RightArrow />
        </span>
      </div>
    </Section>
  );
};

export default Main;
