import React from 'react';

import Search from '../header/Search';
import ToggleMode from '../header/ToggleMode';

import classes from './Header.module.css';

const Header = ({ onToggleDarkMode }) => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Keep</h1>
      <Search />
      <ToggleMode onToggleDarkMode={onToggleDarkMode} />
    </header>
  );
};

export default Header;
