import { apiAddNote, apiDeleteNote, apiGetNotes, apiPatchNote } from '../api';
import { noteActions } from './note-slice';
import { uiActions } from './ui-slice';

export const setNotes = () => {
  return async (dispatch) => {
    dispatch(uiActions.SHOW_LOADING(true));

    const fetchData = async () => {
      const response = await apiGetNotes();
      if (response.status !== 200) {
        throw new Error('Fetching note data failed.');
      }
      return response.data;
    };

    try {
      const noteData = await fetchData();
      dispatch(noteActions.SET_NOTES(noteData));
      dispatch(uiActions.SHOW_LOADING(false));
    } catch (error) {
      console.log(error);
      dispatch(uiActions.SHOW_LOADING(false));
    }
  };
};

export const addNewNote = (newNote) => {
  return async (dispatch) => {
    dispatch(uiActions.SHOW_LOADING(true));

    const addData = async () => {
      const response = await apiAddNote(newNote);
      if (response.status !== 200) {
        throw new Error('Sending note data failed.');
      }
    };

    try {
      await addData();
      await dispatch(setNotes());
      dispatch(uiActions.SHOW_LOADING(false));
    } catch (error) {
      console.log(error);
      dispatch(uiActions.SHOW_LOADING(false));
    }
  };
};

export const deleteNote = (id) => {
  return async (dispatch) => {
    dispatch(uiActions.SHOW_LOADING(true));

    const deleteData = async () => {
      const response = await apiDeleteNote(id);
      if (response.status !== 200) {
        throw new Error('Deleting note data failed.');
      }
    };

    try {
      await deleteData();
      await dispatch(setNotes());
      dispatch(uiActions.SHOW_LOADING(false));
    } catch (error) {
      console.log(error);
      dispatch(uiActions.SHOW_LOADING(false));
    }
  };
};

export const editNote = (id, data) => {
  return async (dispatch) => {
    dispatch(uiActions.SHOW_LOADING(true));

    const editData = async () => {
      const response = await apiPatchNote(id, data);
      console.log(response);
      if (response.status !== 200) {
        throw new Error('Editing note data failed.');
      }
    };

    try {
      await editData();
      await dispatch(setNotes());
      dispatch(uiActions.SHOW_LOADING(false));
    } catch (error) {
      console.log(error);
      dispatch(uiActions.SHOW_LOADING(false));
    }
  };
};
