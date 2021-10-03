import React from 'react';
import Section from '../../../components/section/Section';
import './Contact.css';

const Contact = () => {
  return (
    <Section className='contact' id='contact'>
      <div>
        <h3>Have a project in mind</h3>
        <h1 className='home-title contact-title'>Let me help you</h1>
      </div>
      <div>
        <button className='contact-btn'>Contact now</button>
      </div>
    </Section>
  );
};

export default Contact;
