import React, { useState, useEffect, useContext } from 'react';

import Home, { Mouse } from './pages/home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { ThemeContext } from './ThemeContext';
import * as classnames from 'classnames';
import './App.css';

const App = () => {
  const {
    state: { darkMode },
  } = useContext(ThemeContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  console.log('darkMode :>> ', darkMode);

  return (
    <div
      className={classnames({
        'main-application': true,
        'dark-theme': darkMode,
      })}
    >
      <Header />
      <main>
        {/* <Mouse render={({ x, y }) => <Home mousePosition={{ x: x, y: y }} />} /> */}
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
