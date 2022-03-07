import React, { useState } from 'react';
import styled from 'styled-components';

import AutoResizeTextarea from '../UI/AutoResizeTextarea';

const StyledNewNote = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 32px auto 16px auto;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0 3px 5px rgb(0 0 0 / 20%);
  padding: 0.5rem 1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* 保留換行與連續空格 */
  white-space: pre-wrap;
  /* 允許單字斷行 */
  word-wrap: break-word;
`;

const SaveButton = styled.button`
  background-color: #e1e1e1;
  border: none;
  border-radius: 15px;
  padding: 5px 10px;

  &:hover {
    background-color: #ededed;
    cursor: pointer;
  }
`;

const NewNote = ({ onAddNote }) => {
  const [titleText, setTitleText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const characterLimit = 200;

  const titleChangeHandler = (event) => {
    setTitleText(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setDescriptionText(event.target.value);
    }
  };

  const saveClickHandler = () => {
    if (titleText.trim() === '' && descriptionText.trim() === '') return;
    onAddNote(titleText, descriptionText);
    setTitleText('');
    setDescriptionText('');
  };

  return (
    <StyledNewNote>
      <div>
        <AutoResizeTextarea
          placeholder="標題"
          type="title"
          value={titleText}
          onChange={titleChangeHandler}
        />
        <AutoResizeTextarea
          placeholder="新增記事..."
          type="description"
          value={descriptionText}
          onChange={descriptionChangeHandler}
        />
      </div>
      <div className="note-footer">
        <small>{characterLimit - descriptionText.length} Remaining</small>
        <SaveButton onClick={saveClickHandler}>Save</SaveButton>
      </div>
    </StyledNewNote>
  );
};

export default NewNote;
