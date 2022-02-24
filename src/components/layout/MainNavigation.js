import React from 'react';
import Search from '../navigation/Search';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Keep</div>
      <Search />
    </header>
  );
};

export default MainNavigation;
