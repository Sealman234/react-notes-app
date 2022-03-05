import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NoteList from '../components/notes/NoteList';

import {
  addNewNote,
  fetchNotesData,
  replaceNotesData,
} from '../store/note-actions';

const AllNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.notes);
  const searchInput = useSelector((state) => state.note.searchInput);

  useEffect(() => {
    dispatch(fetchNotesData());
  }, [dispatch]);

  const filteredNotes = notes.filter((note) => {
    return note.text.toLowerCase().includes(searchInput.toLowerCase());
  });

  const addNoteHandler = async (text) => {
    const today = new Date();
    const year = today.getFullYear();
    const month =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;
    const date = today.getDate();
    const newNote = {
      text: text,
      date: `${year}-${month}-${date}`,
    };
    dispatch(addNewNote(newNote));
  };

  const deleteNoteHandler = async (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    dispatch(replaceNotesData(newNotes));
  };

  return (
    <Fragment>
      <NoteList
        notes={filteredNotes}
        onAddNote={addNoteHandler}
        onDeleteNote={deleteNoteHandler}
      />
    </Fragment>
  );
};

export default AllNotes;
