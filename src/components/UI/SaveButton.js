import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.18);
  border: none;
  border-radius: 15px;
  padding: 5px 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
`;

const SaveButton = ({ onClick }) => {
  return <Button onClick={onClick}>Save</Button>;
};

export default SaveButton;
