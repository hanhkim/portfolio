import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import darkModeImg from '../../assets/darkMode.png';
import lightModeImg from '../../assets/lightMode.png';

import './DarkModeBtn.css';

const DarkModeBtn = () => {
  const {
    state: { darkMode },
    dispatch,
  } = useContext(ThemeContext);

  const onChangeMode = () => {
    const type = darkMode ? 'LIGHT_MODE' : 'DARK_MODE';
    dispatch({ type: type });
  };

  return (
    <img
      width="30"
      height="30"
      src={darkMode ? lightModeImg : darkModeImg}
      alt="theme"
      onClick={onChangeMode}
      className="dark-mode-btn"
    />
  );
};

export default DarkModeBtn;
