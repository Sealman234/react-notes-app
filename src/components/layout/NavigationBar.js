import React from 'react';
import styled from 'styled-components';

import Search from '../header/Search';
import ToggleMode from '../header/ToggleMode';

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 8px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Logo = styled.h1`
  font-size: 1.6rem;
  color: #5f6368;
  padding-right: 10px;
`;

const NavigationBar = ({ onToggleDarkMode }) => {
  return (
    <Header>
      <Logo>Keep</Logo>
      <Search />
      <ToggleMode onToggleDarkMode={onToggleDarkMode} />
    </Header>
  );
};

export default NavigationBar;
