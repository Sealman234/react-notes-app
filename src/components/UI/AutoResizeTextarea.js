import React, { useRef } from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
  width: 100%;
  height: ${(props) => (props.type === 'title' ? '2.5rem' : '2.25rem')};
  max-height: 330px;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.type === 'title' ? '1rem' : '.875rem')};
  line-height: ${(props) => (props.type === 'title' ? '1.5rem' : '1.25rem')};
  font-weight: ${(props) => props.type === 'title' && 'bold'};
  border: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;

const AutoResizeTextarea = ({ placeholder, type, value, onChange }) => {
  const textareaRef = useRef();

  const resizeHandler = () => {
    textareaRef.current.style.height = type === 'title' ? '2.5rem' : '2.25rem';
    const scHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = `${scHeight}px`;
  };

  return (
    <Textarea
      ref={textareaRef}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onKeyUp={resizeHandler}
    />
  );
};

export default AutoResizeTextarea;
