import React from 'react';
import styled from 'styled-components';

import Note from './Note';

const List = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const NoteList = ({ notes, onDeleteNote }) => {
  return (
    <List>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          description={note.description}
          date={note.date}
          onDeleteNote={onDeleteNote}
        />
      ))}
    </List>
  );
};

export default NoteList;
