import React, { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import * as classnames from 'classnames';

import './DarkModeBtn.scss';

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
    <div className='dark-mode'>
      <label htmlFor='switch'>
        <div
          className={classnames({ toggle: true, 'toggle-right': darkMode })}
        ></div>
        <div className='names'>
          <p className={classnames({ light: !darkMode })}>Light</p>
          <p className={classnames({ dark: darkMode })}>Dark</p>
        </div>
      </label>
      <input type='checkbox' id='switch' onChange={onChangeMode} />
    </div>
  );
};

export default DarkModeBtn;
