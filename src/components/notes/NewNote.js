import React, { useRef } from 'react';
import classes from './NewNote.module.css';

const NewNote = ({ onAddNote }) => {
  const textareaRef = useRef();

  const saveClickHandler = () => {
    onAddNote(textareaRef.current.value);
    textareaRef.current.value = '';
  };

  return (
    <div className="note new">
      <textarea
        className={classes.textarea}
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
        ref={textareaRef}
      ></textarea>
      <div className="note-footer">
        <small>200 Remaining</small>
        <button className={classes.save} onClick={saveClickHandler}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewNote;
