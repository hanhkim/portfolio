import React from 'react';
import Section from '../../../components/section/Section';
import './Services.css';

const Services = () => {
  return (
    <Section className="service">
      <div className="service-title">
        <h3>What I will do for you</h3>
        <h1 className="home-title">Services</h1>
      </div>
      <div className="service-list">
        <div className="service-list__item">
          <div className="service-list__item-heading">
            <div className="service-list__item-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"></path>
              </svg>
            </div>
            <h2>UI/UX Optimization</h2>
          </div>
          <div>
            <p>
              Translate design mockups into interactive, user-friendly interfaces. mprove user
              experience (UX) through performance optimization, accessibility enhancements, and
              seamless interactions.
            </p>
          </div>
        </div>
        <div className="service-list__item">
          <div className="service-list__item-heading">
            <div className="service-list__item-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path>
              </svg>
            </div>
            <h2>Custom Web Development</h2>
          </div>
          <div>
            <p>
              Build responsive, high-performance websites and web applications tailored to the
              client’s needs. Ensure cross-browser compatibility and mobile-friendly designs.
            </p>
          </div>
        </div>
        <div className="service-list__item">
          <div className="service-list__item-heading">
            <div className="service-list__item-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.8 12.5v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.3-.2H7c-.1 0-.2.1-.3.2l-.2 1.3c-.3.1-.6.3-.9.5l-1.3-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.2-.1.3-.1.4l1 1.7c.1.1.2.2.3.1l1.4-.4c.3.2.6.4.9.5l.2 1.3c-.1.1.1.2.2.2h2c.1 0 .2-.1.3-.2l.2-1.3c.3-.1.6-.3.9-.5l1.3.5c.1 0 .2 0 .3-.1l1-1.7c.1-.1 0-.2-.1-.3l-1.1-.9zM8 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z"></path>
              </svg>
            </div>
            <h2>Performance</h2>
          </div>
          <div>
            <p>
              Optimize website speed, loading times, and overall performance. Provide ongoing
              maintenance, updates, and support to ensure smooth operation and security
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
