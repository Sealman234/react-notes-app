import React, { Fragment, useState } from 'react';
import Header from './Header';
import classes from './Layout.module.css';

const Layout = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkModeHandler = () => {
    setDarkMode((prevState) => !prevState);
  };

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
