import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewNote from '../components/notes/NewNote';
import NoteList from '../components/notes/NoteList';

import { addNewNote, setNotes } from '../store/note-actions';

const AllNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.notes);
  const searchInput = useSelector((state) => state.note.searchInput);

  useEffect(() => {
    dispatch(setNotes());
  }, [dispatch]);

  const filteredNotes = notes.filter((note) => {
    return (
      note.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      note.description.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  const addNoteHandler = async (titleText, descriptionText) => {
    const today = new Date();
    const year = today.getFullYear();
    const month =
      today.getMonth() + 1 < 10
        ? `0${today.getMonth() + 1}`
        : today.getMonth() + 1;
    const date = today.getDate();
    const newNote = {
      title: titleText,
      description: descriptionText,
      date: `${year}-${month}-${date}`,
    };
    dispatch(addNewNote(newNote));
  };

  return (
    <Fragment>
      <NewNote onAddNote={addNoteHandler} />
      <NoteList notes={filteredNotes} />
    </Fragment>
  );
};

export default AllNotes;
