import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import NoteList from '../components/notes/NoteList';

import { apiAddNote, apiGetNotes, apiUpdateNotes } from '../api';

const AllNotes = () => {
  const [notes, setNotes] = useState([]);
  const searchInput = useSelector((state) => state.search.searchInput);

  useEffect(() => {
    const getNotes = async () => {
      const response = await apiGetNotes();
      const loadedData = [];
      for (const key in response.data) {
        loadedData.push({
          id: key,
          text: response.data[key].text,
          date: response.data[key].date,
        });
      }
      setNotes(loadedData);
    };

    getNotes();
  }, []);

  const filteredNotes = notes.filter((note) => {
    return note.text.toLowerCase().includes(searchInput.toLowerCase());
  });

  const addNoteHandler = async (text) => {
    // Add a new note
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
    await apiAddNote(newNote);

    // Set note list
    const getNotes = async () => {
      const response = await apiGetNotes();
      const loadedData = [];
      for (const key in response.data) {
        loadedData.push({
          id: key,
          text: response.data[key].text,
          date: response.data[key].date,
        });
      }
      setNotes(loadedData);
    };
    getNotes();
  };

  const deleteNoteHandler = async (id) => {
    const newNotes = notes.filter((note) => note.id !== id);

    // Update notes
    const updateNotes = async (data) => {
      const response = await apiUpdateNotes(data);
      console.log(response);
    };
    await updateNotes(newNotes);

    // Get notes
    const getNotes = async () => {
      const response = await apiGetNotes();
      const loadedData = [];
      for (const key in response.data) {
        loadedData.push({
          id: key,
          text: response.data[key].text,
          date: response.data[key].date,
        });
      }
      setNotes(loadedData);
    };
    await getNotes();
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
