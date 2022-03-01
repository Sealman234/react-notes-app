import { apiAddNote, apiGetNotes, apiUpdateNotes } from '../api';
import { noteActions } from './note-slice';

export const fetchNotesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await apiGetNotes();
      if (response.status !== 200) {
        throw new Error('Fetching note data failed.');
      }
      return response.data;
    };

    try {
      const noteData = await fetchData();
      dispatch(noteActions.replaceNotes(noteData));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewNote = (newNote) => {
  return async () => {
    const addNote = async () => {
      const response = await apiAddNote(newNote);
      if (response.status !== 200) {
        throw new Error('Sending note data failed.');
      }
    };

    try {
      await addNote();
    } catch (error) {
      console.log(error);
    }
  };
};

export const replaceNotesData = (newNotes) => {
  return async () => {
    const replaceData = async () => {
      const response = await apiUpdateNotes(newNotes);
      if (response.status !== 200) {
        throw new Error('Replacing note data failed.');
      }
    };

    try {
      await replaceData();
    } catch (error) {
      console.log(error);
    }
  };
};
