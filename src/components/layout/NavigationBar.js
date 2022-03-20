import React from 'react';
import styled from 'styled-components';

import Search from '../header/Search';
import ToggleMode from '../header/ToggleMode';

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Logo = styled.img`
  height: 40px;
`;

const SiteName = styled.h1`
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: normal;
  color: #5f6368;
  margin: 0;
  padding: 0 1rem;
`;

const NavigationBar = ({ onToggleDarkMode }) => {
  return (
    <Header>
      <Logo
        src="https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png"
        alt="logo"
      />
      <SiteName>Note</SiteName>
      <Search />
      <ToggleMode onToggleDarkMode={onToggleDarkMode} />
    </Header>
  );
};

export default NavigationBar;
