import React, { createContext, useReducer, useContext } from 'react';

export const ThemeContext = createContext();

const initialState = { darkMode: true };

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIGHT_MODE':
      return { ...state, darkMode: false };
    case 'DARK_MODE':
      return { ...state, darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
