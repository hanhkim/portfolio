import React, { useState } from 'react';
import * as classnames from 'classnames';

import DarkModeBtn from '../buttons/DarkModeBtn';

import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <ul
          className={classnames({
            'nav-menu': true,
            'nav-menu-active': showMenu,
          })}
        >
          <li>
            <DarkModeBtn />
          </li>
          <li className="nav-item">
            <a href="#main">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#projects">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button
          className={classnames({
            hamburger: true,
            'hamburger-active': showMenu,
          })}
          onClick={onClickMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
