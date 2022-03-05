import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';

import NavigationBar from './NavigationBar';

const Container = styled.main`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 15px;
  margin-top: 32px;
  min-height: 100vh;
`;

const DarkMode = styled.div`
  transition: background-color 0.3s;

  &.dark-mode {
    background-color: #15202b;

    h1 {
      color: #fff;
    }
  }
`;

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
      <DarkMode className={darkMode && 'dark-mode'}>
        <NavigationBar onToggleDarkMode={toggleDarkModeHandler} />
        <Container>{props.children}</Container>
      </DarkMode>
    </Fragment>
  );
};

export default Layout;
