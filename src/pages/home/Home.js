import React from 'react';
import Main from './components/Main';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
// import Feedbacks from './components/Feedback';
import Contact from './components/Contact';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Main />
      <About />
      <Services />
      <Project />
      {/* <Feedbacks /> */}
      <Contact />
    </div>
  );
};

export default Home;
