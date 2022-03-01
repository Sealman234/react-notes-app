import { configureStore } from '@reduxjs/toolkit';
import noteSlice from './note-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: { note: noteSlice.reducer, ui: uiSlice.reducer },
});

export default store;
