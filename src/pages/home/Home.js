import React, { useState } from 'react';
import Main from './components/Main';
import About from './components/About';
import Services from './components/Services';
import Project from './components/Project';
// import Feedbacks from './components/Feedback';
import Contact from './components/Contact';
import './Home.css';

const Home = ({ mousePosition }) => {
  // console.log(mousePosition);
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

export const Mouse = (props) => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setState({
      x: clientX,
      y: clientY,
    });
  };

  return (
    <div
      style={{ height: '100%', position: 'relative' }}
      onMouseMove={handleMouseMove}
    >
      {props.render(state)}
    </div>
  );
};

export default Home;
