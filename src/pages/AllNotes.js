import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewNote from '../components/notes/NewNote';
import NoteList from '../components/notes/NoteList';
import NoteModal from '../components/UI/NoteModal';

import { addNewNote, setNotes } from '../store/note-actions';
import { uiActions } from '../store/ui-slice';

const AllNotes = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.note.notes);
  const searchInput = useSelector((state) => state.note.searchInput);
  const selectIsEditing = useSelector((state) => state.ui.isEditing);
  const [editingNote, setEditingNote] = useState({
    id: '',
    title: '',
    description: '',
    date: '',
  });

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
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const newNote = {
      title: titleText,
      description: descriptionText,
      date: `${year}-${month}-${date}`,
    };
    dispatch(addNewNote(newNote));
  };

  const noteModalOpenHandler = ({ id, title, description, date }) => {
    setEditingNote({ id, title, description, date });
    dispatch(uiActions.SHOW_EDIT_MODAL(true));
  };

  return (
    <Fragment>
      <NewNote onAddNote={addNoteHandler} />
      {selectIsEditing && (
        <NoteModal
          id={editingNote.id}
          title={editingNote.title}
          description={editingNote.description}
          date={editingNote.date}
        />
      )}
      <NoteList notes={filteredNotes} onOpenModal={noteModalOpenHandler} />
    </Fragment>
  );
};

export default AllNotes;
