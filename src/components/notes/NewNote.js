import React, { useState } from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  border: none;
  resize: none;
  background-color: #67d7cc;

  &:focus {
    outline: none;
  }
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
  const [noteText, setNoteText] = useState('');
  const characterLimit = 200;

  const changeHandler = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const saveClickHandler = () => {
    if (noteText.trim() === '') return;
    onAddNote(noteText);
    setNoteText('');
  };

  return (
    <div className="note new">
      <TextArea
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={changeHandler}
      />
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <SaveButton onClick={saveClickHandler}>Save</SaveButton>
      </div>
    </div>
  );
};

export default NewNote;
