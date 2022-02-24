import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import NoteList from '../components/notes/NoteList';
import { useSelector } from 'react-redux';

const DUMMY_NOTES = [
  {
    id: nanoid(),
    text: 'This is my first note!',
    date: '2022-02-17',
  },
  {
    id: nanoid(),
    text: 'This is my second note!',
    date: '2022-02-18',
  },
  {
    id: nanoid(),
    text: 'This is my third note!',
    date: '2022-02-19',
  },
  {
    id: nanoid(),
    text: 'This is my fourth note!',
    date: '2022-02-20',
  },
];

const AllNotes = () => {
  const [notes, setNotes] = useState(DUMMY_NOTES);
  const searchInput = useSelector((state) => state.search.searchInput);

  const filteredNotes = notes.filter((note) => {
    return note.text.toLowerCase().includes(searchInput.toLowerCase());
  });

  const addNoteHandler = (text) => {
    const today = new Date();
    const year = today.getFullYear();
    const month =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;
    const date = today.getDate();
    const newNote = {
      id: nanoid(),
      text: text,
      date: `${year}-${month}-${date}`,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNoteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <NoteList
      notes={filteredNotes}
      onAddNote={addNoteHandler}
      onDeleteNote={deleteNoteHandler}
    />
  );
};

export default AllNotes;
