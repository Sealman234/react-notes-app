import React from 'react';

import Note from './Note';
import NewNote from './NewNote';

import classes from './NoteList.module.css';

const NoteList = ({ notes, onAddNote }) => {
  return (
    <div className={classes.noteList}>
      <NewNote onAddNote={onAddNote} />
      {notes.map((note) => (
        <Note key={note.id} id={note.id} text={note.text} date={note.date} />
      ))}
    </div>
  );
};

export default NoteList;
