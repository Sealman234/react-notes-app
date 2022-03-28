import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #e1e1e1;
  border: none;
  border-radius: 0.9375rem;
  padding: 0.3125rem 0.625rem;
  white-space: nowrap;

  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }
`;

const ToggleMode = ({ onToggleDarkMode, isDarkMode }) => {
  return (
    <Button onClick={onToggleDarkMode}>
      {isDarkMode ? 'Toggle Day Mode' : 'Toggle Dark Mode'}
    </Button>
  );
};

export default ToggleMode;
