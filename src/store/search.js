import { createSlice } from '@reduxjs/toolkit';

const initialSearchState = {
  searchInput: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    typing(state, action) {
      state.searchInput = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
