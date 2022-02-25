import React, { Fragment, useEffect, useState } from 'react';
import Header from './Header';
import classes from './Layout.module.css';

const Layout = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkModeHandler = () => {
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    const savedMode = localStorage.getItem('react-notes-app-dark-mode');
    setDarkMode(savedMode === 'dim' ? true : false);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-dark-mode',
      darkMode ? 'dim' : 'light'
    );
  }, [darkMode]);

  return (
    <Fragment>
      <div className={`${darkMode ? 'dark-mode' : ''}`}>
        <Header onToggleDarkMode={toggleDarkModeHandler} />
        <main className={classes.container}>{props.children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
