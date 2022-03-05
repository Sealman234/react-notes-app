import React from 'react';
import styled from 'styled-components';

import Note from './Note';
import NewNote from './NewNote';

const List = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const NoteList = ({ notes, onAddNote, onDeleteNote }) => {
  return (
    <List>
      <NewNote onAddNote={onAddNote} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          onDeleteNote={onDeleteNote}
        />
      ))}
    </List>
  );
};

export default NoteList;
