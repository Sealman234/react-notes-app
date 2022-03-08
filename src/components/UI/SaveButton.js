import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #e1e1e1;
  border: none;
  border-radius: 15px;
  padding: 5px 10px;

  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }
`;

const SaveButton = ({ onClick }) => {
  return <Button onClick={onClick}>Save</Button>;
};

export default SaveButton;
