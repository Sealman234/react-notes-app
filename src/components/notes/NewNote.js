import React, { useState } from 'react';
import classes from './NewNote.module.css';

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
      <textarea
        className={classes.textarea}
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={changeHandler}
      />
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className={classes.save} onClick={saveClickHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewNote;
