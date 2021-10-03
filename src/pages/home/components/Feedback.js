import React from 'react';
import Section from '../../../components/section/Section';

const Feedback = () => {
  return (
    <Section>
      <div className='feedback-heading'>
        <h3>See what my clients say about me</h3>
        <h1 className='home-title'>Feedbacks</h1>
      </div>
      <div className='feedback-list'>
        <div className='feedback-item'>
          <div>
            <p>
              Ayan is a person of commitment. He is really good at what he is
              doing. I really like his work. Especially the unique point of view
              of designing.
            </p>
          </div>
          <h3>Shaif Arfan</h3>
          <p>CEO,</p>
          <p>WEB CIFAR</p>
        </div>
      </div>
      <div className='feedback__btns'>abc</div>
    </Section>
  );
};

export default Feedback;
