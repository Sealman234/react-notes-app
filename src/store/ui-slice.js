import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isEditing: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    SHOW_LOADING(state, action) {
      state.isLoading = action.payload;
    },
    SHOW_EDIT_MODAL(state, action) {
      state.isEditing = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
