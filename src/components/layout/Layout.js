import React, { Fragment } from 'react';
import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={classes.container}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
