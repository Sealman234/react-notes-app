import { apiAddNote, apiGetNotes, apiUpdateNotes } from '../api';
import { noteActions } from './note-slice';
import { uiActions } from './ui-slice';

export const fetchNotesData = () => {
  return async (dispatch) => {
    dispatch(uiActions.showLoading(true));

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
      dispatch(uiActions.showLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(uiActions.showLoading(false));
    }
  };
};

export const addNewNote = (newNote) => {
  return async (dispatch) => {
    dispatch(uiActions.showLoading(true));

    const addNote = async () => {
      const response = await apiAddNote(newNote);
      if (response.status !== 200) {
        throw new Error('Sending note data failed.');
      }
    };

    try {
      await addNote();
      await dispatch(fetchNotesData());
      dispatch(uiActions.showLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(uiActions.showLoading(false));
    }
  };
};

export const replaceNotesData = (newNotes) => {
  return async (dispatch) => {
    dispatch(uiActions.showLoading(true));

    const replaceData = async () => {
      const response = await apiUpdateNotes(newNotes);
      if (response.status !== 200) {
        throw new Error('Replacing note data failed.');
      }
    };

    try {
      await replaceData();
      await dispatch(fetchNotesData());
      dispatch(uiActions.showLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(uiActions.showLoading(false));
    }
  };
};
