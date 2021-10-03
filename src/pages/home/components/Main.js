import React from 'react';
import girl from '../../../assets/girl.jpeg';
import Section from '../../../components/section/Section';
import { RightArrow } from '../../../components/icons/Icons';
import './Main.css';

const Main = () => {
  return (
    <Section className='main' id='main'>
      <h3 className='main-heading'>
        <span>Hello, This is</span>
        <span className='main-title main-title--site'>Shay Le</span>
      </h3>
      <div className='main-img'>
        <img src={girl} alt='img' />
      </div>
      <div className='main-description'>
        <div>
          <p>
            I am working as a software engineer for 2 years. I love to code and
            make new web experiences for the people
          </p>
        </div>
        <button>See my works</button>
      </div>
      <div className='main-vertical main-left-vertical'>
        FOLLOW
        <span className='main-arrow'>
          <RightArrow />
        </span>
        <span className='main-vertical-link'>
          <a href='#'>FB</a> <a href='#'>TW</a> <a href='#'>GIT</a>{' '}
        </span>
      </div>
      <div className='main-vertical main-right-vertical'>
        SCROLL
        <span className='main-arrow'>
          <RightArrow />
        </span>
      </div>
    </Section>
  );
};

export default Main;
