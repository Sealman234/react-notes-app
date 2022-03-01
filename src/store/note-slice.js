import { createSlice } from '@reduxjs/toolkit';

const initialNoteState = {
  notes: [],
  searchInput: '',
};

const noteSlice = createSlice({
  name: 'note',
  initialState: initialNoteState,
  reducers: {
    replaceNotes(state, action) {
      const loadedData = [];
      for (const key in action.payload) {
        loadedData.push({
          id: key,
          text: action.payload[key].text,
          date: action.payload[key].date,
        });
      }
      state.notes = loadedData;
    },
    searching(state, action) {
      state.searchInput = action.payload;
    },
  },
});

export const noteActions = noteSlice.actions;

export default noteSlice;
