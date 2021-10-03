import React, { useState } from 'react';
import { HamburgerMenu } from '../icons/Icons';
import * as classnames from 'classnames';
import './Header.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const onClickMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='header'>
      <nav className='navbar'>
        <a href='#' className='nav-logo'>
          Shay
        </a>
        <ul
          className={classnames({
            'nav-menu': true,
            'nav-menu-active': showMenu,
          })}
        >
          <li className='nav-item'>
            <a href='#main'>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#about'>About</a>
          </li>
          <li className='nav-item'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='nav-item'>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
        <button
          className={classnames({
            hamburger: true,
            'hamburger-active': showMenu,
          })}
          onClick={onClickMenu}
        >
          <span class='bar'></span>
          <span class='bar'></span>
          <span class='bar'></span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
